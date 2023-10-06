import "./App.css";
import Home from "./pages/Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout.jsx";
import CoinRh from "./components/CoinRh.jsx";
import Contact from "./components/Contact.jsx";
import Recherche from "./components/Recherche.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route path={"/"} element={<Home />} />
          <Route path={"/coin-rh"} element={<CoinRh />} />
          <Route path={"/contact"} element={<Contact />} />
          <Route path={"/recherche"} element={<Recherche />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
