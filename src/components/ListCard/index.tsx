import React from 'react'
import Card from '../Card/index'
import { ListaCardS } from './styles'
import ListaPerfil from '../store/reducers/Perfils'


const ListCard = () => (
    <>
        <ListaCardS className='Container'>
            {ListaPerfil.itens.map((perfil) => (
                <Card key={perfil.id} perfil={perfil} />
            ))}

        </ListaCardS>
    </>

)

export default ListCard