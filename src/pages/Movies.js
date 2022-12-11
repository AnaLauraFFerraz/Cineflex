import styled from "styled-components";

export default function Movies() {

    return (
        <>
            <PageTitle>Selecione o filme</PageTitle>
            <Container>
                <Movie />
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
    color: #293845;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;
`
const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    margin: 0 25px 25px 25px;
`
const Movie = styled.div`
    display: flex;
    width: 145px;
    height: 209px;
    align-items: center;
    justify-content: center;
    background: white;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    margin-bottom: 11px;
    box-sizing: border-box;
    img {
        width: 129px;
        height: 193px;
        //background: url(image.png);
    }
`