import { useParams } from "react-router-dom";
import SpecificEventButton from "../../../components/Buttons/ButtonGoToDesktop";
import style from "./SpecificLocation.module.css";
import SlidingRotatingCross from "../../../components/animations/SRCross/SlidingRotatingCross";
import RotatingCross from "../../../components/animations/RotatingCross/RotatingCross";
import { useEffect } from "react";
import NotFound from "../../404/NotFound";
import clsx from "clsx";
import useMediaQuery from "../../../components/Header/useMediaQuery";
import { restaurants } from "../../../data/restaurants";
import { masterClasses } from "../../../data/masterClasses";
import { excursions } from "../../../data/excursions";
import { useTranslation } from "../../../hooks/useTranslation";
import { useAppContext } from "../../../components/popup/popupContext";
function SpecificLocations() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const { languageState } = useAppContext();
    const t = useTranslation();
    const isMobile = useMediaQuery('(max-width: 768px)');
    const { id, special } = useParams();
    var item = "";
    if (id === "restaurants") {
        item = restaurants.find((item) => item.id === special);
    } else if (id === "masterClasses") {
        item = masterClasses.find((item) => item.id === special);
    } else if (id === "excursions") {
        item = excursions.find((item) => item.id === special);
    } else {
        return <NotFound/>
    }
    const words = t(item.title).split(" ");
    const firstWord = words[0];
    const afterWord = words.slice(1).join(" ")
    
    return (
        <div className={style.specific}>
            {item ? (
            <div className={style.container1}>
                <div className={style.titleContainer}>
                    <div className={style.titleContainerSub1}>
                        <div className={clsx(style.title1, style.title)}>
                            <p>{firstWord}</p>
                        </div>
                        {firstWord !== "АРХИТЕКТУРА" && firstWord !== "ТЮРЕМНАЯ ЖИЗНЬ" && firstWord !== "НАДЗИРАТЕЛИ" && <div className={style.animation1}><SlidingRotatingCross/>
                        
                        </div>}  
                    </div>
                    <div className={style.titleContainerSub2}>
                        {!isMobile && afterWord &&
                        <div className={style.animation2}><RotatingCross/></div>
                        }
                        <div className={clsx(style.title2, style.title)}>
                            <p>{afterWord}</p>
                        </div>
                        {isMobile && item.id === 9 &&
                            <div className={style.animation1}><SlidingRotatingCross/></div>
                        } 
                    </div>

                </div>
                <div className={style.mainInfoBlock}>
                    <div className={style.paragraph1}><p>{t(item.text1)}</p></div>
                {isMobile ?
                    <div className={style.datePriceContainer}>
                        <div className={style.dateContainer}>
                            <span className={style.date}>{t(item.subText2)}</span>
                            <span className={style.subText}>{t(item.subText4)}</span>
                        </div>
                        <div className={style.priceContainer}>
                            <span className={style.price}>{t(item.price1)}</span>
                            <span className={style.subText}>{t(item.subText3)}</span>
                        </div>
                    </div>
                    :
                     <div className={style.datePriceContainer}>
                        <div className={style.dateContainer}><span className={style.date}>{t(item.subText1)} {t(item.subText2)}</span></div>
                        <div className={style.priceContainer}><span className={style.price}>{t(item.price1)}</span></div>
                    </div>
                }
                </div>
                <div className={style.strokeContainer}>
                    {Object.values(item.iconsInside).map((icon, index) => (
                        <div key={index} className={style.strokeElement}><img src={icon} alt="icon" className={style.strokeElementIcon}/>
                            <p>{languageState.language === "ru" ? item.subIconsTextRU[index] : item.subIconsTextEN[index]}</p>
                        </div>
                    ))}
                </div>
                <div className={style.contentContainer}>
                    <div className={style.paragraph2}>
                        <div className={style.paragraph2Text}>
                            <p>{t(item.insideText1)}</p>
                            <p>{t(item.insideText2)}</p>
                        </div>
                        <div className={style.btnContainer}><SpecificEventButton text={t(item.insideBtnText)}/></div>
                    </div>
                    <div className={style.bigPictureContainer}><img src={item.image} alt="pic" className={style.bigPicture}/></div>
                </div>
            </div>
            ) : (
                <p>no data</p>
            )}
        </div>
    );
}

export default SpecificLocations;