import {Router} from 'express'
// import {API_BP_Service} from "./api_bp.service";
import {API_BP_Controller} from "./api_bp.controller";

const router = Router()

// const apiService = new API_BP_Service()
const apiController: API_BP_Controller = new API_BP_Controller()

// router.get('/', apiService.GetAllAPI.bind(apiService))
router.get('/', (req, res) => apiController.getAllResources(req, res))
router.get('/:id', (req, res) => apiController.getSingleResourceByID(req, res))
router.post('/', (req, res) => apiController.createResource(req, res))
router.delete('/:id', (req, res) => apiController.deleteResource(req, res))

export default router
