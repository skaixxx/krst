import styles from "./MinHeaderStyle.module.css";
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
        <div className={styles.minHeader}>
            <div className={styles.logoContainer}>
                <img src={logo} alt="logo" className={styles.logoPic}/>
            </div>
            <div className={styles.burgerMenu}>
                <div className={styles.burgerMenuIconLink}><img src={menuIcon} alt={menuIcon} className={styles.burgerMenuIcon}/></div>
                {navLinks.map(({ to, label }) => (
                <div
                    key={to}
                    className={styles.burgerWrapper}
                    ref={(el) => navRefs.current[to] = el}
                >
                    <NavItem to={to} label={label} />
                </div>
            ))}
            </div>
        </div>
    );
}