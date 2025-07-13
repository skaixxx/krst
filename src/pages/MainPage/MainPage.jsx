import style from "./mainPage.module.css"
import weatherIcon from "../../assets/mainPage/weather.svg"
import peopleIcon from "../../assets/mainPage/people.svg"
import timeIcon from "../../assets/mainPage/time.svg"
import mapImage from "../../assets/mainPage/map.png"
import arrowBR from "../../assets/mainPage/arrowsBR.svg"
import listPoint from "../../assets/mainPage/listPoint.svg"
import mobBg from "../../assets/mainPage/mobileStaticMP.png"
import fsBg from "../../assets/mainPage/staticMP.png"
import SlidingRotatingCross from "../../components/animations/SRCross/SlidingRotatingCross"
import { eventsData } from "../../data/events"
import { useNavigate } from "react-router"
import useMediaQuery from "../../components/Header/useMediaQuery"
import { useEffect, useRef } from 'react';

import lottie from "lottie-web";
import AnimationData from '../../assets/animation/main/mainAnimationData.json';

function MainPage() {
    
    const containerRef = useRef(null);
    const animationRef = useRef(null);

    const navigate = useNavigate();
    const isMobile = useMediaQuery('(max-width: 768px)');
    const bgSectionStyle = isMobile ? mobBg : fsBg;

    const limitedCard = eventsData.map(item =>
    item.id === 4 && isMobile? eventsData.find(item => item.id === 8) : item).slice(0, 5);

    const handleClick = (id) => {
        navigate(`/Events/SpecificEvent/${id}`)
    }

    useEffect(() => {
    
        // Инициализация анимации
        animationRef.current = lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        animationData: AnimationData // Используем JSON
        });

        const handleScroll = () => {
            if (!containerRef.current || !animationRef.current) return;

            // Получаем позицию элемента относительно viewport
            const { top, height } = containerRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            
            // Рассчитываем прогресс скролла (0-1)
            const scrollProgress = Math.max(0, Math.min(1, 
                (-top + viewportHeight * 0.5) / (height + viewportHeight * 0.5)
            ));

            // Переходим к соответствующему кадру
            const totalFrames = animationRef.current.totalFrames;
            animationRef.current.goToAndStop(scrollProgress * totalFrames, true);
        };

        // Добавляем обработчики
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
        handleScroll(); // Инициализация

        return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleScroll);
        animationRef.current?.destroy();
        };

    }, []);

    if (!limitedCard || limitedCard.length === 0) {
        return <p>Данные загружаются...</p>
    };

    return (
        <div className={style.mainPage}>
            <div className={style.fullScreenContainer1}>
                <div className={style.pageTitle}>
                        <p className={style.titleText1}>ОБЩЕСТВЕННОЕ</p>
                </div>
            </div>
            <div className={style.topRow}><div className={style.topRow1}><p className={style.titleText2}>ПРОСТРАНСТВО</p></div></div>
            <div ref={containerRef} className={style.fullScreenContainer2}>
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
                            <div className="cardIconBox">
                                <img
                                    src={isMobile ? item.iconMobile : item.icon} alt="cardButton"
                                    class={isMobile ? item.iconClassMobile : item.iconClass}
                                />
                            </div>
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
                        <img src={listPoint} alt="listPoint" className={style.listPointIcon}/>
                        <p className={style.listItemText}>Уважайте пространство, людей и экспонаты</p>
                    </div>
                    <div className={style.listItem}>
                        <img src={listPoint} alt="listPoint" className={style.listPointIcon}/>
                        <p className={style.listItemText}>Фотосъёмка разрешена, но без нарушения приватности</p>
                    </div>
                    <div className={style.listItem}>
                        <img src={listPoint} alt="listPoint" className={style.listPointIcon}/>
                        <p className={style.listItemText}>Соблюдайте чистоту — используйте урны, возвращайте вещи на место.</p>
                    </div>
                    <div className={style.listItem}>
                        <img src={listPoint} alt="listPoint" className={style.listPointIcon}/>
                        <p className={style.listItemText}>Дети до 14 лет — только с взрослыми, животные — на поводке</p>
                    </div>
                    <div className={style.listItem}>
                        <img src={listPoint} alt="listPoint" className={style.listPointIcon}/>
                        <p className={style.listItemText}>Соблюдайте безопасность — не заходите в закрытые зоны, следуйте инструкциям</p>
                    </div>
                    <div className={style.listItem}>
                        <img src={listPoint} alt="listPoint" className={style.listPointIcon}/>
                        <p className={style.listItemText}>Запрещены курение, алкоголь, агрессия и нарушения порядка</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default MainPage;