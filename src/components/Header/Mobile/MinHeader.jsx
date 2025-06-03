import "./MinHeaderStyle.css";
import logo from "../../../assets/header/logo.svg";
import menuIcon from "../../../assets/header/mobile/burgerMenu.svg";
import NavItem from "../NavItem";
import { useRef } from "react";


const navLinks = [
  { to: '/History', label: 'история' },
  { to: '/Events', label: 'мероприятия' },
  { to: '/Locations', label: 'локации' },
  { to: '/Rent', label: 'аренда' },
  { to: '/Contacts', label: 'контакты' },
  { to: '/Residence', label: 'резидентство'}
];

export default function MinHeader() {
    const navRefs = useRef({});
    return (
        <div className="min-header-container">
            <div className="min-header-logo-container">
                <img src={logo} alt="logo" />
            </div>
            <div className="min-header-menu-button-container">
                <img src={menuIcon} alt={menuIcon} />
                {navLinks.map(({ to, label }) => (
                <div
                    key={to}
                    className="min-nav-link-wrapper"
                    ref={(el) => navRefs.current[to] = el}
                >
                    <NavItem to={to} label={label} />
                </div>
            ))}
            </div>
        </div>
    );
}