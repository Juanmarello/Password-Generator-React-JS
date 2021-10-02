import '../App.css';

import { CardTec } from './CardTec';
import React from 'react'
import styled from 'styled-components'

export const CardNav = () => {
    return (
        <CardNavStyled>
            <div className="Foo">
                    <h3>Juan Morello - Fronted Developer</h3>
                    <h3>contacto@juanmamorello.com.ar </h3>
            </div>
            <CardTec/>
        </CardNavStyled>
    )
}


const CardNavStyled = styled('div')`
display: grid;
grid-template-columns: 33% 33% 33% ;
background: rgba(109, 106, 106, 0.493);
padding:7px;
transition: all 1s ease;
justify-content: center;
align-items: center;



& h3{
    font-weight: 400;
    color:white;
    font-size:13px;
}
& img{
    width: 50px;
    &:hover{
        transition: all 3s ease linear;
        transform: scale(1.1); }


}

`