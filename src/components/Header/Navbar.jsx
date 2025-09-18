import NavItem from './NavItem';
import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import logo from "../../assets/header/logo.svg"
import { useNavigate } from "react-router";
import styles from "./header.module.css"
import { useTranslation } from '../../hooks/useTranslation';
const navLinks = [
  { to: '/History', label: {ru: "история", en: "history"}},
  { to: '/Events', label: {ru: "мероприятия", en: "events"}},
  { to: '/Locations', label: {ru: "локации", en: "locations"}},
  { to: '/Rent', label: {ru: "аренда", en: "rent"}},
  { to: '/Contacts', label: {ru: "контакты", en: "contacts"}}, 
];
const residency = {
  ru: "резидентство",
  en: "residency"
}
export default function Navbar() {
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const t = useTranslation(navLinks);
  const [showIndicator, setShowIndicator] = useState(false);
  const location = useLocation();
  const navRefs = useRef({});
  const navigate = useNavigate();
  const updateIndicatorStyle = () => {
    const activeLink = document.querySelector(`.${styles.navLinkActive}`);
    if (activeLink) {
      const { offsetLeft, offsetWidth } = activeLink;
      const center = offsetLeft + offsetWidth / 2;
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
      <div className={styles.logoContainer}><div onClick={() => navigate("/")}><img className={styles.logo} src={logo} alt="logo"></img></div></div>
      <nav className={`${styles.navigation} ${!showIndicator ? `${styles.noIndicator}` : ''}`}>
        <div className={styles.navLinks}>
          {navLinks.map(({ to, label }) => (
            <div
              key={to}
              className={styles.navLinkWrapper}
              ref={(el) => navRefs.current[to] = el}
              showIndicator={showIndicator}
            >
              <NavItem to={to} label={t(label)} className={styles.navLink}/>
            </div>
          ))}
          {showIndicator && <div className={styles.activeIndicator} style={indicatorStyle}></div>}
          
        </div>
      </nav>
      <div className={styles.buttonContainer}><input type="button" onClick={() => navigate("/Residence")} className={styles.residencyBtn} value={t(residency)}></input></div>
    </div>
  );
}
