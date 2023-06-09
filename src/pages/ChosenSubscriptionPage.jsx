import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { AuthContext } from './../context/AuthContext';

export default function Subscription() {
    const { token } = useContext(AuthContext);
    const { id } = useParams();
    const [subscription, setSubscription] = useState(null);

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
                                            {index+1}. {item.title}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>Sem benefícios</p>
                            )}
                            <h4>Preço: </h4>
                            <p>R$ {subscription.price} cobrados mensalmente</p>
                        </Benefits>
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
