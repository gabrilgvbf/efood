import React from 'react'
import PerfilCard from '../PefilCard/index'
import { ListaCardS, HeroPerfil, Nacio, NomePerfil, HeaderHeroPerfil } from './styles'


const PerfilListCard = () => (
    <>

        <HeroPerfil className='Container'>
            <HeaderHeroPerfil>
                <Nacio>Italiana</Nacio>
                <NomePerfil>La Dolce Vita Trattoria</NomePerfil>
            </HeaderHeroPerfil>
        </HeroPerfil>


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