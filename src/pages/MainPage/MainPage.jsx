import style from "./mainPage.module.css"
import weatherIcon from "../../assets/mainPage/weather.svg"
import peopleIcon from "../../assets/mainPage/people.svg"
import timeIcon from "../../assets/mainPage/time.svg"
import mapImage from "../../assets/mainPage/map.png"
import arrowBR from "../../assets/mainPage/arrowsBR.svg"
import listPoint from "../../assets/mainPage/listPoint.svg"
import SlidingRotatingCross from "../../components/animations/SRCross/SlidingRotatingCross"
import { eventsData } from "../../data/events"
import { useNavigate } from "react-router"
import useMediaQuery from "../../components/Header/useMediaQuery"
import { useEffect, useRef } from 'react';

import lottie from "lottie-web";
import AnimationData from '../../assets/animation/main/mainAnimationData.json';
import { useTranslation } from "../../hooks/useTranslation"
import MainPageTranslation from "./MainPage.translations.ts"
function MainPage() {
    const t = useTranslation(MainPageTranslation);
    const containerRef = useRef(null);
    const animationRef = useRef(null);

    const navigate = useNavigate();
    const isMobile = useMediaQuery('(max-width: 768px)');

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
                        <p className={style.titleText1}>{t("titleText1")}</p>
                </div>
            </div>
            <div className={style.topRow}><div className={style.topRow1}><p className={style.titleText2}>{t("titleText2")}</p></div></div>
            <div ref={containerRef} className={style.fullScreenContainer2}>
            </div>
            <div className={style.interactiveLine}>
                <div className={style.iLineElements}>
                    <div className={style.iLineElement}>
                        <img src={weatherIcon} alt="weatherIcon" className={style.weatherIcon}/>
                        <div className={style.iLineTextBlock}>
                            <p className={style.titleInfo}>4°C</p>
                            <p className={style.subText}>{t("weatherText")}</p>
                        </div>
                    </div>
                    <div className={style.iLineElement}>
                        <img src={peopleIcon} alt="peopleIcon" className={style.peopleIcon}/>
                        <div className={style.iLineTextBlock}>
                            <p className={style.titleInfo}>30%</p>
                            
                            <div className={style.statusInfo}><div className={style.freeIndicator}></div><p className={style.subText}>{t("workloadText")}</p></div>
                        </div>
                    </div>
                    <div className={style.iLineElement}>
                        <img src={timeIcon} alt="timeIcon" className={style.timeIcon}/>
                        <div className={style.iLineTextBlock}>
                            <p className={style.titleInfo}>{t("dateText")}</p>
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
                    <div className="cardEvent" key={item.id} onClick={() => handleClick(item.id)}>
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
                    </div>
                </div>
                ))}
                <div className={style.animationContainer}>
                    <SlidingRotatingCross/>
                </div>
                <p className={style.anonsText}>{t("announcement")}</p>
            </div>
            <div className={style.mapContainer}>
                <img src={mapImage} alt="map" className={style.mapImage}/>
            </div>
            <div className={style.rulesContainer}>
                <div className={style.rulesTitleRow}>
                    <div className={style.rulesStroke1}>
                        <p className={style.rulesStroke1Text}>{t("rulesTitle1")}</p>
                        <img src={arrowBR} alt="arrows" className={style.rulesStrokeAnimation}/>
                    </div>
                    <div className={style.rulesStroke2}>
                        <p className={style.rulesStroke2Text}>
                            {t("rulesTitle2")}
                        </p>
                    </div>
                </div>
                <div className={style.listContainer}>
                    <div className={style.listItem}>
                        <img src={listPoint} alt="listPoint" className={style.listPointIcon}/>
                        <p className={style.listItemText}>{t("rulesText1")}</p>
                    </div>
                    <div className={style.listItem}>
                        <img src={listPoint} alt="listPoint" className={style.listPointIcon}/>
                        <p className={style.listItemText}>{t("rulesText2")}</p>
                    </div>
                    <div className={style.listItem}>
                        <img src={listPoint} alt="listPoint" className={style.listPointIcon}/>
                        <p className={style.listItemText}>{t("rulesText3")}</p>
                    </div>
                    <div className={style.listItem}>
                        <img src={listPoint} alt="listPoint" className={style.listPointIcon}/>
                        <p className={style.listItemText}>{t("rulesText4")}</p>
                    </div>
                    <div className={style.listItem}>
                        <img src={listPoint} alt="listPoint" className={style.listPointIcon}/>
                        <p className={style.listItemText}>{t("rulesText5")}</p>
                    </div>
                    <div className={style.listItem}>
                        <img src={listPoint} alt="listPoint" className={style.listPointIcon}/>
                        <p className={style.listItemText}>{t("rulesText6")}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default MainPage;