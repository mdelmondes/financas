import React from "react"
import './index.css'

export const ListagemCategorias = ({categorias, removeCategoria, atualizaCategoria}: {categorias: any, removeCategoria:any, atualizaCategoria:any }) => {
    return (
        <div className='tarefa'>
            <div className='content'>
                <p>{categorias.cat_name}</p>
                <p className='category'>{categorias.category}</p>
            </div>
            <div>
                <button className='complete' onClick={() => atualizaCategoria(categorias.id)} >Atualizar</button>
                <button className='remove' onClick={() => removeCategoria(categorias.id)}>Remover</button>
            </div>
        </div>
    )
}