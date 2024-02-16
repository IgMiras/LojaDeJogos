import React from "react";
import Image from "next/image";

import LoginArt from "../../../assets/images/LoginArt.jpg"
import { Background } from "./style";

export const SecaoVisual = () => {
    return (
        <Background>
            <Image src={LoginArt} alt="Imagem Gamers" fill={true}></Image>
        </Background>
    )
}