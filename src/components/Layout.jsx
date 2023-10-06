import Navbar from "./Navbar.jsx";
import mairie from "../assets/images/mairie.jpg";
import { NavLink, Outlet } from "react-router-dom";
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { BsFillPersonFill, BsFillPersonVcardFill } from "react-icons/bs";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="">
        <div className="row">
          <div className="col-8 bg-secondary text-white">
            <h3 className="mt-5 text-center"> Bienvenu dans la mairie de Y1</h3>
          </div>
          <div className="col bg-warning text-white imh-hom-parent">
            <img className="home-img" src={mairie} alt="" />
          </div>
          <div className="col-12"></div>
        </div>
        <div className="row mb-0 text-center">
          <div className="col fw-bold p-4 c-green text-white ">
            <NavLink to={"/"} className="text-white">
              <AiOutlineHome size={30} color={"white"} />
              <div>Accueil</div>
            </NavLink>
          </div>
          <div className="col fw-bold text-white p-4  c-red">
            <NavLink to={"/coin-rh"} className="text-white">
              <BsFillPersonFill size={30} color={"white"} />
              <div>Mon coin RH</div>
            </NavLink>
          </div>
          <div className="col text-white fw-bold  p-4 c-orange">
            <NavLink to={"/contact"} className="text-white">
              <BsFillPersonVcardFill size={30} color={"white"} />
              <div>Mes contact</div>
            </NavLink>
          </div>
          <div className="col text-white fw-bold p-4  c-green">
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
