import styled from "styled-components";

export default function Seat({ name, id, isAvailable, statusColor, selected, setSelected, seatColor, setSeatColor, selectedSeats, setSelectedSeats }) {

    function handleClick() {
        if (isAvailable) {
            if (!selected) {
                setSelected(true);
                setSelectedSeats((seats) => [...seats, id])
            } else {
                setSelected(false);
                setSelectedSeats(selectedSeats.filter((seats) => seats !== id));
            }
        } else {
            alert("Esse assento não está disponível");
        }
    }

    function handleColors() {
        if (isAvailable) {
            setSeatColor(statusColor.available)
            selected ?? setSeatColor(statusColor.clicked)
        } else {
            setSeatColor(statusColor.unavailable)
        }
        return seatColor;
    }

    function handleColorTime() {
        setTimeout(() => {
            handleColors()
        }, 5000)
    }

    return (
        <SeatItem onClick={() => handleClick()} colors={handleColorTime()} data-test="seat">
            {name}
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