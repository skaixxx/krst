import { NavLink } from "react-router-dom";
import styles from "./header.module.css"
export default function NavItem( { to, label, onClick, className}, ref) {
    return (
        <NavLink
        to={to}
        ref={ref}
        className={({ isActive}) => isActive ? `${className} ${styles.navLinkActive}` : `${className}`}
        onClick={onClick}
        >
            {label}
        </NavLink>
    );
}