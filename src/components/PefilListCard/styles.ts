import styled from 'styled-components'
import ImgHero from '../../images/imgperfil.png'
export const ListaCardS = styled.div`

display:grid;
grid-template-columns: 1fr 1fr 1fr;
grid-column-gap:32px;
grid-row-gap:48px;
margin-bottom:120px;

`

export const HeroPerfil = styled.div`
display:flex;
height:280px;
background-image:url(${ImgHero});
margin-bottom:56px;
`

export const Nacio = styled.h3`
font-family:'Roboto';
padding:25px 0 0 170px;
font-size:32px;
color:#ffffff;
font-weight:100;


`

export const NomePerfil = styled.h3`
padding:214px 0 0 0;
font-family:'Roboto';
font-size:32px;
font-weight:900;
color:#fff;
`