import React from 'react'
import Exercicio1 from './components/Exercicio1'
import Exercicio2 from './components/Exercicio2'
import Campanha from './components/Campanha'

const App = () => {
  return (
    <div><Exercicio1/></div>,
    <div><Exercicio2/></div>,
    <div>
        <Campanha mes = "setembro"/>
    </div>
  )
}

export default App