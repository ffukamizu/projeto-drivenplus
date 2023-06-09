import styled from 'styled-components';
import Logo from './../../public/assets/DrivenLogo.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { SubscriptionContext } from './../context/SubscriptionContext';

export default function LogIn() {
    const { setAuthToken } = useContext(AuthContext);
    const { saveSubscriptionData } = useContext(SubscriptionContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function userLogIn(e) {
        e.preventDefault();

        const user = {
            email: email,
            password: password,
        };

        axios
            .post('https://mock-api.driven.com.br/api/v4/driven-plus/auth/login', user)
            .then(loginHandler)
            .catch(() => {
                alert('Log-in failed');
                setEmail('');
                setPassword('');
            });
    }

    function loginHandler(promise) {
        setAuthToken(promise.data.token);
        saveSubscriptionData(promise.data);

        if (promise.data.membership === null) {
            navigate('/subscriptions');
            setEmail('');
            setPassword('');
        } else {
            navigate('/home');
            setEmail('');
            setPassword('');
        }
    }

    return (
        <PageBody>
            <ContentContainer>
                <LogoContainer>
                    <img
                        src={Logo}
                        alt="Driven Plus"
                    />
                </LogoContainer>
                <FormContainer onSubmit={userLogIn}>
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
                    <SubmitButton
                        type="submit"
                        placeholder="ENTRAR">
                        ENTRAR
                    </SubmitButton>
                </FormContainer>
                <ToSignUp>
                    <Link to={`/sign-up`}>Não possuí uma conta? Cadastre-se</Link>
                </ToSignUp>
            </ContentContainer>
        </PageBody>
    );
}

const PageBody = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
`;

const ContentContainer = styled.div`
    height: 100%;
    width: 300px;
    margin-top: 20vh;
`;

const LogoContainer = styled.div`
    margin-bottom: 84px;

    img {
        height: 50px;
        width: 300px;
    }
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

const ToSignUp = styled.div`
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
