import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from './../../contexts/Auth/AuthContext';
import "./index.css"

export const Navbar = () => {
    const auth = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogout = async () => {
        await auth.signout()
        navigate('/')
    }

    return (
        <header className="header">
            <a href='#' className="logo">LOGO</a>
            <nav className="navbar">
                <Link to='/home'>Home</Link>
                <Link to='/category'>Categoria</Link>
                {auth.user && <a href="#" onClick={handleLogout}>Sair</a>}
            </nav>
        </header>
    )
}