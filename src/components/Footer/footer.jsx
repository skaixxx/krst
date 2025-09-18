import style from "./footer.module.css"
import "../general.css"
import footerLogo from "../../assets/footer/footerLogo.svg"
import phoneIcon from "../../assets/footer/phoneIcon.svg"
import locationIcon from "../../assets/footer/locationIcon.svg"
import arrowIcon from "../../assets/footer/arrowBtn.svg"
import dzenIcon from "../../assets/footer/dzenIcon.svg"
import tgIcon from "../../assets/footer/tgIcon.svg"
import vkIcon from "../../assets/footer/vkIcon.svg"
import LanguageSelector from "./LanguageSelector"
import { useRef } from "react"
import { useTranslation } from "../../hooks/useTranslation"
import FooterTranslation from "./Footer.translation.ts"
function Footer() {
    const t = useTranslation(FooterTranslation);
    const caretRef = useRef(null);
    const inputRef = useRef(null);

    const positionCaret  = () => {

        if(!inputRef.current || !caretRef.current) return;

        // Получаем значение 1rem в пикселях
        const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
        const remInPixels = rootFontSize;

        // Получаем позицию курсора
        const caretPosition = inputRef.current.selectionStart;
        
        // Получаем текст до курсора
        const textBeforeCaret = inputRef.current.value.substring(0, caretPosition);

        // Создаем временный span для измерения ширины текста
        const tempSpan = document.createElement('span');

        tempSpan.style.visibility = 'hidden';
        tempSpan.style.whiteSpace = 'pre';

        tempSpan.style.fontSize = window.getComputedStyle(inputRef.current).fontSize;
        tempSpan.style.fontFamily = window.getComputedStyle(inputRef.current).fontFamily;

        tempSpan.textContent = textBeforeCaret;

        document.body.appendChild(tempSpan);
        const width = tempSpan.getBoundingClientRect().width;
        document.body.removeChild(tempSpan);
        
        // Автоматическая прокрутка input при достижении границы
        const inputWidth = inputRef.current.clientWidth - remInPixels * 1.1;
        const scrollLeft = width - inputWidth

        if (scrollLeft > 0) 
        {
            inputRef.current.scrollLeft = scrollLeft;
        } else {
            inputRef.current.scrollLeft = 0;
            caretRef.current.style.left = `calc(1rem + ${width}px)`;
        }
    }

    return (
        <footer className={style.footer}>
        <div className={style.footerGrid}>
            <div className={style.gridCol1}>
                <div className={style.logoContainer}><a href="/" className="footer-logo-link"><img src={footerLogo} alt="footerLogo" className="footer-logo"></img></a></div>
                <div className={style.rounds}>
                    <div className={style.roundStroke1}>
                        <div className={style.roundElement}>
                            <p className={style.roundElementText}>{t("hashtag1Text")}</p>
                        </div>
                    </div>
                    <div className={style.roundStroke2}>
                        <div className={style.roundElement}>
                            <p className={style.roundElementText}>{t("hashtag2Text")}</p>
                        </div>
                        <div className={style.roundElement}>
                            <p className={style.roundElementText}>{t("hashtag3Text")}</p>
                        </div>
                    </div>
                    <div className={style.roundStroke3}>
                        <div className={style.roundElement}>
                            <p className={style.roundElementText}>{t("hashtag4Text")}</p>
                        </div>
                        <div className={style.roundElement}>
                            <p className={style.roundElementText}>{t("hashtag5Text")}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.gridCol2}>
                <div className={style.mailingText}>
                    <p className={style.mailingTitle}>{t("submitMailingText")}</p>
                    <p className={style.mailingParagraph}>{t("aboutMailingText")}</p>
                </div>
                <div className={style.mailInputContainer}>
                    <input
                        ref={inputRef}
                        placeholder={t("inputEmailText")}
                        className={style.inputEmail}
                        onChange={positionCaret}
                        onSelect={positionCaret}
                    />
                    <div
                        ref={caretRef}
                        className={style.customCaret}
                    />
                    <button className={style.sendEmailButton}><img className={style.sendEmailArrowPic} src={arrowIcon} alt="arrow"></img></button>
                </div>
                <div className={style.contactsInfo}>
                    <div className={style.phoneAdress}>
                        <div className={style.phone}><img src={phoneIcon} alt="phone"></img><p>8 800 000-00-00</p></div>
                        <div className={style.adress}><img src={locationIcon} alt="location"></img><p>{t("adressText")}</p></div>
                    </div>
                    <div className={style.workDays}><p className={style.schedule}>{t("workScheduleText")}</p><div className={style.daysTimeContainer}><p className={style.days}>{t("daysText")}</p><p className={style.time}>10:00–22:00</p></div></div>
                </div>
            </div>
            <div className={style.gridCol3}>
                <LanguageSelector/>
                <div className={style.socualsPoliticoContainer}>
                    <div className={style.socials}>
                        <a href="https://dzen.ru" target="_blank" rel="noreferrer" className={style.linkDzen}><img src={dzenIcon} alt="dzen" className={style.dzenLogo}></img></a>
                        <a href="https://telegram.org" target="_blank" rel="noreferrer" className={style.linkTg}><img src={tgIcon} alt="tg" className={style.tgLogo}></img></a>
                        <a href="https://vk.com" target="_blank" rel="noreferrer" className={style.linkVk}><img src={vkIcon} alt="vk" className={style.vkLogo}></img></a>
                    </div>
                    <div className={style.politico}>
                        <a href="/" className={style.politicoLink}>
                            <p className={style.politicoText}>{t("politicoText")}</p>
                        </a>
                        <p className={style.copyrihgtText}>{t("allRightText")}</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    );
};
export default Footer;
