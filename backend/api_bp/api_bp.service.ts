// import {API_BP} from './api_bp.model'
import {collections} from "../db/connect";

export class API_BP_Service {
    // private apiModel: typeof API_BP;
    constructor() {}

    async GetAllAPI() {
        
        try {
            // console.log('CHECKER',{mod:  this.apiModel})
            const APIs = await collections.apis?.find().toArray()
            console.log({api: APIs})
            return APIs
        } catch (e: any) {
            //console.log({model: Object.keys(this.apiModel.collection.find())})
            throw Error(e)
        }
    }

    async GetOneAPI() {

    }

    async DeleteOneAPI() {

    }

    async DeleteAllAPI() {
        // only huncho admin can use this function
        // this will clear the whole collection
    }
    
    async CreateOneAPI(): Promise<void> {
        // take info
        
        // save info to schema
        
        // respond with saved status
        
    }

}
