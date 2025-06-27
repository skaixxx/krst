import { NavLink } from "react-router-dom";
import styles from "./header.module.css"
export default function NavItem( { to, label}, ref) {
    return (
        <NavLink
        to={to}
        ref={ref}
        className={({ isActive}) => isActive ? `${styles.navLink} ${styles.active}` : `${styles.navLink}`}
        >
            {label}
        </NavLink>
    );
}