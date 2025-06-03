import { useParams } from "react-router-dom";
import { useData } from "../../../routes/DataContext";
import SpecificEventButton from "../../Buttons/ButtonGoToDesktop";
import "./SpecificEvent.css";
import SlidingRotatingCross from "../../animations/SRCross/SlidingRotatingCross";
import RotatingCross from "../../animations/RotatingCross/RotatingCross";
import { useEffect } from "react";
import NotFound from "../../404/NotFound";

function SpecificEvent() {
    const { id } = useParams();
    const { items } = useData();
    const item = items.find((item) => item.id === Number(id));
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="specific-event">
            {item ? (
            <div className="container-specific-event">
                <div className="specific-event-title-container">
                    <div className="specific-event-title-container-sub1">
                        <div className="specific-event-title specific-event-title1">
                            <p>{item.title1}</p>
                        </div>
                        <div className="specific-event-animation">
                            <SlidingRotatingCross/>
                        </div>
                    </div>
                    <div className="specific-event-title-container-sub2">
                        <div className="specific-event-animation2"><RotatingCross/></div>
                        <div className="specific-event-title specific-event-title2">
                            <p>{item.title2}</p>
                        </div>
                    </div>

                </div>
                <div className="specific-event-main-info-block">
                    <div className="specific-event-paragraph1"><p>{item.paragraph1}</p></div>
                    <div className="specific-event-date-price-container">
                        <div className="specific-event-date-container"><span className="specific-event-date">{item.dates}</span></div>
                        <div className="specific-event-price-container"><span className="specific-event-price">от {item.price} ₽</span></div>
                    </div>
                </div>
                <div className="specific-event-stroke-container">
                    <div className="specific-event-stroke-element"><img src={item.inIcon1} alt="icon"/><p>{item.inText1}</p></div>
                    <div className="specific-event-stroke-element"><img src={item.inIcon2} alt="icon"/><p>{item.inText2}</p></div>
                    <div className="specific-event-stroke-element"><img src={item.inIcon3} alt="icon"/><p>{item.inText3}</p></div>
                </div>
                <div className="specific-event-content-container">
                    <div className="specific-event-paragraph2">
                        <div className="specific-event-paragraph2-text">
                            <p>{item.paragraph2}</p>
                            <p>{item.paragraph3}</p>
                        </div>
                        <div className="specific-event-paragraph2-btn"><SpecificEventButton text="перейти"/></div>
                    </div>
                    <div className="specific-event-big-picture"><img src={item.image} alt="pic"/></div>
                </div>
            </div>
            ) : (
                <NotFound/>
            )}
        </div>
    );
}

export default SpecificEvent;