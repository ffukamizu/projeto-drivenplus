import styled from "styled-components";
import Plan from './../components/PlanContainer';
import axios from "axios";
import { useState } from "react";

export default function Subscriptions() {
    const [membership, setMembership] = useState([]);

    axios.get('https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships', config)
    .then((promise)=>setMembership(promise.data))
    .catch((promise)=>console.log(promise.response));

    return (
        <PageBody>
            <ContentContainer>
                <Title>Escolha seu Plano</Title>
                {membership.map(())}
                <Plan />
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
`;