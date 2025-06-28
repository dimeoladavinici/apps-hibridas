
import { Router } from 'express'
import { listarFabricantes, crearFabricante, obtenerFabricantePorId, actualizarFabricante, eliminarFabricante } from '../controllers/fabricantesController.js'
import auth from '../middleware/auth.js'

const router = Router()

router.use(auth)

router.get('/', listarFabricantes)
router.post('/', crearFabricante)
router.get('/:id', obtenerFabricantePorId)
router.put('/:id', actualizarFabricante)
router.delete('/:id', eliminarFabricante)

export default router
