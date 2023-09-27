import React, { useContext } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import { Home } from './components/Home';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { AuthContext } from './contexts/Auth/AuthContext';
import { Register } from './components/Register';
import { Login } from './components/Login';
import { Navbar } from './components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Category } from './components/Category';

function App() {
  const auth = useContext(AuthContext)

  return (
    <div className="App">
      {auth.user && <Navbar/>}

      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="*" element={<RequireAuth><Home/></RequireAuth>} />
        <Route path="/home" element={<RequireAuth><Home/></RequireAuth>} />
        <Route path="/category" element={<RequireAuth><Category/></RequireAuth>} />
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
