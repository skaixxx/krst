import { Link } from "react-router-dom";
import style from "./rent.module.css"
import ScaleSlideBrackets from "../../components/animations/ScaleSlideBracketsToRight/ScaleSlideBracketsToRight"
import { useTranslation } from "../../hooks/useTranslation";
import RentTranslation from "./Rent.translation";
import TextSlicer from "../../components/TextSlicer/TextSlicer";
function Rent() {
    const t = useTranslation(RentTranslation);

    return (
        <div className={style.rentPage}>
            <div className={style.rentPageContainer}>
                <h1 className={style.rentPageTitle}>
                    <div className={style.titleRow1}>
                        <p className={style.titleText1}>{t("titleText1")}</p>
                        <div className={style.rentPageTitleIconMobile}>
                            <ScaleSlideBrackets/>
                        </div>
                        
                        <div className={style.rentPageTitleIcon}>
                            <ScaleSlideBrackets/>
                        </div>
                    </div>
                    <span>{t("titleText2")}</span>
                </h1>

                <div className={style.rentPageBlock}>
                    <img className={style.rentPageBlockImg} src={`${process.env.PUBLIC_URL}/images/rent/1.jpg`} alt="" />
                    <div className={style.rentPageBlockRow}>
                        <div className={style.rentPageBlockItem}>
                            <h3 className={style.rentPageBlockItemTitle}>{t("hashtag1")}</h3>
                            <p className={style.rentPageBlockItemText}>{t("hashtag1Text")}</p>
                        </div>
                        <div className={style.rentPageBlockItem}>
                            <h3 className={style.rentPageBlockItemTitle}>{t("hashtag2")}</h3>
                            <p className={style.rentPageBlockItemText}>{t("hashtag2Text")}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.specificEventStrokeContainer}>
                <div className={style.specificEventStrokeElement}>
                    <span className={style.specificEventStrokeTerm}>4,17</span>
                    <TextSlicer text={t("squareText")} ratios={[0.33, 0.67]}/>
                </div>
                <div className={style.specificEventStrokeElement}>
                    <span className={style.specificEventStrokeTerm}>50</span>
                    <TextSlicer text={t("apCountsText")} ratios={[0.33, 0.67]}/>
                </div>
                <div className={style.specificEventStrokeElement}>
                    <span className={style.specificEventStrokeTerm}>16</span>
                    <TextSlicer text={t("buildCountsText")} ratios={[0.33, 0.67]}/>
                </div>
            </div>

            <div className={`${style.rentPageContainer} ${style.cardsContainer}`}>
                <div className={style.cards}>
                    <Link className={style.card} to="/Rent/1">
                        <div className={style.cardImage}>
                            <img src={`${process.env.PUBLIC_URL}/images/rent/photo-1.png`} alt="" />
                        </div>
                        <div className={style.cardContent}>
                            <div className={style.cardHeader}>
                                <div className={style.cardNumber}>1</div>
                                <div className={style.cardTitle}>{t("culinaryBuilding")}</div>
                            </div>
                            <div className={style.cardArea}>
                                <div className={style.cardAreaInner}>
                                   <span>{t("totalArea")}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link className={style.card} to="/Rent/2">
                        <div className={style.cardImage}>
                            <img src={`${process.env.PUBLIC_URL}/images/rent/photo-2.png`} alt="" />
                        </div>
                        <div className={style.cardContent}>
                            <div className={style.cardHeader}>
                                <div className={style.cardNumber}>2</div>
                                <div className={style.cardTitle}>{t("творческий центр")}</div>
                            </div>
                            <div className={style.cardArea}>
                                <div className={style.cardAreaInner}>
                                   <span>{t("totalArea2")}</span></div>
                                </div>
                        </div>
                    </Link>
                    <Link className={style.card} to="/Rent/3">
                        <div className={style.cardImage}>
                            <img src={`${process.env.PUBLIC_URL}/images/rent/photo-3.png`} alt="" />
                        </div>
                        <div className={style.cardContent}>
                            <div className={style.cardHeader}>
                                <div className={style.cardNumber}>3</div>
                                <div className={style.cardTitle}>{t("moveArea")}</div>
                            </div>
                            <div className={style.cardArea}>
                                <div className={style.cardAreaInner}>
                                    <span>{t("totalArea3")}</span></div>
                                </div>
                        </div>
                    </Link>
                    <Link className={style.card} to="/Rent/4">
                        <div className={style.cardImage}>
                            <img src={`${process.env.PUBLIC_URL}/images/rent/photo-4.png`} alt="" />
                        </div>
                        <div className={style.cardContent}>
                            <div className={style.cardHeader}>
                                <div className={style.cardNumber}>4</div>
                                <div className={style.cardTitle}>{t("developmentCenter")}</div>
                            </div>
                            <div className={style.cardArea}>
                                <div className={style.cardAreaInner}>
                                    <span>{t("totalArea4")}</span></div>
                                </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default Rent;