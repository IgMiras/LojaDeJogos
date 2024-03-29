import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import { Header, Container, Button, Eye, Register, Field, Input } from "./style";
import logoImg from "@/assets/images/image3.png";

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from "axios";

import { PROD_API_URL } from "@/constants";

const createUserFormSchema = z.object({
    email: z.string().min(1, 'Email is required!').email('Invalid Email!'),
    password: z.string().min(6, 'Password must have at least 6 characters').max(20, 'Password must have at max 20 characters'),
    username: z.string().min(1, 'Username is required!'),
    confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not Match!',
    path: ['confirmPassword'],
})

export const SecaoFormularioRegister = () => {
    const router = useRouter();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(createUserFormSchema)
    });

    const onSubmit = async (data) => {
        try {
            const response = await axios.post(`${PROD_API_URL}/user`, data);

            console.log(response.status);

            if (response.status === 200) {
                const { token } = response.data;
                // Salvar o token no localStorage
                localStorage.setItem('token', token);
                axios.defaults.headers.common['x-auth-token'] = token;
                // Redirecionar o usuário para a página '/home'
                router.push('/home');
            }
        } catch (error) {
            console.error('Erro ao enviar solicitação para a API:', error.response.data.errors);
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
                <h1 style={{font: "2rem bold", paddingBottom: "40px"}}>Sign up</h1>
                <form onSubmit={handleSubmit(onSubmit)} style={{display: 'flex',
	                flexDirection: 'column',
	                alignItems: 'start',
	                justifyContent: 'center',
                    gap: '30px',
                    }}
                >
                    <Field>
                        <Input type="email" placeholder="Your email here" {...register('email')}></Input>
                        {errors.email && <span style={{color: 'red'}}>{errors.email.message}</span>}
                    </Field>

                    <Field>
                        <Input type="text" placeholder="Your Username here" {...register('username')}></Input>
                        {errors.username && <span style={{color: 'red'}}>{errors.username.message}</span>}
                    </Field>

                    <Field>
                        <div style={{display: 'flex'}}>
                            <Input type="password" placeholder="Your Password here" {...register('password')}></Input>
                            {/* <Eye>
                                <FontAwesomeIcon icon='fa-solid fa-eye' />
                            </Eye> */}
                        </div>
                        {errors.password && <span style={{color: 'red'}}>{errors.password.message}</span>}
                    </Field>

                    <Field>
                        <div style={{display: 'flex'}}>
                            <Input type="password" placeholder="Confirm your Password" {...register('confirmPassword')}></Input>
                            {/* <Eye>
                                <FontAwesomeIcon icon='fa-solid fa-eye' />
                            </Eye> */}
                        </div>
                        {errors.confirmPassword && <span style={{color: 'red'}}>{errors.confirmPassword.message}</span>}
                    </Field>

                    <Button type="submit">
                            Register
                    </Button>
                    <div>
                        <h2>If you already have an account register: </h2>
                        <Register onClick={() => router.push("/")}>
                            Login here!
                        </Register>
                    </div>
                </form>
            </Container>
        </main>
    )
}