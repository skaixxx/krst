import calendarIcon from "../../assets/residence/calendar.svg"
import phoneIcon from "../../assets/residence/phoneIcon.svg"
import profileIcon from "../../assets/residence/profileIcon.svg"
import emailIcon from "../../assets/residence/letterIcon.svg"
import style from "./residence.module.css"
import "../../components/general.css"
import ButtonGoToDesktop from "../../components/Buttons/ButtonGoToDesktop";
import ScaleCrossSlideBracketInverted from "../../components/animations/ScaleCrossSlideBracket_inverted/ScaleCrossSlideBracket_inverted";
import useMediaQuery from "../../components/Header/useMediaQuery"
import { useNavigate } from "react-router"
import { useAppContext } from "../../components/popup/popupContext"
import { useState } from "react"
import clsx from "clsx"
import { useTranslation } from "../../hooks/useTranslation"
import ResidenceTranslate from "./Residence.translate"
function Residence() {
    const t = useTranslation(ResidenceTranslate);
    const navigate = useNavigate();
    const { popup } = useAppContext();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [birthday, setBirthday] = useState("");
    const isMobile = useMediaQuery('(max-width: 768px)');
    const handleSubmit = () => {
        if (!name || !email || !phone || !birthday) {
            popup.openPopup(
                <p>Пожалуйста, заполните все поля!</p>
            )
            return;
        }
        popup.openPopup(
            <p>Успешно отправлено!</p>
        )
    }
    const inputFocus = (current) => {
        current.target.placeholder = '';
    };
    const inputBlur = (current) => {
        if (current.target.value === '') {
            current.target.placeholder = current.target.dataset.placeholder || '';
        } 
    };
    return (
        <div className={style.gridContainer}>
            <div className={style.titleContainer}>
                <div className={style.titleBox1}>
                    <div className={clsx(style.pageTitle, style.pageTitle1)}>
                        {isMobile ?
                        <p>{t("titleTextMobile")}</p>
                        :
                        <p>{t("titleTextDesktop1")}</p>
                        }
                    </div>
                    <div className={clsx(style.pageTitle, style.pageTitle2)}>
                        <p>{t("titleTextDesktop2")}</p>
                    </div>
                    <div className={clsx(style.pageTitle, style.pageTitle3)}>
                        <p>{t("titleTextDesktop3")}</p>
                    </div>
                </div>
                <div className={style.titleBox2}>
                    <div className={style.icon}><ScaleCrossSlideBracketInverted/></div>
                    <div className={style.sameText}>
                        <p>{t("titleParagraph")}</p>
                    </div>
                    <div className={style.buttonGoContainer}><ButtonGoToDesktop text="перейти" action={() => navigate("/Rent")}/></div>
                </div>
            </div>
            <div className={style.paragraphs}>
                <div className={style.paragraph1}>
                    <p className={style.paragraphTitle}>{t("hashtag1Title")}</p>
                    <p className={style.paragraphText}>
                        {t("hashtag1Text")}
                    </p>
                </div>
                <div className={style.paragraph2}>
                    <p className={style.paragraphTitle}>{t("hashtag2Title")}</p>
                    <p className={style.paragraphText}>
                        {t("hashtag2Text")}
                    </p>
                </div>
            </div>
            <div className={style.rollingStrokeContainer}>
                <div className={style.rollingStroke1}>
                    <div className={style.rollingTicker}>
                        <div className={style.rolElement}><span>NIGHTLY</span></div>
                        <div className={style.rolElement}><span>GK</span></div>
                        <div className={style.rolElement}><span>БУШЕ</span></div>
                        <div className={style.rolElement}><span>GREENX</span></div>
                        <div className={style.rolElement}><span>ASIAN D</span></div>
                        <div className={style.rolElement}><span>SURF COFFEE</span></div>
                        <div className={style.rolElement}><span>FRANK</span></div>
                        <div className={style.rolElement}><span>VEGI</span></div>
                        <div className={style.rolElement}><span>ПОЙМАЙ МОМЕНТ</span></div>
                        <div className={style.rolElement}><span>DEFAULT</span></div>
                        <div className={style.rolElement}><span>ITALIANI</span></div>
                        <div className={style.rolElement}><span>MAMA ROMA</span></div>
                    </div>
                    <div className={style.rollingTicker}>
                        <div className={style.rolElement}><span>NIGHTLY</span></div>
                        <div className={style.rolElement}><span>GK</span></div>
                        <div className={style.rolElement}><span>БУШЕ</span></div>
                        <div className={style.rolElement}><span>GREENX</span></div>
                        <div className={style.rolElement}><span>ASIAN D</span></div>
                        <div className={style.rolElement}><span>SURF COFFEE</span></div>
                        <div className={style.rolElement}><span>FRANK</span></div>
                        <div className={style.rolElement}><span>VEGI</span></div>
                        <div className={style.rolElement}><span>ПОЙМАЙ МОМЕНТ</span></div>
                        <div className={style.rolElement}><span>DEFAULT</span></div>
                        <div className={style.rolElement}><span>ITALIANI</span></div>
                        <div className={style.rolElement}><span>MAMA ROMA</span></div>
                    </div>
                </div>
            <div className={style.rollingStroke2}>
                    <div className={style.rollingTicker}>
                        <div className={style.rolElement}><span>NIGHTLY</span></div>
                        <div className={style.rolElement}><span>GK</span></div>
                        <div className={style.rolElement}><span>БУШЕ</span></div>
                        <div className={style.rolElement}><span>GREENX</span></div>
                        <div className={style.rolElement}><span>ASIAN D</span></div>
                        <div className={style.rolElement}><span>SURF COFFEE</span></div>
                        <div className={style.rolElement}><span>FRANK</span></div>
                        <div className={style.rolElement}><span>VEGI</span></div>
                        <div className={style.rolElement}><span>ПОЙМАЙ МОМЕНТ</span></div>
                        <div className={style.rolElement}><span>DEFAULT</span></div>
                        <div className={style.rolElement}><span>ITALIANI</span></div>
                        <div className={style.rolElement}><span>MAMA ROMA</span></div>
                    </div>
                    <div className={style.rollingTicker}>
                        <div className={style.rolElement}><span>NIGHTLY</span></div>
                        <div className={style.rolElement}><span>GK</span></div>
                        <div className={style.rolElement}><span>БУШЕ</span></div>
                        <div className={style.rolElement}><span>GREENX</span></div>
                        <div className={style.rolElement}><span>ASIAN D</span></div>
                        <div className={style.rolElement}><span>SURF COFFEE</span></div>
                        <div className={style.rolElement}><span>FRANK</span></div>
                        <div className={style.rolElement}><span>VEGI</span></div>
                        <div className={style.rolElement}><span>ПОЙМАЙ МОМЕНТ</span></div>
                        <div className={style.rolElement}><span>DEFAULT</span></div>
                        <div className={style.rolElement}><span>ITALIANOO</span></div>
                        <div className={style.rolElement}><span>MAMA ROMA</span></div>
                    </div>
            </div>
            </div>
            <div className={style.bidSection}>
                <div className={style.bidCol1}>
                    {isMobile?
                        <div className={style.bidText}>
                            <p className={style.bidDefaultText}>{t("bidText1")}</p>
                            <p className={style.bidAccentText}>{t("bidAccent1")}</p>
                        </div>
                        :
                        <div className={style.bidText}>
                            <p className={style.bidDefaultText}>{t("bidText2")}</p>
                            <p className={style.bidAccentText}>{t("bidAccent2")}</p>
                        </div> 
                    }
                    
                    <div className={style.bidForm}>
                        <div className={clsx(style.formName, style.resForm)}><input className={style.inputR} value={name} onChange={(e) => setName(e.target.value)} type="name" id="name" placeholder={t("namePlaceholder")} data-placeholder={t("namePlaceholder")} onFocus={inputFocus} onBlur={inputBlur}/><img className={style.profileIcon} src={profileIcon} alt="profile"/></div>
                        <div className={clsx(style.formBirthday, style.resForm)}><input className={style.inputR} value={birthday} onChange={(e) => setBirthday(e.target.value)} type="text" name="birthday" id="birthday" placeholder={t("birthdayPlaceholder")} data-placeholder={t("birthdayPlaceholder")} onFocus={inputFocus} onBlur={inputBlur}/><img className={style.calendarIcon} src={calendarIcon} alt="calendar"></img></div>
                        <div className={clsx(style.formPhone, style.resForm)}><input className={style.inputR} value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" name="phone" id="phone" placeholder={t("phonePlaceholder")} data-placeholder={t("phonePlaceholder")} onFocus={inputFocus} onBlur={inputBlur}/><img className={style.phoneIcon} src={phoneIcon} alt="phone"/></div>
                        <div className={clsx(style.formEmail, style.resForm)}><input className={style.inputR} value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" placeholder="email" data-placeholder='email' onFocus={inputFocus} onBlur={inputBlur}/><img className={style.emailIcon} src={emailIcon} alt="email"/></div>
                        <div className={style.formSendButton}><ButtonGoToDesktop text="отправить" action={handleSubmit}/></div>
                    </div>
                </div>
                <div className={style.bidPictureContainer}><img src={`${process.env.PUBLIC_URL}/images/residence/residenceBottom.png`} alt="bottomPhoto" className={style.bidPicture}></img></div>
            </div>
        </div>
    );
}
export default Residence;