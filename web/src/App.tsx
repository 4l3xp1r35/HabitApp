import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './styles/global.css'
import { Habit } from './components/Habit'

export function App() {

  return (
   <div>
      <Habit completed={2}/>
      <Habit completed={1}/>
      <Habit completed={10}/>
      
   </div>
  )
}


// Componente: reaproveitar / isolar
// Propriedade: Uma informação enviada para modificar um componente visual ou comportamental
