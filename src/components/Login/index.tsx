import { useContext, useState } from "react"
import { AuthContext } from "../../contexts/Auth/AuthContext"
import { useNavigate } from "react-router-dom"
import './index.css'

export const Login = () => {
    const auth = useContext(AuthContext)
    const navigate = useNavigate()



    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async () => {
        if(email && password) {
            const isLogged = await auth.signin(email, password)

            if(isLogged){
                navigate('/home')
            } else {
                alert('SENHA OU USUARIO INVALIDO')
            }
        }
    }

    const handleRegister = async () => {       
        navigate('/register')          
    }

    return (
        <div>
            <div className="div_form_container">
                <div>
                    <form className="class_form_login">
                        <label className="class_form_label">ENTRAR</label>
                        <div>
                            <input className="input_form" type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="Digite seu email" />
                        </div>                        
                        <div>
                            <input className="input_form" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Digite sua senha" />
                        </div>
                        <div>
                            <button type="button" className="button_enviar" onClick={handleLogin}>Logar</button>
                            <button type="button" className="button_enviar" onClick={handleRegister}>Ainda não tem conta? Crie agora</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}