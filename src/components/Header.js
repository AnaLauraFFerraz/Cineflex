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
    height: 80px;
    position: fixed;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    background-color: #161B22;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    h1 {
        color: red;
        font-size: 34px;
        font-weight: 700;
        line-height: 40px;
    }
`