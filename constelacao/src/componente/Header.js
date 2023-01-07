import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.left}>
      <Link to="/">Home</Link>
      <div className={styles.right}>
      <a target='_blank' href="https://www.linkedin.com/in/pedro-luiz-277055167/"></a>
      <a target='_blank' href="https://github.com/tomadadefogo"></a>
      </div>
    </div>
  )
}

export default Header