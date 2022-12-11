import styled from "styled-components";
import Footer from "../components/Footer"

export default function Sessions() {

    return (
        <>
            <PageTitle>Selecione o horário</PageTitle>
            <SessionInfo></SessionInfo>
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
    margin-top: 67px;
    color: #293845;
    font-family: 'Roboto';
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;
`
const SessionInfo = styled.div`
    display: flex;
`