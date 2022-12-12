import styled from "styled-components";

export default function Footer({img, title, day, time}) {
    return (
        <>
            <Description data-test="footer">
                <img src={img} alt={title} />
                <p>
                    {title}
                    {day !== undefined ? (`${day.weekday} - ${time}`) : null}
                </p>
            </Description>
        </>
    )
}

const Description = styled.footer`
    display: flex;
    width: 100%;
    height: 117px;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 10px;
    box-sizing: border-box;
    background-color: #DFE6ED;
    border: 1px solid #9EADBA;
    img {
        width: 64px;
        height: 89px;
        padding: 9px;
        box-sizing: border-box;
        background-color: #FFFFFF;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 2px;
    };
    p {
        display: flex;
        align-items: center;
        margin-left: 14px;
        font-family: 'Roboto';
        font-size: 26px;
        font-weight: 400;
        line-height: 30px;
        color: #293845;
    };
`