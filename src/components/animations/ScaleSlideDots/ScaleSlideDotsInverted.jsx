import blackDot from "../../../assets/animation/3/black_dot.svg"
import redDot from "../../../assets/animation/3/red_dot.svg"
import "./ScaleSlideDotsStyle.css";

export default function ScaleSlideDotsInverted() {
    return (
        <div className="SSD-animation-container">
            <img className="SSD-animation-dot2" src={redDot} alt="redDot"/>
            <img className="SSD-animation-dot1" src={blackDot} alt="blackDot"/>
        </div>
    );
}