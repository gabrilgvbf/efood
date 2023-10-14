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
 position:fixed; 
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,.7);
z-index:1000;



.overlay{
    position:fixed;
    display:flex;
    top:48%;
    left:50%;
    transform:translate(-50%,-50%);
    padding:32px;
    background-color:#E66767;
    width:1024px;
}

img{
        width:280px;
        height:280px;
        object-fit:cover;
    }



.textoPoup{

    color:#fff;
    margin-left:24px;
    
    h3{
        padding-bottom:18px;
        font-size:18px;
    }
    
    p{
        padding-bottom:20px;
        font-size:14px;
    }
    
}

`

export const TelaLateral = styled.div`
position:fixed; 
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,.7);
z-index:1000;



.overlay{
    position:fixed;
    right:0;
    display:inline-block;
    height:100vw;
    padding:32px 8px;
    background-color:#E66767;
    width:360px;
    
    

}


`
export const Btclose = styled.div`

position:absolute;
top:0;
right:0;

button{
    top: 30px;
transition: all 200ms;
font-size: 30px;
font-weight: bold;
text-decoration: none;
color:#fff;
background-color:#E66767;
border:none;
margin:8px;
cursor:pointer;
}
`
