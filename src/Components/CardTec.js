import Css3 from '../img/css3.png'
import Html5 from '../img/html5.png'
import Javascript from '../img/javascript.png'
import React from 'react'
import ReactImg from '../img/reactImg.svg'
import styled from 'styled-components'

export const CardTec = () => {
    return (
        <CardTecStyled>
            <img src={Html5} alt="html5" />
            <img src={Css3} alt="html5" />
            <img src={Javascript} alt="html5" />
            <img src={ReactImg} alt="html5" />
        </CardTecStyled>
    )
}




const CardTecStyled = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

img{
    width:60px;
}
`