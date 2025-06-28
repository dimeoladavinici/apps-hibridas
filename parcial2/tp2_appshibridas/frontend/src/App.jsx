
import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Login from './pages/Login.jsx'
import RegisterUsuario from './pages/RegisterUsuario.jsx'
import Alfajores from './pages/Alfajores.jsx'
import CrearAlfajor from './pages/CrearAlfajor.jsx'
import EditarAlfajor from './pages/EditarAlfajor.jsx'
import Fabricantes from './pages/Fabricantes.jsx'

const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('jwtToken')
    return token ? children : <Navigate to="/login" />
}

export default function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <div className="container mt-4">
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<RegisterUsuario />} />
                    <Route path="/alfajores" element={<PrivateRoute><Alfajores /></PrivateRoute>} />
                    <Route path="/alfajores/nuevo" element={<PrivateRoute><CrearAlfajor /></PrivateRoute>} />
                    <Route path="/alfajores/editar/:id" element={<PrivateRoute><EditarAlfajor /></PrivateRoute>} />
                    <Route path="/fabricantes" element={<PrivateRoute><Fabricantes /></PrivateRoute>} />
                    <Route path="*" element={<Navigate to="/alfajores" />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
