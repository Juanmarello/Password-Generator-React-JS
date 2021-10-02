import './App.css';

import {ButtonCheck, ButtonGenerate, ButtonMinus, ButtonPlus} from './Components/Button';
import React, {useEffect, useState} from 'react';

import { CardNav } from './Components/CardNav';
import { CardTec } from './Components/CardTec';
import ImagenPrincipal from './img/2.svg';
import generatePassWord from './functions/generatePassWord';
import styled from 'styled-components';

function App() {
  
  const [config, setConfig] = useState({
    numeroDeCaracteres: 8,
    simbolos: true,
    numeros: true,
    mayusculas: true
  });

  const [pass, setPass] = useState({
  
})

useEffect(() => {
  setPass (generatePassWord(config));
},[config]);

const incrementNumberCaracteres = () =>{
  setConfig((prevConfig) => {
      const newConfig = {...prevConfig}
      newConfig.numeroDeCaracteres += 1;
    return newConfig; 
  });
}

const decrementNumbreCaracteres = () => {
  if (config.numeroDeCaracteres > 1)
  setConfig((prevConfig) => {
    const newConfig = {...prevConfig}
    newConfig.numeroDeCaracteres -= 1;
  return newConfig; 
  });
}

const toggleSimbol = () =>{

setConfig((prevConfig) => {
      const newConfig = {...prevConfig}
      newConfig.simbolos = !newConfig.simbolos;
    return newConfig; 
});
}


const toggleNumbers = () =>{

  setConfig((prevConfig) => {
        const newConfig = {...prevConfig}
        newConfig.numeros = !newConfig.numeros;
      return newConfig; 
  });
  }


  const toggleCapitals = () =>{

    setConfig((prevConfig) => {
          const newConfig = {...prevConfig}
          newConfig.mayusculas = !newConfig.mayusculas;
        return newConfig; 
    });
    }


const onSubmit = (e) =>{
e.preventDefault();
setPass (generatePassWord(config));

}

  return (
    <div>
     
    <div className="container">
     
     <Logo>
     <h1> Generador de contraseñas seguras</h1>
       <img src={ImagenPrincipal} alt="password generator"/>
       
     </Logo>
     <form onSubmit={onSubmit}>
       <Fila>
         <label>Número de caracteres:</label>
         <Controles>
         <ButtonMinus click={decrementNumbreCaracteres}/>
             <span>{config.numeroDeCaracteres}</span>
         <ButtonPlus  click={incrementNumberCaracteres}/>   
         </Controles>
       </Fila>
       <Fila>
         <label>
           Quieres incluir símbolos?
         </label>
         <ButtonCheck selected={config.simbolos} click={toggleSimbol}/>
       </Fila>
       <Fila>
         <label>
           Quieres incluir números?
         </label>
         <ButtonCheck selected={config.numeros} click={toggleNumbers}/>
       </Fila>
       <Fila>
         <label>
           Quieres incluir mayúsculas?
         </label>
         <ButtonCheck selected={config.mayusculas} click={toggleCapitals} />
       </Fila>
       <Fila>
         <ButtonGenerate/>
         <CopyClipRow>
         <Input  type="text" id="clip-input" readOnly={true} value={pass} />
         
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" id="clipy">
  <path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
  <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
  </svg>
  <AlertCopied id="alertCopied"></AlertCopied>

        </CopyClipRow>
        
       </Fila>
      
     </form>
    </div>
    <div>
       
       <CardNav/>
       <div>

       </div>
     </div>
    </div>
  );
}

export default App;
const Logo = styled.div`
     margin-bottom: 40px auto;
     width:480px;
     align-items: center;
     transition: all .3s ease;
     img{
      margin-bottom: 55px;
     
     width:100%;
     vertical-align: center;
     
     }
`
const Fila = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 25px;
margin-bottom: 40px;
`;
const Controles = styled.div`
display: flex;
justify-content: space-between;
text-align: center;

& > *{
  flex:1;
}
span {
  background: whitesmoke;
  color: black;
  line-height: 40px;
  border-radius: 5px;
}
`;
const Input = styled.input`
width: 100%;
height: 40px;
background: none;
color: white;
border-radius: 5px;
border: solid 1px rgba(255,255,255, .45);
line-height: 40px;
transition: all .4s ease;

&:hover{
border: solid 1px rgba(255,255,255, .15);
}

&::selection{
background: #212139;
}

&::-moz-selection{
  background: #212139;
}

`;

const CopyClipRow = styled(Fila)`
width: 100%;
display: grid;
grid-template-columns: 98% 2%;
cursor: pointer;
`
const AlertCopied = styled.div`

h4{
  float: right;
margin: 0;
  color: whitesmoke;
  font-weight: 100;
  transition: all 1s ease-out;
animation: out 1.2s ;
font-size:16px;

@keyframes out{
  0%{opacity: 1;
    font-size: 11px;
    margin-top: 15px;
  }

  100%{ opacity: 0.8;
    margin-top: -18px;
  }
}
}

`