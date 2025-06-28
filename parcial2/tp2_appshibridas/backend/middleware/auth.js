import jwt from 'jsonwebtoken'
import { isBlacklisted } from './tokenBlacklist.js'
export default (req, res, next) => {
    const h = req.headers.authorization
    if (!h || !h.startsWith('Bearer ')) return res.status(401).json({ error: 'token' })
    const t = h.split(' ')[1]
    if (isBlacklisted(t)) return res.status(401).json({ error: 'token' })
    try {
        const { usuarioId } = jwt.verify(t, process.env.JWT_SECRET)
        req.usuarioId = usuarioId
        next()
    } catch {
        res.status(401).json({ error: 'token' })
    }
}