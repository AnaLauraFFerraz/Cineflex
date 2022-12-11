import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "../style/GlobalStyle"
import Header from "./Header"
import Movies from "../pages/Movies"
import Sessions from "../pages/Sessions"
import Seats from "../pages/Seats"
import Success from "../pages/Success"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/sessoes/:id" element={<Sessions />} />
          <Route path="/assentos/:id" element={<Seats />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </BrowserRouter></>
  );
}
