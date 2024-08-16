import {Router} from 'express'
// import {API_BP_Service} from "./api_bp.service";
import {API_BP_Controller} from "./api_bp.controller";

const router = Router()

// const apiService = new API_BP_Service()
const apiController: API_BP_Controller = new API_BP_Controller()



// router.get('/', apiService.GetAllAPI.bind(apiService))
router.get('/', (req, res) => apiController.getAllResources(req, res,))

export default router
