
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../api.js'

export default function CrearAlfajor() {
    const [relleno, setRelleno] = useState('')
    const [banado, setBanado] = useState(false)
    const [precio, setPrecio] = useState('')
    const [calorias, setCalorias] = useState('')
    const [fabricantes, setFabricantes] = useState([])
    const [fabricanteId, setFabricanteId] = useState('')
    const [imagen, setImagen] = useState(null)
    const navigate = useNavigate()
    useEffect(() => {
        api.get('/fabricantes').then(res => setFabricantes(res.data))
    }, [])
    const handleSubmit = async e => {
        e.preventDefault()
        const form = new FormData()
        form.append('relleno', relleno)
        form.append('banado', banado)
        form.append('precio', precio)
        form.append('calorias', calorias)
        form.append('fabricanteId', fabricanteId)
        form.append('imagen', imagen)
        await api.post('/alfajores', form)
        navigate('/alfajores')
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>Nuevo Alfajor</h2>
            <div className="mb-3">
                <label>Relleno</label>
                <input type="text" className="form-control" value={relleno} onChange={e => setRelleno(e.target.value)} required />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" checked={banado} onChange={e => setBanado(e.target.checked)} />
                <label className="form-check-label">Bañado</label>
            </div>
            <div className="mb-3">
                <label>Precio</label>
                <input type="number" className="form-control" value={precio} onChange={e => setPrecio(e.target.value)} required />
            </div>
            <div className="mb-3">
                <label>Calorías</label>
                <input type="number" className="form-control" value={calorias} onChange={e => setCalorias(e.target.value)} required />
            </div>
            <div className="mb-3">
                <label>Fabricante</label>
                <select className="form-select" value={fabricanteId} onChange={e => setFabricanteId(e.target.value)} required>
                    <option value="">Seleccione</option>
                    {fabricantes.map(f => (
                        <option key={f._id} value={f._id}>{f.nombre}</option>
                    ))}
                </select>
            </div>
            <div className="mb-3">
                <label>Imagen</label>
                <input type="file" className="form-control" accept="image/*" onChange={e => setImagen(e.target.files[0])} required />
            </div>
            <button type="submit" className="btn btn-primary">Guardar</button>
        </form>
    )
}
