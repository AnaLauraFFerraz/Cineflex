import styled from "styled-components";
import Footer from "../components/Footer"

export default function Seats() {
    return(
        <>
            <PageTitle>{"Selecione o(s) assento(s)"}</PageTitle>
            <Container></Container>
            <Footer />
        </>
    )
}

const PageTitle = styled.h2`
    display: flex;
    width: 100%;
    height: 110px;
    align-items: center;
    justify-content: center;
    color: #293845;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;
`