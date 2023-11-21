import React from 'react';
import { Container, Logo, WebsiteRights, Wrapper, Line } from './style';
import Image from 'next/image';
import imgL from '../../assets/images/image3.png';

export const Footer = () => {
  return (
    <Container>
       <Wrapper>
        <Logo>
         <h1>Política de Privacidade | Termos Legais | Acordo de Assinatura do Steam | Reembolsos | Cookies</h1>
        </Logo>
        <Line></Line>
        <WebsiteRights>
          <Image
            id="imgL"
            src={imgL}
            alt="Logo"
          />©{' '}
         {new Date().getFullYear()}
        </WebsiteRights>
      </Wrapper> 
    </Container>
  );
};