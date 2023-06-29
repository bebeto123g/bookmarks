import React from 'react'
import { observer } from 'mobx-react'
import './Burger.scss'
import Screen from '../../store/Screen'

const Burger = observer(() => {
  return (
    <a className={`burger${Screen.activeMenu ? ' active' : ''}`} onClick={() => {
      Screen.toggleMenu()
    }}>
      <span />
      <span />
      <span />
    </a>
  )
})

export default Burger
