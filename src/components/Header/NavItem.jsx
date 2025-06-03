import { NavLink } from "react-router-dom";

export default function NavItem( { to, label}, ref) {
    return (
        <NavLink
        to={to}
        ref={ref}
        className={({ isActive}) => isActive ? 'nav-link active' : 'nav-link'}
        >
            {label}
        </NavLink>
    );
}