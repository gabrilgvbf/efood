import styled from 'styled-components'

export const CardS = styled.div`
width:320px;
border: 1px solid #E66767;
display:grid;
background-color: #E66767;



`
export const ImagemP = styled.div`
margin:6px auto;
width:304px;
height:167px;



img{
    width:100%;
height:100%;


}


`

export const HeaderP = styled.div`
display: flex;
justify-content:space-between;
align-items: center;
color: #FFEBD9;
font-size: 16px;
font-weight: 700;
padding-bottom: 16px;

`



export const TextoP = styled.h3`
font-size: 14px;
font-weight: 400;
color: #FFEBD9;
padding-bottom: 18px;
`

export const BotaoP = styled.button`
background-color: #FFEBD9;
color: #E66767;
width: 100%;
height:24px;
cursor:pointer;
border: none;
font-size: 14px;
font-weight: 700;

`
export const DescriçãoP = styled.div`
margin: 8px;
`

export const Tag = styled.div`

    position:absolute;
    top:16px;
    right:16px;
    text-align:center;
    h3{ // trocar para Tag
        background-color:#E66767;
color:#fff;
width: 82px;
height: 24px;
border:none;
font-size:14px;
font-weight:700;
    }

`

export const Popup = styled.div`
display:block;
align-items:center;
z-index:9999;
transition:all 5s ease-in-out;
content:"";
width:300px;
height:300px;
background:rgba(0,0,0,.7);
transition:opacity 500ms;


.popup{
    position:relative;
    transition: all 5s ease-in-out;
}


.close{
  top: 20px;
  right: 30px;
  transition: all 200ms;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}


`


