import React from 'react'

import { SecaoVisual } from '../Equipamentos/SecaoVisual'
import { SecaoFormularioLogin } from '../Equipamentos/SecaoFormularioLogin'

export const TelaLogin = () => {
    return (
        <div style={{display: 'flex', overflowY: "scroll", overflowX: "hidden", minHeight: "100vh"}}>
            <SecaoFormularioLogin />
            <SecaoVisual />
        </div>
    )
}