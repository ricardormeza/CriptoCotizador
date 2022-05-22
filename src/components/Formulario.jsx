import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/monedas'

const InputSubmin = styled.input`
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 1.2rem;
    border-radius: 5px;
    margin-top: 2rem;
    text-align: center;
    transition: background-color .3s;

    &:hover{
        background-color: #7a7dfe;
        cursor: pointer;
    }
`

const Formulario = () => {
    const [criptos, setCriptos ] = useState([])

    const [ moneda, SelectMonedas ] = useSelectMonedas('Elige tu moneda', monedas)
    const [ criptomoneda, SelectCriptomoneda ] = useSelectMonedas('Elige tu criptomoneda', criptos)

    useEffect( () =>{
        const consultarAPI = async () => {
            const url ="https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()

            

            const arrayCriptos = resultado.Data.map( cripto =>{
                const objeto = {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName
                }

                // console.log(cripto.CoinInfo.Name)
                // console.log(objeto)
                return objeto
                
            } )
            // console.log(arrayCriptos)
            setCriptos(arrayCriptos)
        }
        consultarAPI();
    }, [])
    
    

    return (
        <form>
            
            <SelectMonedas/>
            <SelectCriptomoneda/>
            
            
            
            <InputSubmin 
                type="submin" 
                value="Cotizar" 
            />
        </form>
    )
}

export default Formulario