import styled from "styled-components";

export default function Header() {
    return (
        <Title>
            <h1>CINEFLEX</h1>
        </Title>
    )
}

const Title = styled.header`
    display:flex;
    width: 100%;
    height: 67px;
    position: fixed;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    background-color:#C3CFD9;
    box-sizing: border-box;
    h1 {
        color: #E8833A;
        font-family: 'Roboto';
        font-size: 34px;
        font-weight: 400;
        line-height: 40px;
    }
`