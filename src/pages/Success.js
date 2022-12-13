import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Success() {
    const data = JSON.parse(localStorage.getItem("data"));

    function goToMovies() {
        localStorage.removeItem('data');
    }

    return (
        <>
            <PageTitle>
                Pedido feito<br />com sucesso!
            </PageTitle>
            <Container>
                <BlockInfo data-test="movie-info">
                    <h3>Filme e sessão</h3>
                    <p>{data.title}</p>
                    <p>{`${data.date} ${data.time}`}</p>
                </BlockInfo>
                <BlockInfo data-test="seats-info">
                    <h3>Ingressos</h3>
                    {data.seats.map((s) => (
                        <p key={s}>Assento {s}</p>
                    ))}
                </BlockInfo>
                <BlockInfo data-test="client-info">
                    <h3>Comprador</h3>
                    <p>Nome: {data.inputName}</p>
                    <p>CPF: {data.inputCpf}</p>
                </BlockInfo>
            </Container>
            <Link to={`/`}>
                <Button>
                    <button type="button" data-test="go-home-btn" onClick={() => goToMovies()}>Voltar para a Home</button>
                </Button>
            </Link>
        </>
    )
}

const PageTitle = styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 110px;
    color: #247A6B;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;
    margin-top: 67px;
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: baseline;
    width: 100%;
    box-sizing: border-box;
    padding: 30px;
`
const BlockInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 110px;
    margin-bottom: 40px;
    h3 {
        flex-wrap: wrap;
        color: #293845;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;
        margin-bottom: 10px;
    };
    p {
        flex-wrap: wrap;
        color: #293845;
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        letter-spacing: 0.04em;
    }
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