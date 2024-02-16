import React from 'react'

import { SecaoVisual } from '../Equipamentos/SecaoVisual'
import { SecaoFormulario } from '../Equipamentos/SecaoFormulario'

export const TelaLogin = () => {
    return (
        <div style={{display: 'flex', overflowY: "scroll", overflowX: "hidden", minHeight: "100vh"}}>
            <SecaoFormulario />
            <SecaoVisual />
        </div>
    )
}