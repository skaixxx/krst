import style from "./history.module.css";
import tomishko from "../../assets/history/tomishko.png";
import y1892 from "../../assets/history/1892.png"
import y1905 from "../../assets/history/1905.png"
import y1917 from "../../assets/history/1917.png"
import y1937 from "../../assets/history/1937.png"
import y1941 from "../../assets/history/1941.png"
import y1958 from "../../assets/history/1958.png"
import y1990 from "../../assets/history/1990.png"
import y2006 from "../../assets/history/2006.png"
import y2017 from "../../assets/history/2017.png"
import y2025 from "../../assets/history/2025.png"
import historyArrowsIcon from "../../assets/history/arrowsHistory.png"
import titleIcon from "../../assets/history/historytitle.png"
import ScaleSlideBrackets from "../../components/animations/ScaleSlideBrackets/ScaleSlideBrackets"
import FamousCards from "../../components/History/PersonCards";
import RotatingCross from "../../components/animations/RotatingCross/RotatingCross";
import { useEffect, useState } from "react";
import Carousel from "../../components/History/HistoryCarousel";
import ScaleSlideDotsInverted from "../../components/animations/ScaleSlideDots/ScaleSlideDotsInverted";
import useMediaQuery from "../../components/Header/useMediaQuery";
import ScaleCrossSlideBracketInverted from "../../components/animations/ScaleCrossSlideBracket_inverted/ScaleCrossSlideBracket_inverted";
import ScrollToTopBtn from "../../components/History/ScrollToTop";
import HistoryTranslate from "./History.translate";
import { useTranslation } from "../../hooks/useTranslation";
import { useAppContext } from "../../components/popup/popupContext";
function History() {
    const t = useTranslation(HistoryTranslate);
    const { languageState } = useAppContext();
    const isMobile = useMediaQuery('(max-width: 768px)');
    const [itemsRU, setItemsRU] = useState([]);
    const [itemsEN, setItemsEN] = useState([]);
    const [data1RU, setData1RU] = useState({ 
        desktopSize: {
            width: "", 
            height: ""
        }, 
        items: [] 
    });
    const [data1EN, setData1EN] = useState({ 
        desktopSize: {
            width: "", 
            height: ""
        }, 
        items: [] 
    });
    const [data2RU, setData2RU] = useState({
        desktopSize: {
            width: "", 
            height: ""
        }, 
        items: [] 
    });
    const [data2EN, setData2EN] = useState({
        desktopSize: {
            width: "", 
            height: ""
        }, 
        items: [] 
    });
     
    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/data/history/ru_carouselData.json`)
        .then((res) => {
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
        })
        .then(setItemsRU)
        .catch((err) => {
            console.error('ошибка загрузки данных', err);
        })
        fetch(`${process.env.PUBLIC_URL}/data/history/en_carouselData.json`)
        .then((res) => {
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
        })
        .then(setItemsEN)
        .catch((err) => {
            console.error('ошибка загрузки данных', err);
        })
        fetch(`${process.env.PUBLIC_URL}/data/history/ru_famousPeople.json`)
        .then((res) => {
            if (!res.ok) {
                throw new Error(`Fetch data error: ${res.status}`);
            }
            return res.json()
        })
        .then(setData1RU)
        .catch((err) => {
            console.error('ошибка загрузки данных', err);
        })
        fetch(`${process.env.PUBLIC_URL}/data/history/en_famousPeople.json`)
        .then((res) => {
            if (!res.ok) {
                throw new Error(`Fetch data error: ${res.status}`);
            }
            return res.json()
        })
        .then(setData1EN)
        .catch((err) => {
            console.error('ошибка загрузки данных', err);
        })
        fetch(`${process.env.PUBLIC_URL}/data/history/ru_dangerousPeople.json`)
        .then((res) => {
            if (!res.ok) {
                throw new Error(`Fetch data error: ${res.status}`);
            }
            return res.json()
        })
        .then(setData2RU)
        .catch((err) => {
            console.error('ошибка загрузки данных', err);
        })
        fetch(`${process.env.PUBLIC_URL}/data/history/en_dangerousPeople.json`)
        .then((res) => {
            if (!res.ok) {
                throw new Error(`Fetch data error: ${res.status}`);
            }
            return res.json()
        })
        .then(setData2EN)
        .catch((err) => {
            console.error('ошибка загрузки данных', err);
        })
    }, [])
    return (
        <div className={style.historyPage}>
            <div className={style.fullScreenContainer1} id="triggerForScrollBtn">
                <div className={style.pageTitle}>
                        <p className={style.titleText1}>{t("titleText1")}</p>
                </div>
                <div className={style.dateContainer}>
                    <div className={style.dateContainerRow1}><p className={style.dateContainerRowText}>1884–</p></div>
                    <div className={style.dateContainerRow2}><p className={style.dateContainerRowText}>2025</p></div>
                </div>
            </div>
            <div className={style.topRow}><div className={style.topRow1}><img src={titleIcon} alt="titleIcon" className={style.titleIcon}/><p className={style.titleText2}>{t("titleText2")}</p></div></div>
            <div className={style.interactiveLine}>
                <Carousel items={languageState.language === "ru" ? itemsRU : itemsEN} />
                <div className={style.interactiveLineProgressBar}></div>      
            </div>
            <div className={style.fullScreenContainer2}>
                <div className={style.wideContainer1}>
                    <div className={style.wideContainer1Col1}>
                        <p className={style.wideContainer1Title}>
                            {t("container1Title")}
                        </p>
                        <div className={style.wideContainerTextBox}>
                            <p className={style.wideContainerText}>
                                 {t("container1Text1")}
                            </p>
                            <p className={style.wideContainerText}>
                                {t("container1Text2")}
                            </p>
                            <p className={style.wideContainerText}>
                                {t("container1Text3")}
                            </p>
                        </div>
                    </div>
                    <div className={style.wideContainer1Col2}>
                        <img src={tomishko} alt="tomishko" className={style.imageTomishko}/>
                    </div>
                    
                </div>
                <ScrollToTopBtn triggerID="triggerForScrollBtn"/>
                <div className={style.container1892} id="y1892">
                    <div className={style.container1892Row1}>
                        <div className={style.container1892Row1Col1}>
                            <p className={`${style.container1892Title} ${style.wideContainerTitle}`}>
                            1892 —
                            </p>
                            <div className={style.container1892Animation}>
                                <ScaleSlideBrackets/>
                            </div>
                        </div>
                        <div className={style.container1892Row1Col2}> 
                            <img src={y1892} alt="1892" className={style.image1892}/>
                        </div>
                    </div>
                    <div className={style.container1892Row2}>
                            <p>
                               {t("c1892Text1")}
                            </p>
                            <p>
                               {t("c1892Text2")}
                            </p>
                    </div>
                </div>
                <div className={style.container1905} id="y1905">
                    <div className={style.container1905Row1}>
                        <div className={style.container1905Row1Col1}>
                            <img src={y1905} alt="1905" className={style.image1905}/>
                        </div>
                        <div className={style.container1905Row1Col2}>
                            <p className={`${style.container1905Title} ${style.wideContainerTitle}`}>
                            — 1905
                            </p>
                        </div>
                    </div>
                    <div className={style.container1905Row2}>
                        
                        <p className={style.container1905Text}>
                            {t("c1905Text1")}
                        </p>
                    </div>
                    
                </div>
                <div className={style.container1917} id="y1917">
                    <div className={style.container1917Col1}>
                        <p className={`${style.container1917Title} ${style.wideContainerTitle}`}>
                        1917 —
                        </p>
                    </div>
                    <div className={style.container1917Col2}>
                        <p className={style.paragraph1917}>
                            {t("c1917Text1")}
                        </p>
                    </div>
                    <div className={style.container1917Row2}>
                        <img src={y1917} alt="1917" className={style.image1917}/>
                    </div>
                </div>
                <div className={style.container1937} id="y1937">
                    <div className={style.container1937Col1}>
                        <div className={style.container1937Col1Row1}>
                            <div className={style.container1937Animation}><ScaleSlideDotsInverted/></div>
                            <p className={`${style.container1937Title} ${style.wideContainerTitle}`}>
                            1937 — 
                            </p>
                            <p className={`${style.container1937Title} ${style.wideContainerTitle}`}>1938</p>
                        </div>
                        <div className={style.container1937Col1Row2}>
                            <p>
                                {t("c1937Text1")}
                            </p>
                            <p>
                                {t("c1937Text2")}
                            </p>
                        </div>
                    </div>
                    <div className={style.container1937Col2}>
                        <img src={y1937} alt="1937" className={style.image1937}/>
                    </div>
                </div>
                <div className={style.container1941} id="y1941">
                    <div className={style.container1941Col1}>
                        <img src={y1941} alt="1941" className={style.image1941}/>
                    </div>
                    <div className={style.container1941Col2}>
                        
                        <div className={style.container1941Col2Row1}>
                            <div className={style.container1941Col2Row1Box1}>
                                <p className={`${style.container1941Title1} ${style.wideContainerTitle}`}>
                                1941
                                </p>
                            </div>
                            <p className={`${style.container1941Title2} ${style.wideContainerTitle}`}>
                            — 1944
                            </p>
                        </div>
                        <div className={style.container1941Col2Row2}>
                        <p>
                            {t("c1941Text1")}
                        </p>
                        <p>
                           {t("c1941Text2")} 
                        </p>
                        </div>
                    </div>
                    
                </div>
                <div className={style.container1958} id="y1958">
                    <div className={style.container1958Col1}>
                        <div className={style.container1958Col1Row1}>
                            <p className={`${style.container1958Title} ${style.wideContainerTitle}`}>
                            1958 — 1960
                            </p>
                        </div>
                        <div className={style.container1958Col1Row2}>
                            <p className={style.container1958Text}>
                                {t("c1958Text1")}
                            </p>
                        </div>
                    </div>
                    <div className={style.container1958Col2}>
                        <img src={y1958} alt="1958" className={style.image1958}/>
                    </div>
                </div>
                <div className={style.container1990} id="y1990">
                    <div className={style.container1990Col1}>
                        <img src={y1990} alt="1990" className={style.image1990}/>
                    </div>
                    <div className={style.container1990Col2}>
                        <div className={style.container1990Col2Row1}>
                            <p className={`${style.container1990Title} ${style.wideContainerTitle}`}>
                            90 — Е
                            </p>
                        </div>
                        <div className={style.container1990Col2Row2}>
                            <p>
                               {t("c1990Text1")}
                            </p>
                            <p>
                                {t("c1990Text2")}
                            </p>
                        </div>
                    </div>    
                </div>
                <div className={style.container2006} id="y2006">
                    <div className={style.container2006Col1}>
                        <div className={style.container2006Col1Row1}>
                            {isMobile? 
                            <p className={`${style.container2006Title} ${style.wideContainerTitle}`}>
                            2006
                            </p>
                            :
                            <p className={`${style.container2006Title} ${style.wideContainerTitle}`}>
                            2006 —
                            </p>
                            }
                        </div>
                         <div className={style.container2006Col1Row2}>
                            <p>
                                {t("c2006Text1")}
                            </p>
                        </div>
                    </div>
                    <div className={style.container2006Col2}>
                        <img src={y2006} alt="2006" className={style.image2006}/>
                    </div>    
                </div>
                <div className={style.container2017} id="y2017">
                    <div className={style.container2017Col1}>
                        <div className={style.container2017Col1Row1}>
                            <p className={`${style.container2017Title} ${style.wideContainerTitle}`}>
                            2017 —
                            </p>
                        </div>
                        <div className={style.container2017Col1Row2}>
                            <p className={style.paragraph2017}>
                                {t("c2017Text1")}
                            </p>
                        </div>
                    </div>
                    <div className={style.container2017Col2}>
                        <img src={y2017} alt="2017" className={style.image2017}/>
                    </div>    
                </div>
                <div className={style.container2025} id="y2025">
                    <div className={style.container2025Col1}>
                        <img src={y2025} alt="2025" className={style.image2025}/>
                    </div>
                    <div className={style.container2025Col2}>
                        <div className={style.container2025Col2Row1}>
                            <p className={`${style.container2025Title} ${style.wideContainerTitle}`}>
                            — 2025
                            </p>
                            <img src={historyArrowsIcon} alt="arrows" className={style.container2025Anim}/>
                        </div>
                        <div className={style.container2025Col2Row2}>
                            <p className={style.paragraph2025}>
                                {t("c2025Text1")}
                            </p>
                        </div>
                    </div>
                </div>
                <div className={style.containerAboutPeople}>
                    <div className={style.famousPeopleBlock}>
                        <div className={style.famousPeopleBlockTitle}>
                            <p className={style.famousPeopleBlockTitleText1}>{t("famousTitle1")}</p>
                            <div className={style.famousPeopleBlockTitleSub}>
                                <div className={style.famousPeopleBlockTitleSubAnimation}><RotatingCross/></div>
                                <p className={style.famousPeopleBlockTitleText2}>{t("famousTitle2")}</p>
                            </div>
                        </div>
                        <FamousCards data={languageState.language === "ru" ? data1RU : data1EN}/>
                    </div>
                    <div className={style.containerDangerousPeople}>
                        <div className={style.dangerousPeopleBlockTitle}>
                            <p className={style.dangerousPeopleBlockTitleText1}>{t("dangerousTitle1")}</p>
                            <div className={style.dangerousPeopleBlockTitleSub}>
                                <p className={style.dangerousPeopleBlockTitleText2}>{t("dangerousTitle2")}</p>
                                <div className={style.dangerousPeopleBlockTitleSubAnimation}><ScaleCrossSlideBracketInverted/></div>
                            </div>
                        </div>
                        <FamousCards data={languageState.language === "ru" ? data2RU : data2EN}/>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
export default History;