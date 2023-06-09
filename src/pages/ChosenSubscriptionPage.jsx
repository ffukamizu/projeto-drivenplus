import { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { AuthContext } from './../context/AuthContext';

export default function Subscription() {
    const { token } = useContext(AuthContext);
    const { id } = useParams();
    const [subscription, setSubscription] = useState(null);
    const [holder, setHolder] = useState('');
    const [card, setCard] = useState('');
    const [security, setSecurity] = useState('');
    const [date, setDate] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        axios
            .get(`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${id}`, config)
            .then(subscriptionHandler)
            .catch((promise) => console.log(promise.response));
    }, [token, id]);

    function subscriptionHandler(promise) {
        setSubscription(promise.data);
    }

    function submitPayment(e) {
        e.preventDefault();

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        const subscribe = {
            membershipId: subscription.id,
            cardName: holder,
            cardNumber: card,
            securityNumber: security,
            expirationDate: date,
        };

        axios
            .post(`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions`, subscribe, config)
            .then(() => {
                setHolder('');
                setCard('');
                setSecurity('');
                setDate('');
                navigate('/home');
            })
            .catch((promise) => {
                console.log(promise.response);
                setHolder('');
                setCard('');
                setSecurity('');
                setDate('');
            });
    }

    return (
        <PageBody>
            <ContentContainer>
                {subscription && (
                    <>
                        <Title>
                            <img
                                src={subscription.image}
                                alt={subscription.name}
                            />
                            <h2>{subscription.name}</h2>
                        </Title>
                        <Benefits>
                            <h3>Benefícios:</h3>
                            {subscription.perks ? (
                                <ul>
                                    {subscription.perks.map((item, index) => (
                                        <li key={index}>
                                            {index + 1}. {item.title}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>Sem benefícios</p>
                            )}
                            <h4>Preço: </h4>
                            <p>R$ {subscription.price} cobrados mensalmente</p>
                        </Benefits>
                        <Form onSubmit={submitPayment}>
                            <Input
                                type="text"
                                required
                                placeholder="Nome impresso no cartão"
                                value={holder}
                                onChange={(e) => setHolder(e.target.value)}></Input>
                            <Input
                                type="text"
                                required
                                placeholder="Dígitos do cartão"
                                value={card}
                                onChange={(e) => setCard(e.target.value)}></Input>
                            <SmallInputContainer>
                                <SmallInput
                                    type="number"
                                    required
                                    placeholder="Código de segurança"
                                    value={security}
                                    onChange={(e) => setSecurity(e.target.value)}></SmallInput>
                                <SmallInput
                                    type="text"
                                    required
                                    placeholder="Validade mm/yy"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}></SmallInput>
                            </SmallInputContainer>
                            <SubmitButton type="submit">ASSINAR</SubmitButton>
                        </Form>
                    </>
                )}
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

const ContentContainer = styled.ul`
    height: 100%;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Title = styled.div`
    margin-top: 20vh;

    img {
        height: 95px;
        margin-bottom: 12px;
    }

    h2 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 38px;
        color: #ffffff;
        margin-bottom: 22px;
    }
`;

const Benefits = styled.div`
    h3,
    h4 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #ffffff;
    }

    h3 {
        margin-bottom: 10px;
    }

    h4 {
        margin-top: 12px;
        margin-bottom: 10px;
    }

    ul,
    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: #ffffff;
    }
`;

const Form = styled.form`
    margin-top: 34px;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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

const SmallInputContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const SmallInput = styled.input`
    height: 30px;
    width: 40%;
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
