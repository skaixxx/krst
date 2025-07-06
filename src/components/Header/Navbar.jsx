import NavItem from './NavItem';
import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import logo from "../../assets/header/logo.svg"
import { useNavigate } from "react-router";
import styles from "./header.module.css"
const navLinks = [
  { to: '/History', label: 'история'},
  { to: '/Events', label: 'мероприятия'},
  { to: '/Locations', label: 'локации'},
  { to: '/Rent', label: 'аренда'},
  { to: '/Contacts', label: 'контакты'}, 
];

export default function Navbar() {
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const [showIndicator, setShowIndicator] = useState(false);
  const location = useLocation();
  const navRefs = useRef({});
  const navigate = useNavigate();
  const updateIndicatorStyle = () => {
    const activeLink = document.querySelector(`.${styles.navLinkActive}`);
    if (activeLink) {
      const { offsetLeft, offsetWidth } = activeLink;
      const center = offsetLeft + offsetWidth / 2;
      console.log(center)
      setIndicatorStyle({
        width: `${offsetWidth * 1.2}px`,
        left: `${center - (offsetWidth * 1.2) / 2}px`,
        opacity: 1,
      })
      setShowIndicator(true);
    } else {
        setShowIndicator(false);
      }
  }
  useEffect(() => {
    updateIndicatorStyle();
    window.addEventListener('resize', updateIndicatorStyle);
    return () => {window.removeEventListener('resize', updateIndicatorStyle);};
  }, [location.pathname])
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoContainer}><a onClick={() => navigate("/")}><img className={styles.logo} src={logo} alt="logo"></img></a></div>
      <nav className={`${styles.navigation} ${!showIndicator ? `${styles.noIndicator}` : ''}`}>
        <div className={styles.navLinks}>
          {navLinks.map(({ to, label }) => (
            <div
              key={to}
              className={styles.navLinkWrapper}
              ref={(el) => navRefs.current[to] = el}
              showIndicator={showIndicator}
            >
              <NavItem to={to} label={label} className={styles.navLink}/>
            </div>
          ))}
          {showIndicator && <div className={styles.activeIndicator} style={indicatorStyle}></div>}
          
        </div>
      </nav>
      <div className={styles.buttonContainer}><input type="button" onClick={() => navigate("/Residence")} className={styles.residencyBtn} value="резидентство"></input></div>
    </div>
  );
}
