import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Footer from "../components/Footer"

export default function Sessions() {
    const { idMovie } = useParams();
    const [session, setSession] = useState([]);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idMovie}/showtimes`);
        promise.then((res) => setSession(res.data))
        promise.catch((err) => window.location.reload);
    }, [idMovie]);

    return (
        <>
            <PageTitle>Selecione o horário</PageTitle>
            <ul>
                {session.days?.map((day) => {
                    return (
                        <SessionInfo key={day.id}>
                            <p>
                                {day.weekday} - {day.date} <br />
                            </p>
                            {day.showtimes?.map((time) => {
                                return (
                                    <Link key={time.id} to={`/assentos/${time.id}`}>
                                        <button>{time.name}</button>
                                    </Link>
                                )
                            })}
                        </SessionInfo>
                    );
                })}
            </ul>

            <Footer img={session.posterURL} title={session.title}/>
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
const SessionInfo = styled.div`
    padding: 0 24px 0 24px;
    box-sizing: border-box;
    justify-content: center;
    p {
        color: #293845;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        letter-spacing: 0.02em;
    }
    button {
        width: 82px;
        height: 43px;
        justify-content: center;
        margin: 23px 8px 23px 0;
        box-sizing: border-box;
        background-color: #e8833a;
        border-radius: 3px;
        border: none;
        color: #FFFFFF;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
    }
`