// import {API_BP} from './api_bp.model'
import { collections } from "../db/connect";
import { ObjectId } from "mongodb";
import { DB_COLLECTION_NAME } from "../utils/constants";
import { IAPI_BP } from "./api_bp.type";

export class API_BP_Service {
    // private apiModel: typeof API_BP;
    constructor() { }

    async GetAllAPI() {

        try {
            // console.log('CHECKER',{mod:  this.apiModel})
            const APIs = await collections.apis?.find().toArray()
            return APIs
        } catch (e: any) {
            //console.log({model: Object.keys(this.apiModel.collection.find())})
            throw Error(e)
        }
    }

    /**
 * Retrieves a single API document based on the provided API ID.
 *
 * @param apiID - The unique identifier of the API document to retrieve.
 *
 * @returns A Promise that resolves to the found API document if successful, or rejects with an error if unsuccessful.
 *
 * @throws Will throw an error if the database operation fails.
 *
 * @example
 */
    async GetOneAPI(apiID: string) {
        try {
            const singleAPI = await collections.apis?.findOne({ _id: new ObjectId(apiID) })
            return singleAPI
        } catch (error) {
            throw Error(error)
        }
    }


    /**
 * Searches for a single API based on a specified field and value.
 *
 * @param apiField - The field to search within the API documents.
 * @param value - The value to match against the specified field.
 *
 * @returns A Promise that resolves to the found API document if successful, or rejects with an error if unsuccessful.
 *
 * @throws Will throw an error if the database operation fails.
 *
 * @example
 */
    async SearchForOneAPI(field: string, value: string) {
        try {
            const foundAPI = await collections.apis?.findOne({ [field]: value })
            return foundAPI
        } catch (error: any) {
            throw Error(error)
        }
    }

    async DeleteOneAPI(id: string) {
        try {
            await collections?.apis?.deleteOne({ _id: new ObjectId(id) })
            return true
        } catch (error: any) {
            throw Error(error)
        }
    }

    async DeleteAllAPI() {
        // only huncho admin can use this function
        // this will clear the whole collection
    }


    /**
    * Creates a new API document in the database.
    *
    * @param data - The data to be used to create the new API document.
    *
    * @returns A Promise that resolves to an object containing the creation status and the saved API document.
    *          If successful, the object will have the following structure:
    *
    */
    public async CreateOneAPI(data: IAPI_BP): Promise<{}> {
        try {
            const savedAPI = await collections.apis?.insertOne(data)
            return { created: 'API', data: savedAPI }
        } catch (error: any) {
            throw Error(error)
        }
    }

}
