import { useState } from "react"
import { useNavigate } from "react-router-dom"
import './index.css'

export const Register = () => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [emailConf, setEmailConf] = useState('')
    const [senha, setSenha] = useState('')
    const navigate = useNavigate()

    const goToLogin = () => {       
        navigate('/login')          
    }

    const handleRegister = async () => {

    }

    return (
        <div>
            <div className="div_form_container">
                <div>
                    <form className="class_form_register">
                    <label className="class_form_label">REGISTRE-SE</label>
                        <div>
                            <input value={nome} onChange={e => setNome(e.target.value)} className="input_form" type="text" placeholder="Digite o seu nome" />
                            </div>
                        <div>
                            <input value={email} onChange={e => setEmail(e.target.value)} className="input_form" type="text" placeholder="Digite o seu email" />
                        </div>
                        <div>
                            <input value={emailConf} onChange={e => setEmailConf(e.target.value)} className="input_form" type="text" placeholder="Confirme o seu email" />
                        </div>
                        <div>
                            <input value={senha} onChange={e => setSenha(e.target.value)} className="input_form" type="password" placeholder="Digite sua senha" />
                        </div>
                        <div>
                            <button type="button" className="button_enviar" onClick={handleRegister}>Registre-se</button>
                            <button type="button" className="button_enviar" onClick={goToLogin}>Já tem uma conta? Entre agora</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}