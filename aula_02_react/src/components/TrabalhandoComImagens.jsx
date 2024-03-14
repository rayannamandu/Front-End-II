import React from 'react'
import Gatinho from '../assets/gatinho.jpg'

const TrabalhandoComImagens = () => {
  return (
    <div>
        <img src = 'gato.jpg' alt = "Gato"/>
        <img src = {Gatinho} alt = "Gatinho"/>
    </div>
  )
}

export default TrabalhandoComImagens