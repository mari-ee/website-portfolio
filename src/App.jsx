import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import logo from './assets/logo.png'
import './App.css'

const MenuBar = () => {
  return (
      <div className={"menu-bar"}>
        <img src={logo} alt="logo" />
      </div>
  )
}
const MenuButton = ({name}, {page}) => {
  return (
      <button onClick={{page}}>{name}</button>
  )
}

const App = () => {
  return (
      <div>
      <h2>Hello world</h2>
      <MenuBar/>
      </div>
  )
}

export default App
