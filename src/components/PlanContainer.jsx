import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Plan(props) {
    return (
        <Link to={`/subscriptions/${props.features.id}`}>
            <PlanContainer>
                <div>
                    <img
                        src={props.features.image}
                        alt="Plano"
                    />
                </div>
                <div>
                    <h2>R$ {props.features.price}</h2>
                </div>
            </PlanContainer>
        </Link>
    );
}

const PlanContainer = styled.li`
    width: 290px;
    height: 180px;
    background: #0e0e13;
    border: 3px solid #7e7e7e;
    border-radius: 12px;
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    div > img {
        height: 95px;
    }

    div > h2 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        color: #ffffff;
    }
`;
