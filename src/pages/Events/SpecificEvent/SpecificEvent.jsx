import { useParams } from "react-router-dom";
import { useData } from "../../../routes/DataContext";
import SpecificEventButton from "../../../components/Buttons/ButtonGoToDesktop";
import style from "./SpecificEvent.module.css";
import SlidingRotatingCross from "../../../components/animations/SRCross/SlidingRotatingCross";
import RotatingCross from "../../../components/animations/RotatingCross/RotatingCross";
import { useEffect } from "react";
import NotFound from "../../404/NotFound";
import clsx from "clsx";
import useMediaQuery from "../../../components/Header/useMediaQuery";
import { eventsData } from "../../../data/events";
import { CardsProvider } from "../../../routes/LocationsContext";
function SpecificEvent() {
    const isMobile = useMediaQuery('(max-width: 768px)');
    const { id } = useParams();
    const item = eventsData.find((item) => item.id === Number(id));
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <CardsProvider data={eventsData}>
        <div className={style.specificEvent}>
            {item ? (
            <div className={style.container1}>
                <div className={style.titleContainer}>
                    <div className={style.titleContainerSub1}>
                        <div className={clsx(style.title1, style.title)}>
                            <p>{item.title1}</p>
                        </div>
                        {!isMobile || item.id !== 9 &&
                            <div className={style.animation1}><SlidingRotatingCross/></div>
                        }   
                    </div>
                    <div className={style.titleContainerSub2}>
                        {!isMobile &&
                        <div className={style.animation2}><RotatingCross/></div>
                        }
                        <div className={clsx(style.title2, style.title)}>
                            <p>{item.title2}</p>
                        </div>
                        {isMobile && item.id === 9 &&
                            <div className={style.animation1}><SlidingRotatingCross/></div>
                        } 
                    </div>

                </div>
                <div className={style.mainInfoBlock}>
                    <div className={style.paragraph1}><p>{item.paragraph1}</p></div>
                {isMobile ?
                    <div className={style.datePriceContainer}>
                        <div className={style.dateContainer}>
                            <span className={style.date}>{item.dates}</span>
                            <span className={style.subText}>Период проведения</span>
                        </div>
                        <div className={style.priceContainer}>
                            <span className={style.price}>от {item.price} ₽</span>
                            <span className={style.subText}>Стоимость билета</span>
                        </div>
                    </div>
                    :
                     <div className={style.datePriceContainer}>
                        <div className={style.dateContainer}><span className={style.date}>{item.dates}</span></div>
                        <div className={style.priceContainer}><span className={style.price}>от {item.price} ₽</span></div>
                    </div>
                }
                </div>
                <div className={style.strokeContainer}>
                    <div className={style.strokeElement}><img src={item.inIcon1} alt="icon" className={style.strokeElementIcon}/><p>{item.inText1}</p></div>
                    <div className={style.strokeElement}><img src={item.inIcon2} alt="icon" className={style.strokeElementIcon}/><p>{item.inText2}</p></div>
                    <div className={style.strokeElement}><img src={item.inIcon3} alt="icon" className={style.strokeElementIcon}/><p>{item.inText3}</p></div>
                </div>
                <div className={style.contentContainer}>
                    <div className={style.paragraph2}>
                        <div className={style.paragraph2Text}>
                            <p>{item.paragraph2}</p>
                            <p>{item.paragraph3}</p>
                        </div>
                        <div className={style.btnContainer}><SpecificEventButton text="перейти"/></div>
                    </div>
                    <div className={style.bigPictureContainer}><img src={item.image} alt="pic" className={style.bigPicture}/></div>
                </div>
            </div>
            ) : (
                <NotFound/>
            )}
        </div>
        </CardsProvider>
    );
}

export default SpecificEvent;