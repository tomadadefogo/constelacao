import React from 'react'
import styles from './Cultura.module.css';
import DropdownMenu from './DropdownMenu';




const Cultura = () => {
  return (
    <>
      <div className={styles.display}>
        <h1 className={styles.titulo}>Culturas Estelares</h1>
        <p className={styles.paragrafo}>As constelações como conhecemos é representada pela visão ocidental. Com isso quando estamos vendo constelações como Escorpião e Orion por exemplo essas são constelações com a visão ocidental, entretanto diversos povos tiveram suas proprias culturas celestes</p>
        </div>
        <div>
          <DropdownMenu />
          <DropdownMenu />
        </div>
    </>
  ) 
}



export default Cultura