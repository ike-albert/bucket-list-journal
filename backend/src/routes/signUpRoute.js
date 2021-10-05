import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { getDbConnection } from '../db';


export const signUpRoute = {
    path : '/api/signup',
    method: 'post',
    handler: async (req, res) =>{
        //get the email & password from request
        const { email, password} = req.body;

        //form connection in the database
        const db = getDbConnection('react-auth-db');
        //check if there are any users with that email in our database
        const user = await db.collection('users').findOne({ email });

        //If the user exists, send an error message back to the client
        if (user){
            res.sendStatus(409);
        }

        //Else, ecnrypt their password.
        const passwordHash = await bcrypt.hash(password, 10);
        //10 = Number of interations to use to encrypt the password. 10 is a good rule of thumb
        
        //Create a new user with all our user's info in our database
        // This info includes starter info asides from the email & password

        const startingInfo = {
            hairColor: '',
            favoriteFood: '',
            bio: '',
        };

        const result = await db.collection('users').insertOne({
            email,
            passwordHash,
            info: startingInfo,
            isVerified: false,
        });

        const { insertedId } = result;

        jwt.sign({
            id : insertedId,
            email,
            info: startingInfo,
            isVerified: false,
        },
        process.env.JWT_Secret,
        {
            expiresIn: '2d'
        },
        (err, token) => {
            if (err){
                return res.status(500).send(err);
            }
            res.status(200).json({ token });
        });
        // First arg = > data we want to include, 
        //second => secret
        //3rd => how long the json web token lasts. Anything past that won't be counted as valid.
        //4th => A callback that will be called when our token is ready
    }
}