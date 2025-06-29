import styles from "./MinHeaderStyle.module.css";
import darkLogo from "../../../assets/header/logo.svg";
import lightLogo from "../../../assets/header/mobile/logoLight.svg"
import menuIcon from "../../../assets/header/mobile/burgerMenu.svg";
import menuIconLight from "../../../assets/header/mobile/menuLight.svg"
import closeMenuIcon from "../../../assets/header/mobile/closeMobMenu.svg"
import NavItem from "../NavItem";
import { useRef, useState } from "react";
import clsx from "clsx";
import { useLocation, useNavigate } from "react-router";

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
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const isLightLogo = ['/', '/History'].includes(location.pathname);
    const logo = !menuOpen && isLightLogo ? lightLogo : darkLogo;
    const burgerLogo = !menuOpen && isLightLogo? menuIconLight : menuIcon;
    return (
        <div className={clsx(styles.minHeader, {[styles.active]: menuOpen})}>
            <div className={clsx(styles.burgerMenu, {[styles.active]: menuOpen})}>
                <div className={clsx(styles.burgerMenuContainer, {[styles.active]: menuOpen})}>
                    <div className={styles.logoContainer} onClick={() => navigate("/")}>
                        <img src={logo} alt="logo" className={styles.logoPic} key={logo}/>
                    </div>
                    <div className={styles.burgerMenuLinks}>
                        {navLinks.map(({ to, label }) => (
                        <div
                            key={to}
                            className={clsx(styles.burgerWrapper, {[styles.active]: menuOpen})}
                            ref={(el) => navRefs.current[to] = el}
                        >
                            <NavItem to={to} label={label} onClick={() => setMenuOpen(false)} className={styles.navLinkMobile}/>
                        </div>
                    ))}
                    </div>
                    <div className={styles.burgerMenuIconLink} onClick={() => setMenuOpen(prev => !prev)}>
                        <img src={!menuOpen ? `${burgerLogo}` : `${closeMenuIcon}`} alt={menuIcon} className={styles.burgerMenuIcon}/></div>
                </div>
            </div>
        </div>
    );
}