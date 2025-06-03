import "./RotatingCrossStyle.css";
import cross from "../../../assets/animation/1/black_cross.svg";

export default function RotatingCross() {
    return (
        <div className="rotating-cross-container">
            <img className="rotating-cross-img" src={cross} alt="cross" />
        </div>
    );
}