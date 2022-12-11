import styled from "styled-components";
import Footer from "../components/Footer"

export default function Seats() {

    return (
        <>
            <PageTitle>Selecione o(s) assento(s)</PageTitle>
            <SeatsContainer></SeatsContainer>
            <SeatsLabels>
                <Label></Label>
            </SeatsLabels>
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
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;
`
const SeatsContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    padding-left: 24px;
    padding-right: 18px;
    box-sizing: border-box;
`
const SeatsLabels = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`
const Label = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`