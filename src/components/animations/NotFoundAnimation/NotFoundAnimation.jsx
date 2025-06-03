import "./NotFoundAnimation.css";
import cross from "../../../assets/animation/1/black_cross.svg";


export default function NotFoundAnimation() {
    return (
        <div className="NFA-container">
            <img className="NFA-cross-1" src={cross} alt="cross" />
            <p className="NFA-text">404</p>
            <img className="NFA-cross-2" src={cross} alt="cross" />
        </div>
    );
}