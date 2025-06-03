import redCross from "../../../assets/animation/2/RedCross.svg";
import blackBracket from "../../../assets/animation/2/BlackBracket.svg";
import "./ScaleCrossSlideBracketStyle.css";

export default function ScaleCrossSlideBracket() {
    return (
        <div className="SCSB-animation-container">
            <img className="SCSB-animation-cross" src={redCross} alt="redCross"/>
            <img className="SCSB-animation-bracket" src={blackBracket} alt="blackBracket"/>
        </div>
    );
}