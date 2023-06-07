import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [cpf, setCPF] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function registerUser(e) {
        e.preventDefault();

        const user = {
            email: email,
            name: nome,
            cpf: cpf,
            password: password,
        };

        axios
        .post('https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up', user)
        .then(registerHandler)
        .catch(() => {
            alert('Cadastro falhou');
            setCPF('');
            setEmail('');
            setNome('');
            setPassword('');
        });
    }

    function registerHandler() {
        navigate('/');
        setCPF('');
        setEmail('');
        setNome('');
        setPassword('');
    }

    return (
        <PageBody onSubmit={registerUser}>
            <ContentContainer>
                <FormContainer>
                    <Input
                        type="email"
                        required
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}></Input>
                    <Input
                        type="password"
                        required
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}></Input>
                    <Input
                        type="number"
                        required
                        placeholder="CPF"
                        value={cpf}
                        onChange={(e) => setCPF(e.target.value)}></Input>
                    <Input
                        type="text"
                        required
                        placeholder="Nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}></Input>
                    <SubmitButton
                        type="submit"
                        placeholder="ENTRAR">
                        CADASTRAR
                    </SubmitButton>
                </FormContainer>
                <ToLogIn>
                    <Link to={`/`}>Já possui uma conta? Entre</Link>
                </ToLogIn>
            </ContentContainer>
        </PageBody>
    );
}

const PageBody = styled.div`
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: center;
`;

const ContentContainer = styled.div`
    height: 100%;
    width: 300px;
    margin-top: 19.7vh;
`;

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Input = styled.input`
    height: 30px;
    width: 280px;
    background: #ffffff;
    border-radius: 8px;
    border-style: solid;
    border-color: #ffffff;
    padding: 10px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #7e7e7e;
    margin-top: 16px;

    ::placeholder {
        color: #7e7e7e;
    }

    :focus {
        outline: 1px solid #ffffff;
    }
`;

const SubmitButton = styled.button`
    height: 50px;
    width: 306px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ff4791;
    border-radius: 8px;
    border-style: solid;
    border-color: #ff4791;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;
    margin-block: 24px;
`;

const ToLogIn = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-decoration-line: underline;
    color: #ffffff;
    display: flex;
    justify-content: center;

    a:link {
        color: #ffffff;
        text-decoration: none;
    }

    a:visited {
        color: #ffffff;
        text-decoration: none;
    }
`;
