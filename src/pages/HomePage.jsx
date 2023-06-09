import styled from 'styled-components';
import { SubscriptionContext } from './../context/SubscriptionContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './../context/AuthContext';
import { UserContext } from '../context/UserContext';
import axios from 'axios';

export default function Home() {
    const { subscriptionData } = useContext(SubscriptionContext);
    const { token } = useContext(AuthContext);
    const { userName } = useContext(UserContext);
    const navigate = useNavigate();

    if (subscriptionData === null) {
        return null;
    }

    function changePlan() {
        navigate('/subscriptions');
    }

    function cancelPlan() {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        axios
            .delete(`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions`, config)
            .then(() => navigate('/subscriptions'))
            .catch((promise) => console.log(promise.response));
    }

    return (
        <PageBody>
            <ContentContainer>
                <Logo>
                    <img
                        src={subscriptionData.image}
                        alt="Logo"
                    />
                </Logo>
                <Title>
                    <p>Olá, {userName}</p>
                </Title>
                {subscriptionData.perks.map((item, index) => (
                    <PerkButton
                        key={index}
                        href={item.link}>
                        {item.title}
                    </PerkButton>
                ))}
                <ChangePlan type='button' onClick={changePlan}>Mudar plano</ChangePlan>
                <CancelPlan type='button'onClick={cancelPlan}>Cancelar plano</CancelPlan>
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

const Logo = styled.div`
    height: 50px;
    width: 300px;
    margin-bottom: 12px;
    margin-top: 3vh;

    img {
        height: 50px;
    }
`;

const Title = styled.div`
    height: 30px;
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 70px;

    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        color: #ffffff;
    }
`;

const PerkButton = styled.a`
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
    margin-bottom: 8px;

    :link {
        text-decoration: none;
    }

    :visited {
        text-decoration: none;
    }

    :hover {
        text-decoration: none;
    }

    :active {
        text-decoration: none;
    }
`;

const ChangePlan = styled.button`
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
    margin-bottom: 8px;
    margin-top: 10vh;
`;

const CancelPlan = styled.button`
    height: 50px;
    width: 306px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ff4747;
    border-radius: 8px;
    border-style: solid;
    border-color: #ff4747;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;
    margin-bottom: 8px;
`;