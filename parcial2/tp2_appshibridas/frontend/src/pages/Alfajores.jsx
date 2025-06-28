
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../api.js'

export default function Alfajores() {
    const [items, setItems] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        api.get('/alfajores').then(res => setItems(res.data))
    }, [])
    const handleDelete = id => {
        api.delete(`/alfajores/${id}`).then(() => setItems(items.filter(i => i._id !== id)))
    }
    return (
        <div>
            <h2>Alfajores</h2>
            <button className="btn btn-success mb-3" onClick={() => navigate('/alfajores/nuevo')}>Nuevo</button>
            <table className="table">
                <thead>
                    <tr>
                        <th>Relleno</th>
                        <th>Bañado</th>
                        <th>Precio</th>
                        <th>Calorías</th>
                        <th>Fabricante</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(a => (
                        <tr key={a._id}>
                            <td>{a.relleno}</td>
                            <td>{a.banado ? 'Sí' : 'No'}</td>
                            <td>{a.precio}</td>
                            <td>{a.calorias}</td>
                            <td>{a.fabricanteId.nombre}</td>
                            <td>
                                <button className="btn btn-primary btn-sm me-2" onClick={() => navigate(`/alfajores/editar/${a._id}`)}>Editar</button>
                                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(a._id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
