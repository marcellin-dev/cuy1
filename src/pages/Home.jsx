import mairie from "../assets/images/mairie.jpg";

import React, { useState } from "react";
import Actualite from "../components/Actualite.jsx";
import Projets from "../components/Projets.jsx";
import Evenement from "../components/Evenement.jsx";
import Realisation from "../components/Realisation.jsx";
const Home = () => {
  const [active, setActive] = useState("actualite");
  return (
    <div>
      <div className="container mt-5">
        <input
          className="form-control me-2 rounded-pill"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <div className="row mt-2 mx-2 text-white">
          <div
            className="col border rounded p-4 c-green over fw-bold"
            onClick={() => setActive("actualite")}
          >
            Actualité
          </div>
          <div
            className="col border rounded p-4 mx-2 c-green over  fw-bold"
            onClick={() => setActive("projet")}
          >
            Projets
          </div>
          <div
            className="col border rounded p-4 me-1 c-green over fw-bold"
            onClick={() => setActive("evenement")}
          >
            Evènements
          </div>
          <div
            className="col border rounded p-4 c-green over fw-bold"
            onClick={() => setActive("realisation")}
          >
            Réalisations
          </div>
        </div>

        {active === "actualite" && <Actualite />}
        {active === "projet" && <Projets />}
        {active === "evenement" && <Evenement />}
        {active === "realisation" && <Realisation />}
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;
