import { MongoClient } from 'mongodb';

let client;

export const initializeDbConnection = async () => {
    client = await MongoClient.connect('mongodb://localhost:3000', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

export const getDbConnection = dbName => {
    const db = client.db(dbName);
    return db;
}

// import { MongoClient } from 'mongodb';

// let client;
// const Db = process.env.ATLAS_URI;

// export const initializeDbConnection = async () => {
//     client = await MongoClient.connect(Db,{
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     });
// };

// // var _db;
// //const dbName = "bljDatabase";

// export const getDbConnection = dbName => {
//     const db = client.db(dbName);
//     return db;
// }

// module.exports = {
//     connectToServer: function (callback) {
//         client.connect(function (err, db){
//             //Verify we have a good db object
//             if (db){
//                  = client.db("bljDatabase");
//                 console.log("Successfully connected to MongoDB.");
//             }
//             return callback(err);
//         });
//     },

//     getDbConnection : function (){
//         return client;
//     },
// };
