
import Alfajor from '../models/Alfajor.js'
import fs from 'fs'

export const listarAlfajores = async (req, res, next) => {
    try {
        const alfajores = await Alfajor.find().populate('fabricanteId')
        res.json(alfajores)
    } catch (err) {
        next(err)
    }
}

export const crearAlfajor = async (req, res, next) => {
    try {
        const { relleno, banado, precio, calorias, fabricanteId } = req.body
        const imagen = req.file.path
        const nuevo = new Alfajor({ relleno, banado, precio, calorias, fabricanteId, imagen })
        const saved = await nuevo.save()
        res.status(201).json(saved)
    } catch (err) {
        next(err)
    }
}

export const obtenerAlfajorPorId = async (req, res, next) => {
    try {
        const { id } = req.params
        const alfajor = await Alfajor.findById(id).populate('fabricanteId')
        if (!alfajor) return res.status(404).json({ error: 'Not found' })
        res.json(alfajor)
    } catch (err) {
        next(err)
    }
}

export const actualizarAlfajor = async (req, res, next) => {
    try {
        const { id } = req.params
        const data = { ...req.body }
        if (req.file) {
            const existente = await Alfajor.findById(id)
            fs.unlinkSync(existente.imagen)
            data.imagen = req.file.path
        }
        const updated = await Alfajor.findByIdAndUpdate(id, data, { new: true })
        if (!updated) return res.status(404).json({ error: 'Not found' })
        res.json(updated)
    } catch (err) {
        next(err)
    }
}

export const eliminarAlfajor = async (req, res, next) => {
    try {
        const { id } = req.params
        const alfajor = await Alfajor.findById(id)
        if (!alfajor) return res.status(404).json({ error: 'Not found' })
        fs.unlinkSync(alfajor.imagen)
        await alfajor.remove()
        res.status(204).end()
    } catch (err) {
        next(err)
    }
}
