import React from 'react'
import PerfilCard from '../PefilCard/index'
import { ListaCardS, HeroPerfil } from './styles'
import ImgHero from '../../images/imgperfil.png'

const PerfilListCard = () => (
    <>
        <HeroPerfil className='Container'><img src={ImgHero} alt="ImgHero"></img></HeroPerfil>
        <ListaCardS className='Container'>
            <PerfilCard />
            <PerfilCard />
            <PerfilCard />
            <PerfilCard />
            <PerfilCard />
            <PerfilCard />

        </ListaCardS>
    </>

)

export default PerfilListCard