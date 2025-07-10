import { useParams } from "react-router-dom";
import { useData } from "../../../data/masterClasses";
import SpecificEventButton from "../../../components/Buttons/ButtonGoToDesktop";
import "./ConcretMC.css";
import SlidingRotatingCross from "../../../components/animations/SRCross/SlidingRotatingCross";
import RotatingCross from "../../../components/animations/RotatingCross/RotatingCross";
import { useEffect } from "react";
import NotFound from "../../404/NotFound";

function ConcretMC() {
    const { id } = useParams();
    const { items } = useData();
    const item = items.find((item) => item.id === Number(id));
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="ConcretMC">
            {item ? (
            <div className="container-ConcretMC">
                <div className="specific-ConcretMC">
                    <div className="specific-ConcretMC-sub1">
                        <div className="ConcretMC-title ConcretMC-title1">
                            <p>{item.title}</p>
                        </div>
                        <div className="ConcretMC-animation">
                            <SlidingRotatingCross/>
                        </div>
                    </div>
                    <div className="ConcretMC-title-container-sub2">
                        <div className="ConcretMC-animation2"><RotatingCross/></div>
                        <div className="ConcretMC-title ConcretMC-title2">
                            <p>{item.title2}</p>
                        </div>
                    </div>

                </div>
                <div className="ConcretMC-main-info-block">
                    <div className="ConcretMC-paragraph1"><p>{item.text1}</p></div>
                    <div className="ConcretMC-date-price-container">
                        <div className="ConcretMC-date-container"><span className="ConcretMC-date">{item.date}</span></div>
                        <div className="ConcretMC-price-container"><span className="ConcretMC-price"> {item.price} </span></div>
                    </div>
                </div>
                <div className="ConcretMC-stroke-container">
                    <div className="ConcretMC-stroke-element"><img src={item.icon1} alt="icon"/><p>{item.inText1}</p></div>
                    <div className="ConcretMC-stroke-element"><img src={item.icon2} alt="icon"/><p>{item.inText2}</p></div>
                    <div className="ConcretMC-stroke-element"><img src={item.icon3} alt="icon"/><p>{item.inText3}</p></div>
                </div>
                <div className="ConcretMC-content-container">
                    <div className="ConcretMC-paragraph2">
                        <div className="ConcretMC-paragraph2-text">
                            <p>{item.text2}</p>
                            <p>{item.text3}</p>
                        </div>
                        <div className="ConcretMC-paragraph2-btn"><SpecificEventButton text="перейти"/></div>
                    </div>
                    <div className="ConcretMC-big-picture-container"><img src={item.image} alt="pic" className="ConcretMC-big-picture"/></div>
                </div>
            </div>
            ) : (
                <NotFound/>
            )}
        </div>
    );
}

export default ConcretMC;