import React, { useContext } from 'react';
import './App.css';
import { Route, Routes, Link, useNavigate } from 'react-router-dom'
import { Home } from './components/Home';
import { Private } from './components/Private';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { AuthContext } from './contexts/Auth/AuthContext';
import { Register } from './components/Register';
import { Login } from './components/Login';
import { Navbar } from './components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const auth = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = async () => {
    await auth.signout()
    navigate('/')
  }

  return (
    <div className="App">
      {auth.user && <Navbar/>}
      {/*
      <hr/>
     */}
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="*" element={<RequireAuth><Home/></RequireAuth>} />
        <Route path="/home" element={<RequireAuth><Home/></RequireAuth>} />
        <Route path="/private" element={<RequireAuth><Private/></RequireAuth>} />
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
