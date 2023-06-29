import React from 'react'
import './Burger.scss'

const Burger = ({ isActive = false, ...props }) => {
    return <button {...props} className={`burger${isActive ? ' active' : ''}`} />
}

export default Burger
