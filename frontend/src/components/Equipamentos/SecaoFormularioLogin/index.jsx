import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import { Header, Container, Button, Eye, Register, Field } from "./style";
import logoImg from "@/assets/images/image3.png";

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from "axios";

const URL_AUTH = 'http://localhost:5000/api/auth';

const createUserFormSchema = z.object({
    email: z.string().min(1, 'Email is required!').email('Invalid Email!'),
    password: z.string().min(6, 'Password must have at least 6 characters')
})

export const SecaoFormularioLogin = () => {
    const router = useRouter();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(createUserFormSchema)
    });

    useEffect(() => {
        // Verificar se o usuário já está autenticado
        const token = localStorage.getItem('token');
        if (token) {
            // Se o token existir, fazer uma verificação no backend para confirmar se é válido
            verificarToken(token);
        } else {
            // Se o token não existir, remover o cabeçalho 'x-auth-token' do axios
            delete axios.defaults.headers.common['x-auth-token'];
        }
    }, []); // Executar apenas uma vez, quando o componente é montado
    
    const verificarToken = async (token) => {
        const config = {
            headers: {
                'x-auth-token': token
            }
        }

        try {
            const response = await axios.post(`${URL_AUTH}/verify`, null, config);
            if (response.status === 200) {
                // Configurar o axios para incluir automaticamente o token em todas as solicitações
                axios.defaults.headers.common['x-auth-token'] = token;
                router.push('/home');
            } else {
                // Se o token não for válido, remover o token do localStorage e redirecionar o usuário para a página de login
                localStorage.removeItem('token');
                router.push('/');
            }
        } catch (error) {
            console.error('Erro ao verificar o token:', error);
        }
    }

    const onSubmit = async (data) => {
        try {
            const response = await axios.post(URL_AUTH, data);

            if (response.status === 200) {
                const { token } = response.data;
                // Salvar o token no localStorage
                localStorage.setItem('token', token);
                axios.defaults.headers.common['x-auth-token'] = token;
                // Redirecionar o usuário para a página '/home'
                router.push('/home');
            } else {
                console.error('Erro ao autenticar usuário:', response.data);
            }
        } catch (error) {
            console.error('Erro ao enviar solicitação para a API:', error);
        }
    }


    return (
        <main style={{flex: 1, position: "relative"}}>
            <Header>
                <Image
                    id="img"
                    src={logoImg}
                    alt="Logo da loja de jogos"
                    width={200}
                    height={200}
                />
            </Header>
            <Container>
                <h1 style={{font: "2rem bold", paddingBottom: "40px"}}>Sign in</h1>
                <form onSubmit={handleSubmit(onSubmit)} style={{display: 'flex',
	                flexDirection: 'column',
	                alignItems: 'start',
	                justifyContent: 'center',
                    gap: '30px',
                    }}
                >
                    <Field>
                        {/* <label htmlFor="" >Email</label> */}
                        <input type="email" placeholder="Your email here" style={{
                                borderBottom: '1px solid #000',
                                width: '100%',
                                padding: '5px',
                                transition: 'border-bottom-width 0.1s', // Adiciona transição no tamanho da borda
                                outline: 'none'
                            }}
                                {...register('email')}
                            />
                            {errors.email && <span style={{color: 'red'}}>{errors.email.message}</span>}
                    </Field>

                    <Field>
                        {/* <label htmlFor="">Password</label> */}
                        <div style={{display: 'flex'}}>
                            <input type="password" placeholder="Password" style={{
                                borderBottom: '1px solid #000',
                                width: '100%',
                                padding: '5px',
                                transition: 'border-bottom-width 0.1s', // Adiciona transição no tamanho da borda
                                outline: 'none'
                            }}
                                {...register('password')}
                            />
                            {/* <Eye>
                                <FontAwesomeIcon icon='fa-solid fa-eye' />
                            </Eye> */}
                        </div>
                        {errors.password && <span style={{color: 'red'}}>{errors.password.message}</span>}
                    </Field>

                    <Button type="submit">
                            Log in
                    </Button>
                    <div>
                        <h2>Don't have an account yet? </h2>
                        <Register onClick={() => router.push("/register")}>
                            Register here!
                        </Register>
                    </div>
                </form>
            </Container>
        </main>
    )
}