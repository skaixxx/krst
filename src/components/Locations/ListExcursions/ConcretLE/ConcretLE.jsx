import { useParams } from "react-router-dom";
import { useData } from "../../../../data/listExcursions";
import SpecificEventButton from "../../../components/Buttons/ButtonGoToDesktop";
import "./ConcretMC.css";
import SlidingRotatingCross from "../../../components/animations/SRCross/SlidingRotatingCross";
import RotatingCross from "../../../components/animations/RotatingCross/RotatingCross";
import { useEffect } from "react";
import NotFound from "../../404/NotFound";

function ConcretLE() {
    const { id } = useParams();
    const { items } = useData();
    const item = items.find((item) => item.id === Number(id));
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="ConcretLE">
            {item ? (
            <div className="container-ConcretLE">
                <div className="specific-ConcretLE">
                    <div className="specific-ConcretLE-sub1">
                        <div className="ConcretLE-title ConcretLE-title1">
                            <p>{item.title}</p>
                        </div>
                        <div className="ConcretLE-animation">
                            <SlidingRotatingCross/>
                        </div>
                    </div>
                    <div className="ConcretLE-title-container-sub2">
                        <div className="ConcretLE-animation2"><RotatingCross/></div>
                        <div className="ConcretLE-title ConcretLE-title2">
                            <p>{item.title2}</p>
                        </div>
                    </div>

                </div>
                <div className="ConcretLE-main-info-block">
                    <div className="ConcretLE-paragraph1"><p>{item.text1}</p></div>
                    <div className="ConcretLE-date-price-container">
                        <div className="ConcretLE-date-container"><span className="ConcretLE-date">{item.time}</span></div>
                        <div className="ConcretLE-price-container"><span className="ConcretLE-price"> {item.price} </span></div>
                    </div>
                </div>
                <div className="ConcretLE-stroke-container">
                    <div className="ConcretLE-stroke-element"><img src={item.icon1} alt="icon"/><p>{item.inText1}</p></div>
                    <div className="ConcretLE-stroke-element"><img src={item.icon2} alt="icon"/><p>{item.inText2}</p></div>
                    <div className="ConcretLE-stroke-element"><img src={item.icon3} alt="icon"/><p>{item.inText3}</p></div>
                </div>
                <div className="ConcretLE-content-container">
                    <div className="ConcretLE-paragraph2">
                        <div className="ConcretLE-paragraph2-text">
                            <p>{item.text2}</p>
                            <p>{item.text3}</p>
                        </div>
                        <div className="ConcretLE-paragraph2-btn"><SpecificEventButton text="перейти"/></div>
                    </div>
                    <div className="ConcretLE-big-picture-container"><img src={item.concretimage} alt="pic" className="ConcretLE-big-picture"/></div>
                </div>
            </div>
            ) : (
                <NotFound/>
            )}
        </div>
    );
}

export default ConcretLE;