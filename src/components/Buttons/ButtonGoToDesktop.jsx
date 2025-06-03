import arrow from "./buttonArrow.svg"
import "./ButtonGoToDesktopStyle.css"

export default function ButtonGoToDesktop({text, action}) {
    return (
        <div className="button-container-specific-events">
            <button className="button-specific-events" onClick={action}>
                <p>{text}</p>
                <img src={arrow} alt="arrow" />
            </button>
        </div>
    );
}