import "./events.css";
import "../../components/general.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { CardsProvider } from "../../routes/CardsContext";
import eventsData from "../../data/events";
import { useTranslation } from "../../hooks/useTranslation";
import EventsTranslation from "./Events.translation.ts";
function Events() {
    const t2 = useTranslation(EventsTranslation)
    const navigate = useNavigate();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const t = useTranslation(eventsData);
    const isMobile = windowWidth <= 768;

    const handleClick = (id) => {
        navigate(`/Events/SpecificEvent/${id}`)
    }

    useEffect(() => {

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Убираем обработчик при размонтировании компонента
        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, []);
    return (
        <CardsProvider data={eventsData}>
        <div className="grid-container-events">
            {eventsData.map((item) => {
                console.log(item.title);
                return (                <div className={`card card${item.id}`} style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover"}}>
                    <div className="cardEvent" key={item.id} onClick={() => handleClick(item.id)}>
                        <div className="cardDate"><span>{t(item.dates)}</span></div>
                        <div className="cardBody">
                            <div className="cardText"><p>{t(item.title)}</p></div>
                            <div className="cardIconBox">
                                <img 
                                    src={isMobile ? item.iconMobile : item.icon}
                                    alt="cardButton"
                                    className={isMobile ? item.iconClassMobile : item.iconClass}/>
                            </div>
                        </div>
                    </div>
                </div>
            )
            })}
            <div className="TextBox TextBox1"><span>{t2("text1")}</span></div>
            <div className="TextBox TextBox2"><span>{t2("text2")}</span></div>
            <div className="TextBox TextBox3"><span>{t2("text3")}</span></div>
            <div className="TextBox TextBox4"><span>{t2("text4")}</span></div>
        </div>
    </CardsProvider>
    );
}
export default Events;