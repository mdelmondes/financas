import React, { useContext } from 'react';
import './App.css';
import { Route, Routes, Link, useNavigate } from 'react-router-dom'
import { Home } from './components/Home';
import { Private } from './components/Private';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { AuthContext } from './contexts/Auth/AuthContext';

function App() {
  const auth = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = async () => {
    await auth.signout()
    navigate('/')
  }

  return (
    <div className="App">
      <header>
        <h1>Header site</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/private">Pagina privada</Link>
          {auth.user && <a href="#" onClick={handleLogout}>Sair</a>}
        </nav>
      </header>
      <hr/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/private" element={<RequireAuth><Private/></RequireAuth>} />
      </Routes>
    </div>
  );
}

export default App;
