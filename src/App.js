import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import Header from "./components/Header"
import Movies from "./pages/Movies"
import Sessions from "./pages/Sessions"
import Seats from "./pages/Seats"
import Success from "./pages/Success"

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/sessoes/:idMovie" element={<Sessions />} />
          <Route path="/assentos/:id" element={<Seats />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App;

const Container = styled.main`
  min-width: 375px;
  min-height: 667px;
  font-family: 'Roboto';
`;