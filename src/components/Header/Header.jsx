import styles from "./header.module.css"
import "../general.css"
import Navbar from "./Navbar";
import useMediaQuery from "./useMediaQuery";
import MinHeader from "./Mobile/MinHeader";
function Header() {
    const isMobile = useMediaQuery('(max-width: 768px)');
    return (
        <header className={styles.header}>
                {isMobile ? <MinHeader/> : <Navbar/>};
        </header>
    );
}

export default Header;