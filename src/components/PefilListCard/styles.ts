import styled from 'styled-components'
import ImgHero from '../../images/imgperfil.png'
import ImgFiltro from '../../images/filtroimgperfil.png'
export const ListaCardS = styled.div`

display:grid;
grid-template-columns: 1fr 1fr 1fr;
grid-column-gap:32px;
grid-row-gap:48px;
margin-bottom:120px;




`

export const HeroPerfil = styled.div`
position:relative;
display:flex;
height:280px;
background-image:url(${ImgHero});
margin-bottom:56px;
z-index:1;
::before{
    content:"";
   position:absolute;
   top:0;
   left:0;
   width:100%;
   height:100%;
   background-image:url(${ImgFiltro});
   opacity:.5;
 
}

`

export const Nacio = styled.h3`
font-family:'Roboto';
padding:25px 0 0 170px;
font-size:32px;
color:#fff;
font-weight:100;
z-index:2;


`

export const NomePerfil = styled.h3`
padding:214px 0 0 0;
font-family:'Roboto';
font-size:32px;
font-weight:900;
color:#fff;
z-index:2;
`

export const HeaderHeroPerfil = styled.div`
display:flex;

`