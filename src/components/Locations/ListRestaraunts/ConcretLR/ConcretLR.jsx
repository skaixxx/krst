import { useParams } from "react-router-dom";
import { useData } from "../../../../data/listRestaraunts";
import SpecificEventButton from "../../../components/Buttons/ButtonGoToDesktop";
import "./ConcretLR.css";
import SlidingRotatingCross from "../../../components/animations/SRCross/SlidingRotatingCross";
import RotatingCross from "../../../components/animations/RotatingCross/RotatingCross";
import { useEffect } from "react";
import NotFound from "../../404/NotFound";

function ConcretLR() {
    const { id } = useParams();
    const { items } = useData();
    const item = items.find((item) => item.id === Number(id));
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="ConcretLR">
            {item ? (
            <div className="container-ConcretLR">
                <div className="specific-ConcretLR">
                    <div className="specific-ConcretLR-sub1">
                        <div className="ConcretLR-title ConcretLR-title1">
                            <p>{item.title}</p>
                        </div>
                        <div className="ConcretLR-animation">
                            <SlidingRotatingCross/>
                        </div>
                    </div>
                    <div className="ConcretLR-title-container-sub2">
                        <div className="ConcretLR-animation2"><RotatingCross/></div>
                        <div className="ConcretLR-title ConcretLR-title2">
                            <p>{item.title2}</p>
                        </div>
                    </div>

                </div>
                <div className="ConcretLR-main-info-block">
                    <div className="ConcretLR-paragraph1"><p>{item.text1}</p></div>
                    <div className="ConcretLR-date-price-container">
                        <div className="ConcretLR-date-container"><span className="ConcretLR-date">{item.concretplace}</span></div>
                        <div className="ConcretLR-price-container"><span className="ConcretLR-price"> {item.price} </span></div>
                    </div>
                </div>
                <div className="ConcretLR-stroke-container">
                    <div className="ConcretLR-stroke-element"><img src={item.icon1} alt="icon"/><p>{item.inText1}</p></div>
                    <div className="ConcretLR-stroke-element"><img src={item.icon2} alt="icon"/><p>{item.inText2}</p></div>
                    <div className="ConcretLR-stroke-element"><img src={item.icon3} alt="icon"/><p>{item.inText3}</p></div>
                </div>
                <div className="ConcretLR-content-container">
                    <div className="ConcretLR-paragraph2">
                        <div className="ConcretLR-paragraph2-text">
                            <p>{item.text2}</p>
                            <p>{item.text3}</p>
                        </div>
                        <div className="ConcretLR-paragraph2-btn"><SpecificEventButton text="перейти"/></div>
                    </div>
                    <div className="ConcretLR-big-picture-container"><img src={item.concretimage} alt="pic" className="ConcretLR-big-picture"/></div>
                </div>
            </div>
            ) : (
                <NotFound/>
            )}
        </div>
    );
}

export default ConcretLR;