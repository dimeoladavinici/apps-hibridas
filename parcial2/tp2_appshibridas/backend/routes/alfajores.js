
import { Router } from 'express'
import { listarAlfajores, crearAlfajor, obtenerAlfajorPorId, actualizarAlfajor, eliminarAlfajor } from '../controllers/alfajoresController.js'
import auth from '../middleware/auth.js'
import upload from '../middleware/multer.js'

const router = Router()

router.use(auth)

router.get('/', listarAlfajores)
router.post('/', upload.single('imagen'), crearAlfajor)
router.get('/:id', obtenerAlfajorPorId)
router.put('/:id', upload.single('imagen'), actualizarAlfajor)
router.delete('/:id', eliminarAlfajor)

export default router
