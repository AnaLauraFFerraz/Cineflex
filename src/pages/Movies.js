import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

export default function Movies() {

    const [moviesList, setMoviesList] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies")
        promise.then(res => {
            setMoviesList(res.data);
        })
        promise.catch((err) => {
            console.log("ERR", err.res.data);
        });
    }, []);

    return (
        <>
            <PageTitle>Selecione o filme</PageTitle>
            <Container>
                {moviesList.map((mov) => {
                    return (
                        <Movie key={mov.id} data-test="movie">
                            <Link to={`/sessoes/${mov.id}`}>
                                <img src={mov.posterURL} alt={mov.overview} />
                            </Link>
                        </Movie>
                    );
                })}
            </Container>
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
const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    box-sizing:border-box;
    padding: 0 30px 25px 30px;
`
const Movie = styled.div`
    display: flex;
    width: 145px;
    height: 209px;
    align-items: center;
    justify-content: center;
    margin-bottom: 11px;
    box-sizing: border-box;
    background: white;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    img {
        width: 129px;
        height: 193px;
    }
`