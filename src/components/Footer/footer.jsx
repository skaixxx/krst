import "./footer.css"
import "../general.css"
import footerLogo from "../../assets/footer/footerLogo.svg"
import phoneIcon from "../../assets/footer/phoneIcon.svg"
import locationIcon from "../../assets/footer/locationIcon.svg"
import arrowIcon from "../../assets/footer/arrowBtn.svg"
import dzenIcon from "../../assets/footer/dzenIcon.svg"
import tgIcon from "../../assets/footer/tgIcon.svg"
import vkIcon from "../../assets/footer/vkIcon.svg"
import LanguageSelector from "./LanguageSelector"

function Footer() {
    const inputFocus = (current) => {
        current.target.placeholder = '';
    };
    const inputBlur = (current) => {
        if (current.target.value === '') {
            current.target.placeholder = current.target.dataset.placeholder || '';
        } 
    };

    return (
        <footer className="footer">
        <div className="footer-grid">
            <div className="grid-col1">
                <div className="footer-logo-container"><a href="/" className="footer-logo-link"><img src={footerLogo} alt="footerLogo" className="footer-logo"></img></a></div>
                <div className="footer-rounds">
                    <div className="footer-round-stroke1">
                        <div className="footer-round-element">
                            <p className="footer-round-element-text">#творчество</p>
                        </div>
                    </div>
                    <div className="footer-round-stroke2">
                        <div className="footer-round-element">
                            <p className="footer-round-element-text">#память</p>
                        </div>
                        <div className="footer-round-element">
                            <p className="footer-round-element-text">#жизнь</p>
                        </div>
                    </div>
                    <div className="footer-round-stroke3">
                        <div className="footer-round-element">
                            <p className="footer-round-element-text">#энергия</p>
                        </div>
                        <div className="footer-round-element">
                            <p className="footer-round-element-text">#будущее</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid-col2">
                <div className="footer-mailing-text">
                    <p className="footer-mailing-title">Подпишитесь на рассылку</p>
                    <p className="footer-mailing-paragraph">Узнавай актуальные новости о нас и наших
                    мероприятиях одним из первых</p>
                </div>
                <div className="footer-mail-input-container">
                    <input type="email" placeholder="Введите вашу почту" className="footer-input-email" data-placeholder='Введите вашу почту' onFocus={inputFocus} onBlur={inputBlur}></input>
                    <button className="send-email-button"><img className="send-email-arrow-pic" src={arrowIcon} alt="arrow"></img></button>
                </div>
                <div className="footer-contacts-info">
                    <div className="footer-phone-adress">
                        <div className="footer-phone"><img src={phoneIcon} alt="phone"></img><p>8 800 000-00-00</p></div>
                        <div className="footer-adress"><img src={locationIcon} alt="location"></img><p>Арсенальная наб, д. 7</p></div>
                    </div>
                    <div className="footer-work-days"><p className="footer-schedule">График работы</p><div className="days-time-container"><p className="days">ПН-ВС</p><p className="time">10:00–22:00</p></div></div>
                </div>
            </div>
            <div className="grid-col3">
                <LanguageSelector/>
                <div className="footer-socuals-politico-container">
                    <div className="footer-socials">
                        <a href="https://dzen.ru" target="_blank" rel="noreferrer" className="link-dzen"><img src={dzenIcon} alt="dzen" className="dzen-logo"></img></a>
                        <a href="https://telegram.org" target="_blank" rel="noreferrer" className="link-tg"><img src={tgIcon} alt="tg" className="tg-logo"></img></a>
                        <a href="https://vk.com" target="_blank" rel="noreferrer" className="link-vk"><img src={vkIcon} alt="vk" className="vk-logo"></img></a>
                    </div>
                    <div className="footer-politico">
                        <a href="/" className="politico-link">
                            <p className="politico-text">Политика конфедициальности</p>
                        </a>
                        <p className="copyrihgt-text">© 2025 КРСТ.Все права защищены.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    );
};
export default Footer;
