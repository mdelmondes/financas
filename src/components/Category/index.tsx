import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../contexts/Auth/AuthContext"
import './index.css'
import { toast } from 'react-toastify';
import { ListagemCategorias } from "./Listagem";

export const Category = () =>  {
    const auth = useContext(AuthContext)
    const [name, setName] = useState('')
    const [status, setStatus] = useState('')
    const [data, setData] = useState<any[]>([])

    useEffect(() => {        
        getCategories()
    },)
    
    const getCategories = async () => {            
        try {
            const data = await auth.getCategory()
            
            if (data) {
                setData(data)
            }

        } catch (error) {
            console.log(error)
        }
    }


    const enviarCategoria = async () => {
        var isTrue = (status === 'true')

        const sendCategory = await auth.createCategory(name, isTrue)

        if(sendCategory){
            getCategories()
            toast.success("Categoria cadastrada com sucesso!", {
                position: toast.POSITION.TOP_RIGHT
            })

            setStatus('')
            setName('')
        } else {
            toast.error("Houve um erro! Tente novamente", {
                position: toast.POSITION.TOP_RIGHT
            })

            return false
        }
    }

    const removeCategoria = async (id: number) => {
        console.log(id)
    }

    const atualizaCategoria = async (id: number) => {
        console.log(id)
    }


    return (
        <div>
            <div className="div_form_container_category">
                <div>
                    <form className="class_form_category">
                    <label className="class_form_label">CADASTRAR CATEGORIA</label>
                        <div>
                            <input value={name} onChange={e => setName(e.target.value)} className="input_form" type="text" placeholder="Digite o nome da categoria" />
                        </div>
                        <div>
                            <input type="radio" name="status" value="true" id="true" onChange={e => setStatus(e.target.value)}/>
                            <label className="label_form" htmlFor="true">Ativo</label>
                            <input type="radio" name="status" value="false" id="false" onChange={e => setStatus(e.target.value)}/>
                            <label className="label_form" htmlFor="false">Inativa</label>
                        </div>
                        <div>
                            <button type="button" className="buttons_category" onClick={enviarCategoria} >Cadastrar categoria</button>
                        </div>
                    </form>
                </div>
            </div>
            <hr/>
            <div className='tarefa-list'>            
                {data.map((categoria) => (
                    <ListagemCategorias key={categoria.id} categorias={categoria} removeCategoria={removeCategoria} atualizaCategoria={atualizaCategoria}/>
                ))}
            
            </div>
        </div>
    )
}