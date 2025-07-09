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
    const [isClosing, setIsClosing] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const isLightLogo = ['/', '/History'].includes(location.pathname);

    const handleMenuToggle = () => {
        if(menuOpen) {
            setIsClosing(true);
            setTimeout(() => {
                setMenuOpen(false);
                setIsClosing(false);
            }, 500);
        } else {
            setMenuOpen(true);
        }
    }
    
    return (
        <div className={styles.minHeader}>
            <div className={styles.staticElements}>
                <div className={styles.logoContainer} onClick={() => `${navigate("/")} ${setMenuOpen(false)}` }>
                    <img src={isLightLogo ? lightLogo : darkLogo} alt="logo" className={styles.logoPic}/>
                </div>
                <div className={styles.burgerMenuIconLink} onClick={handleMenuToggle}>
                    <img src={isLightLogo ? menuIconLight : menuIcon} alt="menu" className={styles.burgerMenuIcon}/>
                </div>    
            </div>    
            <div className={clsx(styles.burgerMenu, {
                [styles.active]: menuOpen && !isClosing,
                [styles.closing]: isClosing
                })}
            >
                <div className={styles.logoContainer} onClick={() => `${navigate("/")} ${setMenuOpen(false)}` }>
                    <img src={darkLogo} alt="logo" className={styles.logoPic}/>
                </div>
                <div className={styles.burgerMenuLinks}>
                    {navLinks.map(({ to, label }, index) => { 
                        const isLast = index === navLinks.length -1;
                        return(
                            <NavItem to={to} label={label} onClick={() => setMenuOpen(false)} className={`${styles.navLinkMobile} ${isLast ? styles.navLinkMobileLast : ""}`}/>
                )})}
                </div>
                <div className={styles.burgerMenuIconLink} onClick={handleMenuToggle}>
                    <img src={closeMenuIcon} alt="close" className={styles.burgerMenuIcon}/>
                </div>
            </div>
        </div>
    );
}