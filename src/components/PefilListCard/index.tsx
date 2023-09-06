import React from 'react'
import PerfilCard from '../PefilCard/index'
import { ListaCardS, HeroPerfil, Nacio, NomePerfil } from './styles'


const PerfilListCard = () => (
    <>
        <HeroPerfil className='Container'>
            <Nacio>Italiana</Nacio>
            <NomePerfil>La Dolce Vita Trattoria</NomePerfil>
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