import { useParams } from "react-router-dom";
import SpecificEventButton from "../../../components/Buttons/ButtonGoToDesktop";
import style from "./SpecificLocation.module.css";
import SlidingRotatingCross from "../../../components/animations/SRCross/SlidingRotatingCross";
import RotatingCross from "../../../components/animations/RotatingCross/RotatingCross";
import { useEffect } from "react";
import NotFound from "../../404/NotFound";
import clsx from "clsx";
import useMediaQuery from "../../../components/Header/useMediaQuery";
import { restraunts } from "../../../data/Restraunts";
import { masterClasses } from "../../../data/masterClasses";
import { excursions } from "../../../data/excursions";
function SpecificLocations() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const isMobile = useMediaQuery('(max-width: 768px)');
    const { id, special } = useParams();
    console.log("start id ", id)
    var item = "";
    if (id === "restraunts") {
        item = restraunts.find((item) => item.id === special);
        console.log(id)
    } else if (id === "masterClasses") {
        item = masterClasses.find((item) => item.id === special);
        console.log(id)
    } else if (id === "excursions") {
        item = excursions.find((item) => item.id === special);
        console.log(id)
    } else {
        return <NotFound/>
    }
    return (
        <div className={style.specific}>
            {item ? (
            <div className={style.container1}>
                <div className={style.titleContainer}>
                    <div className={style.titleContainerSub1}>
                        <div className={clsx(style.title1, style.title)}>
                            <p>{item.title}</p>
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
                    <div className={style.paragraph1}><p>{item.text1}</p></div>
                {isMobile ?
                    <div className={style.datePriceContainer}>
                        <div className={style.dateContainer}>
                            <span className={style.date}>{item.subText2}</span>
                            <span className={style.subText}>{item.subText4}</span>
                        </div>
                        <div className={style.priceContainer}>
                            <span className={style.price}>{item.price1}</span>
                            <span className={style.subText}>{item.subText3}</span>
                        </div>
                    </div>
                    :
                     <div className={style.datePriceContainer}>
                        <div className={style.dateContainer}><span className={style.date}>{item.subText1} {item.subText2}</span></div>
                        <div className={style.priceContainer}><span className={style.price}>{item.price1}</span></div>
                    </div>
                }
                </div>
                <div className={style.strokeContainer}>
                    {[...Object.values(item.iconsInside || {}),
                    ...Object.values(item.subIconsText || {}),
                    ]
                    .filter(Boolean)
                    .map((item, index) => (
                        <div key={index} className={style.strokeElement}>{<img src={item} alt="icon" className={style.strokeElementIcon}/>}<p>{item}</p></div>
                    ))}
                </div>
                <div className={style.contentContainer}>
                    <div className={style.paragraph2}>
                        <div className={style.paragraph2Text}>
                            <p>{item.insideText1}</p>
                            <p>{item.insideText2}</p>
                        </div>
                        <div className={style.btnContainer}><SpecificEventButton text="перейти"/></div>
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