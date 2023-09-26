import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from './../../contexts/Auth/AuthContext';

export const Navbar = () => {
    const auth = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogout = async () => {
        await auth.signout()
        navigate('/')
    }

    return (
        <div>
            <header>
                <nav>
                    <Link to="/home">Home</Link>
                    {<Link to="/category">Categoria</Link>}
                    {auth.user && <a href="#" onClick={handleLogout}>Sair</a>}
                </nav>
            </header>
        </div>
    )
}