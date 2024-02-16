import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Header, Container, Button, Eye, Register, Field } from "./style";
import logoImg from "@/assets/images/image3.png";

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const createUserFormSchema = z.object({
    email: z.string().min(1, 'Email is required!').email('Invalid Email!'),
    password: z.string().min(6, 'Password must have at least 6 characters')
})

export const SecaoFormularioLogin = () => {
    const router = useRouter();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(createUserFormSchema)
    });

    const createUser = (data) => {
        console.log(data)
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
                <form onSubmit={handleSubmit(createUser)} style={{display: 'flex',
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