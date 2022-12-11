import styled from "styled-components";

export default function Header() {
    return (
        <Title>CINEFLEX</Title>
    )
}

const Title = styled.h1`
    display:flex;
    width: 100%;
    height: 67px;
    position: fixed;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    background-color:#C3CFD9;
    color: #E8833A;
    font-size: 34px;
    font-weight: 400;
    line-height: 40px;
    box-sizing: border-box;
`