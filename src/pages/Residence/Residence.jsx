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
function Residence() {
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
                        <p>РЕЗИДЕНТ</p>
                        :
                        <p>РЕЗИДЕНТСТВО</p>
                        }
                    </div>
                    <div className={clsx(style.pageTitle, style.pageTitle2)}>
                        <p>ОТКРЫВАЙ</p>
                    </div>
                    <div className={clsx(style.pageTitle, style.pageTitle3)}>
                        <p>ВДОХНОВЛЯЙ</p>
                    </div>
                </div>
                <div className={style.titleBox2}>
                    <div className={style.icon}><ScaleCrossSlideBracketInverted/></div>
                    <div className={style.sameText}>
                        <p>Найди идеальное помещение для аренды прямо сейчас.</p>
                    </div>
                    <div className={style.buttonGoContainer}><ButtonGoToDesktop text="перейти" action={() => navigate("/Rent")}/></div>
                </div>
            </div>
            <div className={style.paragraphs}>
                <div className={style.paragraph1}>
                    <p className={style.paragraphTitle}>#КОЛЛАБОРАЦИЯ</p>
                    <p className={style.paragraphText}>
                        Мы приглашаем художников, ремесленников, музыкантов, кураторов, дизайнеров, исследователей и культурных предпринимателей стать частью пространства. Здесь можно не просто арендовать мастерскую или студию — здесь можно запускать процессы, находить соавторов, взаимодействовать с публикой и местом.
                    </p>
                </div>
                <div className={style.paragraph2}>
                    <p className={style.paragraphTitle}>#ПРОСТРАНСТВО</p>
                    <p className={style.paragraphText}>
                        КРСТ — это территория, где каждый резидент становится участником большого культурного эксперимента. Работай. Исследуй. Делай шум. Резидентство в КРСТ — это когда пространство работает вместе с тобой.
                    </p>
                </div>
            </div>
            <div className={style.rollingStrokeContainer}>
                <div className={style.rollingStroke1}>
                    <div className={style.rollingTicker}>
                        <div className={style.rolElement}><span>NOMAD</span></div>
                        <div className={style.rolElement}><span>СТАРИК ХИНКАЛЫЧ</span></div>
                        <div className={style.rolElement}><span>БУШЕ</span></div>
                        <div className={style.rolElement}><span>БАКЛАЖАН</span></div>
                        <div className={style.rolElement}><span>TIGER LILY</span></div>
                        <div className={style.rolElement}><span>SURF COFFEE</span></div>
                        <div className={style.rolElement}><span>FRANK</span></div>
                        <div className={style.rolElement}><span>MARSALA</span></div>
                        <div className={style.rolElement}><span>ПОЙМАЙ МОМЕНТ</span></div>
                        <div className={style.rolElement}><span>LEFT</span></div>
                        <div className={style.rolElement}><span>ITALIANI</span></div>
                        <div className={style.rolElement}><span>MAMA ROMA</span></div>
                    </div>
                    <div className={style.rollingTicker}>
                        <div className={style.rolElement}><span>NOMAD</span></div>
                        <div className={style.rolElement}><span>СТАРИК ХИНКАЛЫЧ</span></div>
                        <div className={style.rolElement}><span>БУШЕ</span></div>
                        <div className={style.rolElement}><span>БАКЛАЖАН</span></div>
                        <div className={style.rolElement}><span>TIGER LILY</span></div>
                        <div className={style.rolElement}><span>SURF COFFEE</span></div>
                        <div className={style.rolElement}><span>FRANK</span></div>
                        <div className={style.rolElement}><span>MARSALA</span></div>
                        <div className={style.rolElement}><span>ПОЙМАЙ МОМЕНТ</span></div>
                        <div className={style.rolElement}><span>LEFT</span></div>
                        <div className={style.rolElement}><span>ITALIANI</span></div>
                        <div className={style.rolElement}><span>MAMA ROMA</span></div>
                    </div>
                </div>
            <div className={style.rollingStroke2}>
                    <div className={style.rollingTicker}>
                        <div className={style.rolElement}><span>NOMAD</span></div>
                        <div className={style.rolElement}><span>СТАРИК ХИНКАЛЫЧ</span></div>
                        <div className={style.rolElement}><span>БУШЕ</span></div>
                        <div className={style.rolElement}><span>БАКЛАЖАН</span></div>
                        <div className={style.rolElement}><span>TIGER LILY</span></div>
                        <div className={style.rolElement}><span>SURF COFFEE</span></div>
                        <div className={style.rolElement}><span>FRANK</span></div>
                        <div className={style.rolElement}><span>MARSALA</span></div>
                        <div className={style.rolElement}><span>ПОЙМАЙ МОМЕНТ</span></div>
                        <div className={style.rolElement}><span>LEFT</span></div>
                        <div className={style.rolElement}><span>ITALIANI</span></div>
                        <div className={style.rolElement}><span>MAMA ROMA</span></div>
                    </div>
                    <div className={style.rollingTicker}>
                        <div className={style.rolElement}><span>NOMAD</span></div>
                        <div className={style.rolElement}><span>СТАРИК ХИНКАЛЫЧ</span></div>
                        <div className={style.rolElement}><span>БУШЕ</span></div>
                        <div className={style.rolElement}><span>БАКЛАЖАН</span></div>
                        <div className={style.rolElement}><span>TIGER LILY</span></div>
                        <div className={style.rolElement}><span>SURF COFFEE</span></div>
                        <div className={style.rolElement}><span>FRANK</span></div>
                        <div className={style.rolElement}><span>MARSALA</span></div>
                        <div className={style.rolElement}><span>ПОЙМАЙ МОМЕНТ</span></div>
                        <div className={style.rolElement}><span>LEFT</span></div>
                        <div className={style.rolElement}><span>ITALIANI</span></div>
                        <div className={style.rolElement}><span>MAMA ROMA</span></div>
                    </div>
            </div>
            </div>
            <div className={style.bidSection}>
                <div className={style.bidCol1}>
                    {isMobile?
                        <div className={style.bidText}>
                            <p className={style.bidDefaultText}>КАК ИМ СТАТЬ?</p>
                            <p className={style.bidAccentText}>ЗАПОЛНИ ЗАЯВКУ!</p>
                        </div>
                        :
                        <div className={style.bidText}>
                            <p className={style.bidDefaultText}>ОСТАВЬ ЗАЯВКУ</p>
                            <p className={style.bidAccentText}>МЕНЕДЖЕРАМ</p>
                        </div> 
                    }
                    
                    <div className={style.bidForm}>
                        <div className={clsx(style.formName, style.resForm)}><input className={style.inputR} value={name} onChange={(e) => setName(e.target.value)} type="name" id="name" placeholder='фио' data-placeholder='фио' onFocus={inputFocus} onBlur={inputBlur}/><img className={style.profileIcon} src={profileIcon} alt="profile"/></div>
                        <div className={clsx(style.formBirthday, style.resForm)}><input className={style.inputR} value={birthday} onChange={(e) => setBirthday(e.target.value)} type="text" name="birthday" id="birthday" placeholder="дата рождения" data-placeholder='дата рождения' onFocus={inputFocus} onBlur={inputBlur}/><img className={style.calendarIcon} src={calendarIcon} alt="calendar"></img></div>
                        <div className={clsx(style.formPhone, style.resForm)}><input className={style.inputR} value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" name="phone" id="phone" placeholder="телефон" data-placeholder='телефон' onFocus={inputFocus} onBlur={inputBlur}/><img className={style.phoneIcon} src={phoneIcon} alt="phone"/></div>
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