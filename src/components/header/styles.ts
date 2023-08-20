import styled from 'styled-components'
import FundoHeader from '../../images/fundoHeader.svg'

export const SHeader = styled.header`
width:2081px;
height:384px;
background: linear-gradient(0deg, rgba(230, 103, 103, 0.05), rgba(230, 103, 103, 0.05)),
linear-gradient(0deg, #FFEBD9, #FFEBD9);
background-image:url(${FundoHeader});

.FontG{
margin: 0 auto;
padding-top:130px;
text-align:center;

}
`
export const Logo = styled.div`
margin:0 auto;
width:125px;
img{
    width:100%;
}
`

