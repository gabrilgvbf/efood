import styled from 'styled-components'
import FundoHeader from '../../images/fundoHeader.svg'

export const SHeader = styled.header`
width:2081px;

background: linear-gradient(0deg, rgba(230, 103, 103, 0.05), rgba(230, 103, 103, 0.05)),
linear-gradient(0deg, #FFEBD9, #FFEBD9);
background-image:url(${FundoHeader});
margin-bottom:80px;

.FontG{
margin: 0 auto;
padding:130px 0 40px;
text-align:center;

}
`
export const Logo = styled.div`
padding-top:40px;
margin: 0 auto;
width:125px;
img{
    width:100%;
}
`

export const Hero = styled.div`

`
