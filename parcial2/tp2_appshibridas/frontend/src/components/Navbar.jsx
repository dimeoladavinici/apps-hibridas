
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
    const token = localStorage.getItem('jwtToken')
    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem('jwtToken')
        navigate('/login')
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">AlfajoresApp</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {token && (
                            <>
                                <li className="nav-item"><Link className="nav-link" to="/alfajores">Alfajores</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/fabricantes">Fabricantes</Link></li>
                                <li className="nav-item"><button className="btn nav-link" onClick={logout}>Logout</button></li>
                            </>
                        )}
                        {!token && (
                            <>
                                <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
