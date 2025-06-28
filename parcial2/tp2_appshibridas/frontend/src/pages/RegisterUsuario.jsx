
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../api.js'

export default function RegisterUsuario() {
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const handleSubmit = async e => {
        e.preventDefault()
        const res = await api.post('/usuarios/register', { nombre, email, password })
        localStorage.setItem('jwtToken', res.data.token)
        navigate('/alfajores')
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <div className="mb-3">
                <label>Nombre</label>
                <input type="text" className="form-control" value={nombre} onChange={e => setNombre(e.target.value)} required />
            </div>
            <div className="mb-3">
                <label>Email</label>
                <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} required />
            </div>
            <div className="mb-3">
                <label>Password</label>
                <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} required />
            </div>
            <button type="submit" className="btn btn-primary">Register</button>
        </form>
    )
}
