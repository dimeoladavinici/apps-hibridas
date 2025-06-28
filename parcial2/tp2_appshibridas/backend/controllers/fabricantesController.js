
import Fabricante from '../models/Fabricante.js'
import Alfajor from '../models/Alfajor.js'

export const listarFabricantes = async (req, res, next) => {
    try {
        const items = await Fabricante.find()
        res.json(items)
    } catch (err) {
        next(err)
    }
}

export const crearFabricante = async (req, res, next) => {
    try {
        const { nombre } = req.body
        const nuevo = new Fabricante({ nombre })
        const saved = await nuevo.save()
        res.status(201).json(saved)
    } catch (err) {
        next(err)
    }
}

export const obtenerFabricantePorId = async (req, res, next) => {
    try {
        const { id } = req.params
        const item = await Fabricante.findById(id)
        if (!item) return res.status(404).json({ error: 'Not found' })
        res.json(item)
    } catch (err) {
        next(err)
    }
}

export const actualizarFabricante = async (req, res, next) => {
    try {
        const { id } = req.params
        const { nombre } = req.body
        const updated = await Fabricante.findByIdAndUpdate(id, { nombre }, { new: true })
        if (!updated) return res.status(404).json({ error: 'Not found' })
        res.json(updated)
    } catch (err) {
        next(err)
    }
}

export const eliminarFabricante = async (req, res, next) => {
    try {
        const { id } = req.params
        const tiene = await Alfajor.exists({ fabricanteId: id })
        if (tiene) return res.status(409).json({ error: 'Conflict' })
        const deleted = await Fabricante.findByIdAndDelete(id)
        if (!deleted) return res.status(404).json({ error: 'Not found' })
        res.status(204).end()
    } catch (err) {
        next(err)
    }
}
