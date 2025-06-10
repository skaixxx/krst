import "./slidingRotatingCrossStyle.css";
import b_dot from "../../../assets/animation/1/black_dot.svg"
import r_dot from "../../../assets/animation/1/red_dot.svg"
import cross from "../../../assets/animation/1/black_cross.svg"


function SlidingRotatingCross() {
    return (
        <div className="sr-animation-container">
            <div className="b_dot"><img className="sr-anim-element1" src={b_dot} alt="b_dot"/></div>
            <div className="r_dot"><img className="sr-anim-element1" src={r_dot} alt="b_dot"/></div>
            <div className="cross"><img className="sr-anim-element2" src={cross} alt="b_dot"/></div>
        </div>
    );
}

export default SlidingRotatingCross;