
import React, { useState, useEffect } from 'react'
import api from '../api.js'

export default function Fabricantes() {
    const [items, setItems] = useState([])
    const [nombre, setNombre] = useState('')
    useEffect(() => {
        api.get('/fabricantes').then(res => setItems(res.data))
    }, [])
    const handleCreate = async e => {
        e.preventDefault()
        const res = await api.post('/fabricantes', { nombre })
        setItems([...items, res.data])
        setNombre('')
    }
    const handleDelete = id => {
        api.delete(`/fabricantes/${id}`).then(() => setItems(items.filter(i => i._id !== id)))
    }
    return (
        <div>
            <h2>Fabricantes</h2>
            <form onSubmit={handleCreate} className="mb-3">
                <div className="input-group">
                    <input type="text" className="form-control" value={nombre} onChange={e => setNombre(e.target.value)} placeholder="Nuevo fabricante" required />
                    <button type="submit" className="btn btn-success">Agregar</button>
                </div>
            </form>
            <ul className="list-group">
                {items.map(f => (
                    <li key={f._id} className="list-group-item d-flex justify-content-between align-items-center">
                        {f.nombre}
                        <button className="btn btn-danger btn-sm" onClick={() => handleDelete(f._id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
