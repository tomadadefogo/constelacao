import React from 'react'
import './Cultura.css';
import ImagemTupi from './ImagemTupi';


const Cultura = () => {
  const [Tupi, setTupi] = React.useState(true)
  console.log('Cultura.')

  return (
    <>
      <div className='display'>
        <h1 className='titulo'>Culturas Estelares</h1>
        <p className='paragrafo'>As constelações como conhecemos é representada pela visão ocidental. Com isso quando estamos vendo constelações como Escorpião e Orion por exemplo essas são constelações com a visão ocidental, entretanto diversos povos tiveram suas proprias culturas celestes</p>
        </div>
        <button className='botao' onClick={() => setTupi(!Tupi)}>{Tupi ? <div><h1>Cultura <br></br> Tupi-Guarani</h1><p>São apenas 4 constelações, porém elas são extremamentes importantes pois a partir delas o povo observava a mudança das estações e podiam planejar a colheita. </p></div>: <ImagemTupi />}</button>
    </>
  ) 
}



export default Cultura