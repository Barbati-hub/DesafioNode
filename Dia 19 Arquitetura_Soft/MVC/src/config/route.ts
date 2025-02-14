import { Router } from 'express'
import  { UsuarioController }  from "../controllers/userControllers"

const router = Router()

router.get('/', UsuarioController.index); 

export default router 