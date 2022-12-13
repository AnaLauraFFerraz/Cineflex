import styled from "styled-components";

export default function Seat({ name, id, isAvailable, selected, setSelected, selectedSeats, setSelectedSeats }) {

    function handleClick() {
        if (isAvailable) {
            if (!selected) {
                setSelected(true);
                setSelectedSeats((seats) => [...seats, name])
            } else {
                setSelected(false);
                setSelectedSeats(selectedSeats.filter((seats) => seats !== id));
            }
        } else {
            alert("Esse assento não está disponível");
        }
        handleColor();
    }

    function handleColor() {
        let color = "";
        if (isAvailable) {
            if (selectedSeats.includes(name)) {
                color = "#1AAE9E";
            } else {
                color = "#C3CFD9";
            }
        } else {
            color = "#FBE192";
        }
        return color
    };

    function handleBorder() {
        let border = "";
        if (isAvailable) {
            if (selected) {
                border = "1px solid #0E7D71";
            } else {
                border = "1px solid #808F9D";
            }
        } else {
            border = "1px solid #F7C52B";
        }
        return border;
    }


    return (
        <SeatItem key={id} onClick={() => handleClick()} color={handleColor()} border={handleBorder()} data-test="seat">
            {name}
            {console.log(name)}
            {console.log(selectedSeats)}
        </SeatItem>
    )
}

const SeatItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    margin: 0 7px 18px 0;
    box-sizing: border-box;
    background: ${props => props.color};
    border-color: ${props => props.border};
    border: 1px solid;
    border-radius: 12px;
    font-size: 11px;
    line-height: 13px;
`
