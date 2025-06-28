
import Usuario from '../models/Usuario.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const registrarUsuario = async (req, res, next) => {
    try {
        const { nombre, email, password } = req.body
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)
        const usuario = new Usuario({ nombre, email, password: hash })
        const saved = await usuario.save()
        const token = jwt.sign(
            { usuarioId: saved._id },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES }
        )
        return res.status(201).json({ token })
    } catch (err) {

        if (err.code === 11000) {
            return res.status(409).json({ error: 'Email already registered' })
        }
        next(err)
    }
}

export const loginUsuario = async (req, res, next) => {
    try {
        const { email, password } = req.body
        const usuario = await Usuario.findOne({ email })
        if (!usuario) return res.status(401).json({ error: 'Invalid credentials' })
        const match = await bcrypt.compare(password, usuario.password)
        if (!match) return res.status(401).json({ error: 'Invalid credentials' })
        const token = jwt.sign({ usuarioId: usuario._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES })
        res.json({ token })
    } catch (err) {
        next(err)
    }
}
