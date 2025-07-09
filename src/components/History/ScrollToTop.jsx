import { useEffect, useState } from "react"
import upBtnIcon from "../../assets/history/upBtn.svg"
import style from "./ScrollToTop.module.css"
const ScrollToTopBtn = ({triggerID}) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const triggerElement = document.getElementById(triggerID);
        if (!triggerElement) return;

        const observ = new IntersectionObserver(([entry]) => {
            setIsVisible(!entry.isIntersecting);
        },
        {
            root: null,
            threshold: 0.1,
        });
        observ.observe(triggerElement);
        return () => observ.disconnect();
    }, [triggerID])

    const scrollToTop = () => {
        window.scrollTo({top:0})
    }
    return (
        isVisible && (
        <div className={style.goUpButton} onClick={scrollToTop}>
            <img src={upBtnIcon} alt="upbtn" className={style.goUpButtonIcon}/>
        </div>
        )
    );
}
export default ScrollToTopBtn;