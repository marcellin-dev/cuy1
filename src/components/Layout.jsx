import Navbar from "./Navbar.jsx";
import mairie from "../assets/images/mairie.jpg";
import { NavLink, Outlet } from "react-router-dom";
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { BsFillPersonFill, BsFillPersonVcardFill } from "react-icons/bs";
import logo from "../assets/images/logo.jpg";
const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="">
        <div className="row">
          <div
            className="col-8 bg-secondary text-white"
            style={{
              backgroundImage: `url(${mairie})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/*<img src={logo} width={140} alt="" />*/}
            <h1 className="mt-5 text-center text-dark fw-bold">
              Bienvenu dans la mairie de Y1
            </h1>
          </div>
          <div className="col bg-warning text-white imh-hom-parent">
            <img className="home-img" src={logo} alt="" />
          </div>
          <div className="col-12"></div>
        </div>
        <div className="row mb-0 text-center">
          <div
            className="col fw-bold p-4  text-white "
            style={{ backgroundColor: "#325902" }}
          >
            <NavLink to={"/"} className="text-white">
              <AiOutlineHome size={30} color={"white"} />
              <div>Accueil</div>
            </NavLink>
          </div>
          <div
            className="col fw-bold text-white p-4  "
            style={{ backgroundColor: "rgba(50,89,2,0.95)" }}
          >
            <NavLink to={"/coin-rh"} className="text-white">
              <BsFillPersonFill size={30} color={"white"} />
              <div>Mon coin RH</div>
            </NavLink>
          </div>
          <div
            className="col text-white fw-bold  p-4 "
            style={{ backgroundColor: "rgba(50,89,2,0.9)" }}
          >
            <NavLink to={"/contact"} className="text-white">
              <BsFillPersonVcardFill size={30} color={"white"} />
              <div>Direction</div>
            </NavLink>
          </div>
          <div
            className="col text-white fw-bold p-4  "
            style={{ backgroundColor: "rgba(50,89,2,0.85)" }}
          >
            <NavLink to={"/recherche"} className="text-white">
              <AiOutlineSearch size={30} color={"white"} />
              <div>Moteur de recherche</div>
            </NavLink>
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Layout;
