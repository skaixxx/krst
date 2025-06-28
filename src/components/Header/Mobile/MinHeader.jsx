import styles from "./MinHeaderStyle.module.css";
import logo from "../../../assets/header/logo.svg";
import menuIcon from "../../../assets/header/mobile/burgerMenu.svg";
import closeMenuIcon from "../../../assets/header/mobile/closeMobMenu.svg"
import NavItem from "../NavItem";
import { useRef, useState } from "react";
import clsx from "clsx";
import { useNavigate } from "react-router";

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
    return (
        <div className={styles.minHeader}>
            <div className={clsx(styles.burgerMenu, {[styles.active]: menuOpen})}>
                <div className={clsx(styles.burgerMenuContainer, {[styles.active]: menuOpen})}>
                    <div className={styles.logoContainer} onClick={() => navigate("/")}>
                        <img src={logo} alt="logo" className={styles.logoPic}/>
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
                        <img src={!menuOpen ? `${menuIcon}` : `${closeMenuIcon}`} alt={menuIcon} className={styles.burgerMenuIcon}/></div>
                </div>
            </div>
        </div>
    );
}