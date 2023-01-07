import React from 'react';
import foto from '../imagens/the-beautiful-shining-stars-in-the-night-sky.jpg'
import styles from './DropdownMenu.module.css'
const DropdownMenu = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <div>
      <button onClick={() => setShowMenu(!showMenu)}>Tupi-Guarani</button>
      {
        showMenu
          ? (
            <div className={styles.container}>
            <div>
              <h2 className={styles.titletop}>São apenas 4 constelações, porém elas são extremamente importantes pois a partir delas o povo observava a mudança das estações e podiam planejar a colheita.</h2>
              <h3 className={styles.title}>Olá Mundo</h3>
              <img className={styles.drop1} src={foto} alt="teste" />
            </div>
            <div>
              <h3 className={styles.title}>Olá Mundo</h3>
              <img className={styles.drop1} src={foto} alt="teste" />
            </div>
            <div>
              <h3 className={styles.title}>Olá Mundo</h3>
              <img className={styles.drop1} src={foto} alt="teste" />
            </div>
            <div>
              <h3 className={styles.title}>Olá Mundo</h3>
              <img className={styles.drop1} src={foto} alt="teste" />
            </div>
            </div>
          )
          : (
            null
          )
      }
    </div>
  );
};

export default DropdownMenu;
