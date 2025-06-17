import redCross from "../../../assets/animation/2/RedCross.svg";
import blackBracket from "../../../assets/animation/4/bracketRight.svg";
import "./ScaleCrossSlideBracket_inverted_Style.css";

export default function ScaleCrossSlideBracketInverted() {
    return (
        <div className="SCSBi-animation-container">
            <img className="SCSBi-animation-cross" src={redCross} alt="redCross"/>
            <img className="SCSBi-animation-bracket" src={blackBracket} alt="blackBracket"/>
        </div>
    );
}