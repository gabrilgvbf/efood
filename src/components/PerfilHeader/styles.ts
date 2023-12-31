import styled from 'styled-components'
import FundoHeader from '../../images/fundoHeader.svg'

export const SHeader = styled.header`
width:100vw;

background: linear-gradient(0deg, rgba(230, 103, 103, 0.05), rgba(230, 103, 103, 0.05)),
linear-gradient(0deg, #FFEBD9, #FFEBD9);
background-image:url(${FundoHeader});
padding-bottom:64.5px;
`



export const Hero = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
padding-top:63px;

h3{

color:#E66767;

}
`
export const Logo = styled.div`
margin:0 auto;

width:125px;
img{
    width:100%;
}
`
export const ImgHero = styled.div`

img{ max-width:100%;}
`

