import React from 'react'
import styles from './Cards.module.css'
import { NavLink } from 'react-router-dom'
const Cards = () => {
  return (
    
      <div className={styles.container}>
            <NavLink to="Cultura"> <div className={styles.card}></div>
            </NavLink>
      </div>
    
  )
}

export default Cards