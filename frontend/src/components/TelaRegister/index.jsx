import React from 'react'

import { SecaoVisual } from '../Equipamentos/SecaoVisual'
import { SecaoFormularioRegister } from '../Equipamentos/SecaoFormularioRegister'
import { DesktopOnly } from './style'

export const TelaRegister = () => {
    return (
        <div style={{display: 'flex', overflowY: "scroll", overflowX: "hidden", minHeight: "100vh"}}>
            <SecaoFormularioRegister />
            <SecaoVisual />
        </div>
    )
}