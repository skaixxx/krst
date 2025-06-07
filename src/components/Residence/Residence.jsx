import StaticImg from "../../assets/residence/iconsStatic.svg";
import calendarIcon from "../../assets/residence/calendar.svg"
import phoneIcon from "../../assets/residence/phoneIcon.svg"
import profileIcon from "../../assets/residence/profileIcon.svg"
import emailIcon from "../../assets/residence/letterIcon.svg"
import "./residence.css"
import "../general.css"
import ButtonGoToDesktop from "../Buttons/ButtonGoToDesktop";
import { useState } from "react";
function Residence() {
    const inputFocus = (current) => {
        current.target.placeholder = '';
    };
    const inputBlur = (current) => {
        if (current.target.value === '') {
            current.target.placeholder = current.target.dataset.placeholder || '';
        } 
    };
    return (
        <div className="grid-container-residence">
            <div className="page-title page-title1">
                <p>РЕЗИДЕНТСТВО</p>
            </div>
            <div className="page-title page-title2">
                <p>ОТКРЫВАЙ</p>
            </div>
            <div className="page-title page-title3">
                <p>ВДОХНОВЛЯЙ</p>
            </div>
            <div className="icon"><img src={StaticImg} alt="Static"></img></div>
            <div className="same-text">
                <p>Найди идеальное помещение для аренды прямо сейчас.</p>
            </div>
            <div className="buttonGo-container"><ButtonGoToDesktop text="перейти"/></div>
            <div className="paragraph1">
                <p className="paragraph-text">
                    Мы приглашаем художников, ремесленников, музыкантов, кураторов, дизайнеров, исследователей и культурных предпринимателей стать частью пространства. Здесь можно не просто арендовать мастерскую или студию — здесь можно запускать процессы, находить соавторов, взаимодействовать с публикой и местом.
                </p>
            </div>
            <div className="paragraph2">
                <p className="paragraph-text">
                    КРСТ — это территория, где каждый резидент становится участником большого культурного эксперимента. Работай. Исследуй. Делай шум. Резидентство в КРСТ — это когда пространство работает вместе с тобой.
                </p>
            </div>
            <div className="rollingStroke-container">
                <div className="rollingStroke1">
                    <div className="rolling-ticker">
                        <div className="rol-element"><span>NOMAD</span></div>
                        <div className="rol-element"><span>СТАРИК ХИНКАЛЫЧ</span></div>
                        <div className="rol-element"><span>БУШЕ</span></div>
                        <div className="rol-element"><span>БАКЛАЖАН</span></div>
                        <div className="rol-element"><span>TIGER LILY</span></div>
                        <div className="rol-element"><span>SURF COFFEE</span></div>
                        <div className="rol-element"><span>FRANK</span></div>
                        <div className="rol-element"><span>MARSALA</span></div>
                        <div className="rol-element"><span>ПОЙМАЙ МОМЕНТ</span></div>
                        <div className="rol-element"><span>LEFT</span></div>
                        <div className="rol-element"><span>ITALIANI</span></div>
                        <div className="rol-element"><span>MAMA ROMA</span></div>
                    </div>
                    <div className="rolling-ticker">
                        <div className="rol-element"><span>NOMAD</span></div>
                        <div className="rol-element"><span>СТАРИК ХИНКАЛЫЧ</span></div>
                        <div className="rol-element"><span>БУШЕ</span></div>
                        <div className="rol-element"><span>БАКЛАЖАН</span></div>
                        <div className="rol-element"><span>TIGER LILY</span></div>
                        <div className="rol-element"><span>SURF COFFEE</span></div>
                        <div className="rol-element"><span>FRANK</span></div>
                        <div className="rol-element"><span>MARSALA</span></div>
                        <div className="rol-element"><span>ПОЙМАЙ МОМЕНТ</span></div>
                        <div className="rol-element"><span>LEFT</span></div>
                        <div className="rol-element"><span>ITALIANI</span></div>
                        <div className="rol-element"><span>MAMA ROMA</span></div>
                    </div>
                </div>
            <div className="rollingStroke2">
                    <div className="rolling-ticker">
                        <div className="rol-element"><span>NOMAD</span></div>
                        <div className="rol-element"><span>СТАРИК ХИНКАЛЫЧ</span></div>
                        <div className="rol-element"><span>БУШЕ</span></div>
                        <div className="rol-element"><span>БАКЛАЖАН</span></div>
                        <div className="rol-element"><span>TIGER LILY</span></div>
                        <div className="rol-element"><span>SURF COFFEE</span></div>
                        <div className="rol-element"><span>FRANK</span></div>
                        <div className="rol-element"><span>MARSALA</span></div>
                        <div className="rol-element"><span>ПОЙМАЙ МОМЕНТ</span></div>
                        <div className="rol-element"><span>LEFT</span></div>
                        <div className="rol-element"><span>ITALIANI</span></div>
                        <div className="rol-element"><span>MAMA ROMA</span></div>
                    </div>
                    <div className="rolling-ticker">
                        <div className="rol-element"><span>NOMAD</span></div>
                        <div className="rol-element"><span>СТАРИК ХИНКАЛЫЧ</span></div>
                        <div className="rol-element"><span>БУШЕ</span></div>
                        <div className="rol-element"><span>БАКЛАЖАН</span></div>
                        <div className="rol-element"><span>TIGER LILY</span></div>
                        <div className="rol-element"><span>SURF COFFEE</span></div>
                        <div className="rol-element"><span>FRANK</span></div>
                        <div className="rol-element"><span>MARSALA</span></div>
                        <div className="rol-element"><span>ПОЙМАЙ МОМЕНТ</span></div>
                        <div className="rol-element"><span>LEFT</span></div>
                        <div className="rol-element"><span>ITALIANI</span></div>
                        <div className="rol-element"><span>MAMA ROMA</span></div>
                    </div>
            </div>
            </div>
            <div className="bid-text">
                <p>КАК ИМ СТАТЬ? ЗАПОЛНИ ЗАЯВКУ!</p>
            </div>
            <div className="bid-form">
                <div className="form-name"><input className="input-r" type="name" id="name" placeholder='фио' data-placeholder='фио' onFocus={inputFocus} onBlur={inputBlur}></input><img className="profile-icon" src={profileIcon} alt="profile"/></div>
                <div className="form-birthday"><input className="input-r" type="text" name="birthday" id="birthday" placeholder="дата рождения" data-placeholder='дата рождения' onFocus={inputFocus} onBlur={inputBlur}></input><img className="calendar-icon" src={calendarIcon} alt="calendar"></img></div>
                <div className="form-phone"><input className="input-r" type="tel" name="phone" id="phone" placeholder="телефон" data-placeholder='телефон' onFocus={inputFocus} onBlur={inputBlur}></input><img className="phone-icon" src={phoneIcon} alt="phone"/></div>
                <div className="form-email"><input className="input-r" type="email" name="email" id="email" placeholder="email" data-placeholder='email' onFocus={inputFocus} onBlur={inputBlur}></input><img className="email-icon" src={emailIcon} alt="email"/></div>
                <div className="form-send-button"><ButtonGoToDesktop text="отправить"/></div>
            </div>
            <div className="bid-picture"><img src="#" alt="empty"></img></div>
        </div>
    );
}
export default Residence;