import arrow from "./buttonArrow.svg"
import "./ButtonGoToDesktopStyle.css"

export default function ButtonGoToDesktop({ text, action, notShowPic=false }) {
    return (
        <div className="button-container-specific-events">
            <button className="button-specific-events" onClick={action}>
                <p>{text}</p>
                {!notShowPic ? <img src={arrow} alt="arrow" className="button-arrow-pic"/> : null}
            </button>
        </div>
    );
}