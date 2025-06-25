import "./events.css";
import "../general.css";
import { useData } from "../../routes/DataContext";
import { useNavigate } from "react-router-dom";
function Events() {
    const { items } = useData();
    const navigate = useNavigate();
    const handleClick = (id) => {
        navigate(`/Events/SpecificEvent/${id}`)
    }
    console.log("Data: ", items);
    if (!items || items.length === 0) {
        return <p>Данные загружаются...</p>
    };
    return (
        <div className="grid-container-events">
            {items.map((item) =>(
                <div className={`card card${item.id}`} style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover"}}>
                    <a className="cardEvent" key={item.id} onClick={() => handleClick(item.id)}>
                        <div className="cardDate"><span>{item.dates}</span></div>
                        <div className="cardBody">
                            <div className="cardText"><p>{item.title}</p></div>
                            <div className="cardButton"><img src={item.icon} alt="cardButton" class="cardButtonIcon"/></div>
                        </div>
                    </a>
                </div>
            ))}
            <div className="TextBox TextBox1"><span>КУДА</span></div>
            <div className="TextBox TextBox2"><span>ТЫ</span></div>
            <div className="TextBox TextBox3"><span>ИДЕШЬ</span></div>
            <div className="TextBox TextBox4"><span>СЕГОДНЯ?</span></div>
        </div>

    );
}
export default Events;