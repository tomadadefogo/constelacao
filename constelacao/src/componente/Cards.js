import React from 'react'
import styles from './Cards.module.css'
import { NavLink } from 'react-router-dom'
const Cards = () => {
  return (
    <>
      <div className={styles.container}>
            <NavLink to="Planetas"> 
            <div className={styles.card1}></div>
            </NavLink>
            <NavLink to="Cultura"> 
            <div className={styles.card2}></div>
            </NavLink>
            <NavLink to="Eventos"> 
            <div className={styles.card3}></div>
            </NavLink>
      </div>
</>
    
  )
}

export default Cards