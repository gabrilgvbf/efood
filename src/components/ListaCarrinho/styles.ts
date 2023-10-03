import styled from "styled-components";
import React from "react";

export const Produto = styled.div`
display:flex;
width:100%;
max-height:100px;
background-color:#FFEBD9;
margin:0 0 16px;
padding:8px;
h3{
    color:#E66767;
    margin:0 8px;
}
img{
    height:80px;
    width:80px;
    object-fit:cover;
   
}




`

export const ListaProdutos = styled.div`
margin:32px 8px;

.RodapeCarrinho{
    .Total{
        color:#fff;
        display:flex;
        justify-content:space-between;
        p{
            margin-bottom:18px;
        }
    }

}

`
export const InfEntrega = styled.div`
display:flex;
flex-direction:column;
justify-content:right;

p{
    font-size:14px;
    font-weight:400;
    text-align:left;
    line-height:1.5;
    color:#fff;
}
h3{
    font-size:18px;
    color:#fff;
    margin-bottom:16px;
}

label{
   margin-bottom:8px; 
   color:#fff;
   font-size:14px;
   font-weight:700;
}
input{
    margin-bottom:8px;
    height:32px;
    border:none;
    padding-left:8px;
    width:100%;
}
div{
    flex-direction:none;
    display:flex;
    justify-content:space-between;
    margin-bottom:8px;

    
    div{
        
        display:inline-block;
        
        
    }

    div:nth-child(-n+1){
        margin-right:34px;
    }
}


`