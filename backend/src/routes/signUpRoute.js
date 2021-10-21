import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { getDbConnection } from '../db';

export const signUpRoute = {
    path: '/api/signup',
    method: 'post',
    handler: async (req, res) => {
        const { username, email, password } = req.body;
        console.log('username: ' + username + "\nemail: " + email, "\npassword: " + password );

        const db = getDbConnection('blj-db');
        const user = await db.collection('users').findOne({ email });

        if (user) {
            res.sendStatus(409);
        }

        const passwordHash = await bcrypt.hash(password, 10);

        const startingInfo = {
            hairColor: '',
            favoriteFood: '',
            bio: '',
        };

        const result = await db.collection('users').insertOne({
            username,
            email,
            passwordHash,
            info: bio,
            isVerified: false,
        });
        const { insertedId } = result;

        jwt.sign({
            id: insertedId,
            username,
            email,
            info: bio,
            isVerified: false,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '2d',
        },
        (err, token) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(200).json({ token });
        });
    }
}