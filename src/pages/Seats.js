import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Footer from "../components/Footer"

export default function Seats() {
    const { idSession } = useParams();
    const navigate = useNavigate();
    const [showtime, setShowtime] = useState([]);
    const [seat, setSeat] = useState([]);
    const [seatSelected, setseatSelected] = useState([]);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSession}/seats`);
        promise.then((res) => setShowtime(res.data));
        promise.catch((err) => console.log("ERR", err));
    }, []);

    return (
        <>
            <PageTitle>Selecione o(s) assento(s)</PageTitle>
            <SeatsContainer>
                {showtime.seats?.map((seat, i) => {
                    return <Seat key={seat.name}>{seat.name}</Seat>
                })}
            </SeatsContainer>
            <SeatsLabels>
                <div>
                    <Label color="#1AAE9E" border="#0E7D71"></Label>
                    <p>Selecionado</p>
                </div>
                <div>
                    <Label color="#C3CFD9" border="#7B8B99"></Label>
                    <p>Disponível</p>
                </div>
                <div>
                    <Label color="#FBE192" border="#F7C52B"></Label>
                    <p>Indisponível</p>
                </div>
            </SeatsLabels>
            <Form>
                <label>Nome do comprador:</label>
                <input
                    type="text"
                    placeholder="Digite seu nome..."
                    required
                />
                <label>CPF do comprador:</label>
                <input
                    type="text"
                    placeholder="Digite seu CPF..."
                    required
                />
                <Button>
                    <button type="submit">Reservar assento(s)</button>
                </Button>
            </Form>
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
const Seat = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    margin: 0 7px 18px 0; 
    box-sizing: border-box;
    background-color: #C3CFD9;
    border: 1px solid #808F9D;
    border-radius: 12px;
    color: "#000000";
    font-size: 11px;
    line-height: 13px;
`
const SeatsLabels = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    };
    p {
        color: #4E5A65;
        font-size: 13px;
        line-height: 15px;
        text-align: center;
        letter-spacing: -0.013em;
    }
`
const Label = styled.div`
    width: 24px;
    height: 24px;
    background-color: ${props => props.color};
    border: 1px solid ${props => props.border};
    border-radius: 17px;
    margin-bottom: 10px;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 24px;
    box-sizing: border-box;
    label {
        color: #293845;
        font-size: 18px;
        line-height: 21px;
    };
    input {
        width: 327px;
        height: 51px;
        margin: 4px 0 10px 0;
        box-sizing: border-box;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        ::placeholder {
            padding-left: 15px;
            color: #AFAFAF;
            font-style: italic;
            font-weight: 400;
            font-size: 18px;
            line-height: 21px;
        }
    };
`
const Button = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 147px;
    left: 0;
    button {
        display: flex;
        width: 225px;
        height: 42px;
        align-items: center;
        justify-content: center;
        background-color: #E8833A;
        border-radius: 3px;
        border: none;
        color: #FFFFFF;
        font-size: 18px;
        line-height: 21px;
        letter-spacing: 0.04em;
    }
`