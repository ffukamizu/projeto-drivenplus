import styled from "styled-components";
import DrivenGreen from './../../public/assets/DrivenGreen.png';

export default function Plan(props) {
    return (
    <PlanContainer>
        <div>
            <img src={props.image} alt='Plano' />
        </div>
        <div>
            <h2>R$ {props.price}</h2>
        </div>
    </PlanContainer>
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