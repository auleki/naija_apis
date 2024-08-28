// import type {API_BP_Service as API_BP_ServiceType} from './api_bp.service'
import { API_BP_Service } from './api_bp.service'

export class API_BP_Controller {
    // private apiBPService: API_BP_ServiceType;
    private apiBPService: any;

    constructor() {
        this.apiBPService = new API_BP_Service()
    }

    public async getAllResources(
        req: Request<{}, any, any, any>,
        res: Response<any>
    ): Promise<void> {
        try {
            const query = req.query
            
            if (Object.keys(query).length) {
                const [field, value] = Object.entries(query)[0]
                const foundResource = await this.apiBPService.SearchForOneAPI(field, value)
                res.status(200).json({data: foundResource})
            } else {
                const resource = await this.apiBPService.GetAllAPI()
                res.status(200).json({ data: resource })
            }
        } catch (e) {
            res.status(400).json({ e })
            // console.log({e})
        }
    }

    public async createResource(
        req: Request<{}, any, any, any>,
        res: Response<any>
    ) {
        try {
            const newResource = await this.apiBPService.CreateOneAPI(req.body)
            res.json({ data: newResource })
        } catch (error: any) {
            res.status(400).json({ error: error.message })
        }
    }

    public async getSingleResourceByID(
        req: Request<{ id: string; }, any, any, ParsedQs, Record<string, any>>,
        res: Response<any, Record<string, any>, number>
    ): Promise<void> {
        try {
            const singleResource = await this.apiBPService.GetOneAPI(req.params.id)
            res.status(400).json({ data: singleResource })
        } catch (error: any) {
            res.status(400).json({ error: error.message })
        }
    }

    // public async querySingleResourceField(
    //     req: Request<{ id: string; field: string; }, any, any, ParsedQs, Record<string, any>>,
    //     res: Response<any, Record<string, any>, number>
    // ) {
    //     try {
    //         const foundResource = await this.apiBPService.GetOneAPI()
    //         console.log({ foundResource })
    //     } catch (error: any) {
    //         res.status(400).json({ error: error.message })
    //     }
    // }
    async changeResource() { }

    async deleteResource(
        req: Request<{ id: string; field: string; }, any, any, ParsedQs, Record<string, any>>,
        res: Response<any, Record<string, any>, number>
    ) {
        try {
            const apiID = req.params.id;
            const hasDeletedResource = await this.apiBPService.DeleteOneAPI(apiID)
            if (hasDeletedResource) 
                res.status(200).json({ message: 'Resource deleted successfully' })
            else
                throw Error('Could not delete resource')
        } catch (error: any) {
            res.status(400).json({error: error.message})
        }
    }

    async deleteAllResources() {}

}
