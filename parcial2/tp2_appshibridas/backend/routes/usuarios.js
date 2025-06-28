
import { Router } from 'express'
import { registrarUsuario, loginUsuario } from '../controllers/usuariosController.js'
import auth from '../middleware/auth.js'
import { addToBlacklist } from '../middleware/tokenBlacklist.js'
import jwt from 'jsonwebtoken'

const router = Router()


router.post('/register', registrarUsuario)
router.post('/login', loginUsuario)


router.post('/logout', auth, (req, res) => {
    const token = req.headers.authorization.split(' ')[1]
    addToBlacklist(token)
    res.status(204).end()
})


router.post('/refresh', (req, res) => {
    const header = req.headers.authorization
    if (!header || !header.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'token' })
    }
    const token = header.split(' ')[1]
    try {
        const { usuarioId } = jwt.verify(token, process.env.JWT_SECRET)
        const newToken = jwt.sign(
            { usuarioId },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES }
        )
        res.json({ token: newToken })
    } catch {
        res.status(401).json({ error: 'token' })
    }
})

export default router
