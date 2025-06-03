import "./header.css"
import "../general.css"
import logo from "../../assets/header/logo.svg"
import { useNavigate } from "react-router";
import Navbar from "./Navbar";
function Header() {
    const navigate = useNavigate();
    return (
        <header className="header">
        <div className="header-container">
            <div className="logo-container"><a onClick={() => navigate("/")}><img className="logo" src={logo} alt="logo"></img></a></div>
                <Navbar/>
                <div className="button-container"><input type="button" onClick={() => navigate("/Residence")} class="residency-btn" value="резидентство"></input></div>
            </div>
        </header>
    );
}

export default Header;