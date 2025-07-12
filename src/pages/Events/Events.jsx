import "./events.css";
import "../../components/general.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { CardsProvider } from "../../routes/CardsContext";
import { eventsData } from "../../data/events";
function Events() {
    const navigate = useNavigate();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
            {eventsData.map((item) =>(
                <div className={`card card${item.id}`} style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover"}}>
                    <div className="cardEvent" key={item.id} onClick={() => handleClick(item.id)}>
                        <div className="cardDate"><span>{item.dates}</span></div>
                        <div className="cardBody">
                            <div className="cardText"><p>{item.title}</p></div>
                            <div className="cardIconBox">
                                <img 
                                    src={isMobile ? item.iconMobile : item.icon}
                                    alt="cardButton"
                                    className={isMobile ? item.iconClassMobile : item.iconClass}/>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <div className="TextBox TextBox1"><span>КУДА</span></div>
            <div className="TextBox TextBox2"><span>ТЫ</span></div>
            <div className="TextBox TextBox3"><span>ИДЕШЬ</span></div>
            <div className="TextBox TextBox4"><span>СЕГОДНЯ?</span></div>
        </div>
    </CardsProvider>
    );
}
export default Events;