// import type {API_BP_Service as API_BP_ServiceType} from './api_bp.service'
import {API_BP_Service} from './api_bp.service'

export class API_BP_Controller {
    // private apiBPService: API_BP_ServiceType;
    private apiBPService: any;

    constructor() {
        this.apiBPService = new API_BP_Service()
    }

    public async getAllResources(req: Request<any>, res: Response<any>): Promise<void> {
        try {
            const resource = await this.apiBPService.GetAllAPI()
            // @ts-ignore
            res.status(200).json({data: resource})
        } catch (e) {
            res.status(400).json({ e })
            // console.log({e})
        }
    }
    
    public async getSingleResource() {}
    async changeResource() {}

    async deleteResource() {}

}
