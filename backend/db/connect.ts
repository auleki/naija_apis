import * as mongoDB from 'mongodb'
import {startServer} from "../server";

// export async function connectToDB () {
//     try {
//         const DB_URL = process.env.MONGODB_URL || ''
//         mongoose.set({ strictQuery: false })
//         console.log({DB_URL})
//         const connection = await mongoose.connect(DB_URL)
//         console.log({connection: Object.keys(connection)})
//         startServer()
//     } catch (e) {
//         throw Error('Could not connect:' + e)
//     }
// }

export const collections: {apis?: mongoDB.Collection} = {}
export let db: mongoDB.Db;
export async function connectToDB() {
    try {
        const DB_URL: string = process.env.MONGODB_URL || ''
        const client: mongoDB.MongoClient = new mongoDB.MongoClient(DB_URL)
        await client.connect()
        db = client.db(process.env.DB_NAME)
        const apiCollection = db.collection('apis')
        collections.apis = apiCollection
        startServer()
        console.log(`Successfully connected to database: ${db.databaseName} and collection: ${apiCollection.collectionName}`);
    } catch (e) {
        console.log({e})
    }
}