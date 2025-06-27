import NavItem from './NavItem';
import ActiveIndicator from './ActiveIndicator';
import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import logo from "../../assets/header/logo.svg"
import { useNavigate } from "react-router";
import styles from "./header.module.css"
const navLinks = [
  { to: '/History', label: 'история' },
  { to: '/Events', label: 'мероприятия' },
  { to: '/Locations', label: 'локации' },
  { to: '/Rent', label: 'аренда' },
  { to: '/Contacts', label: 'контакты' },
  
];

export default function Navbar() {
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const [showIndicator, setShowIndicator] = useState(false);
  const location = useLocation();
  const navRefs = useRef({});
  const navigate = useNavigate();
  useEffect(() => {
    const activeLink = navRefs.current[location.pathname];
    if (activeLink) {
      setIndicatorStyle({
        width: `${activeLink.offsetWidth}px`,
        left: `${activeLink.offsetLeft}px`,
      });
      setShowIndicator(true);
    } else {
      setShowIndicator(false);
    }
  }, [location.pathname]);
  

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
              <NavItem to={to} label={label} />
            </div>
          ))}
          <AnimatePresence>
            {showIndicator && <ActiveIndicator style={indicatorStyle} />}
          </AnimatePresence>

        </div>
      </nav>
      <div className={styles.buttonContainer}><input type="button" onClick={() => navigate("/Residence")} className={styles.residencyBtn} value="резидентство"></input></div>
    </div>
  );
}
