import styled from 'styled-components';
import Plan from './../components/PlanContainer';
import axios from 'axios';
import { useState, useContext, useEffect } from 'react';
import { AuthContext } from './../context/AuthContext';

export default function Subscriptions() {
    const { token } = useContext(AuthContext);
    const [membership, setMembership] = useState([]);

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        axios
            .get('https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships', config)
            .then(membershipHandler)
            .catch((promise) => console.log(promise.response));
    }, [token]);

    function membershipHandler(promise) {
        setMembership(promise.data);
    }

    return (
        <PageBody>
            <ContentContainer>
                <Title>Escolha seu Plano</Title>
                {membership.map((item, index) => (
                    <Plan
                        key={index}
                        features={item}
                    />
                ))}
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

const Title = styled.h1`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: #ffffff;
    margin-block: 30px;
`;
