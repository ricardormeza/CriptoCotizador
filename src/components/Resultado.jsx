import styled from "@emotion/styled"

const ResultadoCotizacion = styled.div`
    color: #fff;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-top: 30px;
`
const Texto = styled.p`
    font-size: 1.2rem;
    span {
        font-weight: 700;
    }
`
const Imagen = styled.img`
    display: block;
    width: 120px;
`

const Precio = styled.p`
    font-size: 1.6rem;
    font-weight: 700;
    
`

 const Resultado = ({resultado}) => {
        // console.log(resultado)

        const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado
    return (
        <ResultadoCotizacion>
            <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} 
            alt="Imagen de criptomoneda" 
        />
            <div>
                <Texto>El precio es de: <Precio>{PRICE}</Precio></Texto>
                <Texto>Precio más alto del día: <span>{HIGHDAY}</span></Texto>
                <Texto>Precio más bajo del día: <span>{LOWDAY}</span></Texto>
                <Texto>Variación en las últimas 24 horas de: <span>{CHANGEPCT24HOUR}</span></Texto>
                <Texto>última actualización: <span>{LASTUPDATE}</span></Texto>
            </div>
        </ResultadoCotizacion>
    )
}
export default Resultado