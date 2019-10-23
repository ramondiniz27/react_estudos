import ReactDom from  'react-dom'
import React from 'react'
// import PrimeiroComponente from './components/PrimeiroComponente'
// import {CompA, CompB} from './components/DoisComponentes'
import MultiElementos from './components/MultiElementos'
const elemento = document.getElementById('root')
// ReactDom.render(<h1>Olá mundo</h1>, elemento)
// ReactDom.render(
//   <div>
//       <PrimeiroComponente valor ="Bom dia"/>
//   </div>, elemento)

// ReactDom.render(
//   <div>
//       <PrimeiroComponente valor ="Bom dia"/>
//       <CompA valor ="Primeiro Componente"/>
//       <CompB valor ="Segundo Elemento"/>
//   </div>, elemento)

ReactDom.render(
  <div>
    <MultiElementos/>
  </div>,
  elemento)