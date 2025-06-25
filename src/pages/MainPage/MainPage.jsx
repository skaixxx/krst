
import style from "./mainPage.module.css"
import redCross from "../../assets/mainPage/redCrossMP.svg"
import redLogo from "../../assets/mainPage/redLogoMP.svg"
import arrows from "../../assets/mainPage/arrowsMP.svg"
import weatherIcon from "../../assets/mainPage/weather.svg"
import peopleIcon from "../../assets/mainPage/people.svg"
import timeIcon from "../../assets/mainPage/time.svg"
import mapImage from "../../assets/mainPage/map.png"
import arrowBR from "../../assets/mainPage/arrowsBR.svg"
import listPoint from "../../assets/mainPage/listPoint.svg"
import SlidingRotatingCross from "../../components/animations/SRCross/SlidingRotatingCross"
import { useData } from "../../routes/DataContext"
import { useNavigate } from "react-router"
function MainPage() {
    const { items } = useData();
    const limitedCard = items.slice(0, 5);
    const navigate = useNavigate();
    const handleClick = (id) => {
        navigate(`/Events/SpecificEvent/${id}`)
    }
    console.log("Data: ", limitedCard);
    if (!limitedCard || limitedCard.length === 0) {
        return <p>Данные загружаются...</p>
    };
    return (
        <div className={style.mainPage}>
            <div className={style.fullScreenContainer1}>
                <div className={style.pageTitle}>
                        <p className={style.titleText1}>ОБЩЕСТВЕННОЕ</p>
                        <p className={style.titleText2}>ПРОСТРАНСТВО</p>
                </div>
            </div>
            <div className={style.fullScreenContainer2}>
                <div className={style.contentContainer}>
                    <div className={style.container2TextBox1}>
                        <p className={style.textBox1Title}>КРСТ</p>
                        <p className={style.textBox1Text}>КРЕАТИВНАЯ РАЗВЛЕКАТЕЛЬНАЯ СОВРЕМЕННАЯ ТЕРРИТОРИЯ</p>
                    </div>
                    <div className={style.container2TextBox2}>
                        <p className={style.textBox2Title}>О НАС</p>
                        <p className={style.textBox2Text}>
                            КРСТ — это уникальный многофункциональный комплекс, где рождаются идеи, проводятся мероприятия, выставки и мастер-классы. Здесь гармонично сочетаются рестораны с разнообразной кухней, выставочные залы, где показана история данного места, а также культурные площадки, которые становятся центром притяжения для творческих людей.
                        </p>
                    </div>
                </div>
            </div>
            <div className={style.interactiveLine}>
                <div className={style.iLineElements}>
                    <div className={style.iLineElement}>
                        <img src={weatherIcon} alt="weatherIcon" className={style.weatherIcon}/>
                        <div className={style.iLineTextBlock}>
                            <p className={style.titleInfo}>4°C</p>
                            <p className={style.subText}>осадки</p>
                        </div>
                    </div>
                    <div className={style.iLineElement}>
                        <img src={peopleIcon} alt="peopleIcon" className={style.peopleIcon}/>
                        <div className={style.iLineTextBlock}>
                            <p className={style.titleInfo}>30%</p>
                            
                            <div className={style.statusInfo}><div className={style.freeIndicator}></div><p className={style.subText}>свободно</p></div>
                        </div>
                    </div>
                    <div className={style.iLineElement}>
                        <img src={timeIcon} alt="timeIcon" className={style.timeIcon}/>
                        <div className={style.iLineTextBlock}>
                            <p className={style.titleInfo}>ПН-ВС</p>
                            <p className={style.subText}>10:00-22:00</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.cardsContent}>
                {limitedCard.map((item) =>(
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
                <div className={style.animationContainer}>
                    <SlidingRotatingCross/>
                </div>
                <p className={style.anonsText}>АНОНСЫ</p>
            </div>
            <div className={style.mapContainer}>
                <img src={mapImage} alt="map" className={style.mapImage}/>
            </div>
            <div className={style.rulesContainer}>
                <div className={style.rulesTitleRow}>
                    <div className={style.rulesStroke1}>
                        <p className={style.rulesStroke1Text}>ПРАВИЛА</p>
                        <img src={arrowBR} alt="arrows" className={style.rulesStrokeAnimation}/>
                    </div>
                    <div className={style.rulesStroke2}>
                        <p className={style.rulesStroke2Text}>
                            ПОСЕЩЕНИЯ
                        </p>
                    </div>
                </div>
                <div className={style.listContainer}>
                    <div className={style.listItem}>
                        <img src={listPoint} alt="listPoint" />
                        <p className={style.listItemText}>Уважайте пространство, людей и экспонаты</p>
                    </div>
                    <div className={style.listItem}>
                        <img src={listPoint} alt="listPoint" />
                        <p className={style.listItemText}>Фотосъёмка разрешена, но без нарушения приватности</p>
                    </div>
                    <div className={style.listItem}>
                        <img src={listPoint} alt="listPoint" />
                        <p className={style.listItemText}>Соблюдайте чистоту — используйте урны, возвращайте вещи на место.</p>
                    </div>
                    <div className={style.listItem}>
                        <img src={listPoint} alt="listPoint" />
                        <p className={style.listItemText}>Дети до 14 лет — только с взрослыми, животные — на поводке</p>
                    </div>
                    <div className={style.listItem}>
                        <img src={listPoint} alt="listPoint" />
                        <p className={style.listItemText}>Соблюдайте безопасность — не заходите в закрытые зоны, следуйте инструкциям</p>
                    </div>
                    <div className={style.listItem}>
                        <img src={listPoint} alt="listPoint" />
                        <p className={style.listItemText}>Запрещены курение, алкоголь, агрессия и нарушения порядка</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default MainPage;