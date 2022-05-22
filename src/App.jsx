import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import ImgCripto from './img/imagen-criptos.png'
import Formulario from './components/Formulario'

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`
const Imagen = styled.img`
  max-width: 480px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;

`

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #fff;
  font-size: 4rem;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 58px;

  &::after{
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;

  }
`


function App() {

    const [monedas, setMonedas ] = useState({})
    const [resultado, setResultado ] = useState({})

    useEffect(() => {
      if(Object.keys(monedas).length > 0 ){
        
        const cotizarCripto = async () => {
          const { moneda, criptomoneda} = monedas
          const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`

          console.log(url)
          const respuesta = await fetch(url)
          const resultado = await respuesta.json()

          // console.log(resultado.DISPLAY[criptomoneda][moneda])
          setResultado(resultado.DISPLAY[criptomoneda][moneda])
        }
        cotizarCripto()
      }
    }, [monedas])

  return (
    <Contenedor>
      <Imagen
        src={ImgCripto}
        alt="imagenes de criptomonedas"
      />
      <div>
        <Heading>Criptomonedas al instante</Heading>

        <Formulario
          setMonedas={setMonedas}
        />
      </div>
    </Contenedor>
  )
}

export default App
