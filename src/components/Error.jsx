import React from 'react'
import styled from '@emotion/styled'

const Texto = styled.div`
    background-color: #b7322c;
    color: #fff;
    padding: 15px;
    font-size: 2rem;
    text-transform: uppercase;
    text-align: center;
`

    const Error = ({children}) => {
    return (
        <Texto>
            {children}
        </Texto>
    )
}

export default Error