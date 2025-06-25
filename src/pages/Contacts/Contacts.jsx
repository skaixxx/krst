import mapPicture from '../../assets/contacts/map.svg';
import calendar from '../../assets/contacts/calendar.svg';
import personalInfoIcon from '../../assets/contacts/profileIcon.svg';
import letterIcon from '../../assets/contacts/letterIcon.svg';
import phoneIcon from '../../assets/contacts/phoneIcon.svg';
import messageIcon from '../../assets/contacts/messageIcon.svg';
import '../general.css'
import './contacts.css'
import ButtonGoToDesktop from '../../components/Buttons/ButtonGoToDesktop'
import RotatingCross from '../../components/animations/RotatingCross/RotatingCross';
import ScaleSlideBrackets from '../../components/animations/ScaleSlideBrackets/ScaleSlideBrackets';

function Contacts() {
    const inputFocus = (current) => {
        current.target.placeholder = '';
    };
    const inputBlur = (current) => {
        if (current.target.value === '') {
            current.target.placeholder = current.target.dataset.placeholder || '';
        } 
    };
    return (
        <div className="container-contacts">
            <div className="title-box-contacts">
                <div className="contacts-title-stroke-box">
                    <div className="contacts-title contacts-title1">
                        <p>КОНТАКТЫ</p>
                    </div> 
                    <div className="contacts-style-element1">
                        <ScaleSlideBrackets/>
                    </div>
                </div>
                <div className="contacts-title-big-box">
                    <div className="contacts-title-container">
                        <div className="contacts-title-sub-container">
                            <div className="contacts-title contacts-title2">
                                <p>ДЛЯ</p>
                            </div>
                            <div className="contacts-style-element2">
                                <RotatingCross/>
                            </div>
                        </div>
                        <div className="contacts-title contacts-title3">
                            <p>СВЯЗИ</p>
                        </div>
                    </div>
                    <div className="contact-form">
                        <div className="name-form-container"><input type="text" className="contacts-name" placeholder="фио" data-placeholder='фио' onFocus={inputFocus} onBlur={inputBlur}></input><img src={personalInfoIcon} alt="persInfoIcon" className="personal-info-icon"/></div>
                        <div className="contacts-date-birth-container"><input name="birthday" type="text" className="contacts-date-birth" placeholder="дата рождения" data-placeholder='дата рождения' onFocus={inputFocus} onBlur={inputBlur}/><img src={calendar} alt="calendar" className="date-birth-icon"/></div>
                        <div className="email-form-container"><input type="email" className="contacts-email" placeholder="email" data-placeholder='email' onFocus={inputFocus} onBlur={inputBlur}/><img src={letterIcon} alt="letterIcon" className="email-icon"/></div>
                        <div className="phone-form-container"><input type="tel" className="contacts-phone" placeholder="телефон" data-placeholder='телефон' onFocus={inputFocus} onBlur={inputBlur} pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/><img src={phoneIcon} alt="phoneIcon" className="phone-icon"/></div>
                        <div className="message-form-container"><input type="text" className="contacts-message" placeholder="сообщение" data-placeholder='сообщение' onFocus={inputFocus} onBlur={inputBlur}/><img src={messageIcon} alt="messageIcon" className="message-icon"/></div>
                        <div className="send-button-form-container">
                            <ButtonGoToDesktop text="отправить"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contacts-about-us">
                <div className="contacts-about-us-box">
                    <p className="contacts-about-us-title">EMAIL</p>
                    <p className="contacts-about-us-text">krst@krst.ru</p>
                </div>
                <div className="contacts-about-us-box">
                    <p className="contacts-about-us-title">ТЕЛЕФОН</p>
                    <p className="contacts-about-us-text">+7 (888) 888-88-88</p>
                </div>
                <div className="contacts-about-us-box">
                    <p className="contacts-about-us-title">АДРЕС</p>
                    <p className="contacts-about-us-text">Санкт-Петербург, Арсенальная наб. 7</p>
                </div>
            </div>
            <div className="contacts-info">
                <div className="contacts-info-1">
                    <p className='contacts-info-hashtag'>
                        #ЦЕНИМ
                    </p>
                    <p className="contacts-info-text">
                        Мы ценим каждого нашего клиента и всегда стремимся 
                        к общению. Нам важна ваша обратная связь, ведь именно 
                        благодаря вам мы становимся лучше.
                    </p>
                </div>
                <div className="contacts-info-2">
                    <p className='contacts-info-hashtag'>
                        #СВЯЗЬ
                    </p>
                    <p className="contacts-info-text">
                        Свяжитесь с нами любым удобным способом — мы всегда 
                        готовы ответить на ваши вопросы и помочь!
                    </p>
                </div>
            </div>
            <div className="contacts-content-bottom">
                <div className="contacts-content-bottom-1">
                    <img className="contacts-content-bottom-picture" src={mapPicture} alt="map" />
                </div>
            </div>
        </div>
    );
}
export default Contacts;