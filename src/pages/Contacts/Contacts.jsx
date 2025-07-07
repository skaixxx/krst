import mapPicture from '../../assets/contacts/map.svg';
import calendar from '../../assets/contacts/calendar.svg';
import personalInfoIcon from '../../assets/contacts/profileIcon.svg';
import letterIcon from '../../assets/contacts/letterIcon.svg';
import phoneIcon from '../../assets/contacts/phoneIcon.svg';
import messageIcon from '../../assets/contacts/messageIcon.svg';
import '../../components/general.css'
import style from './contacts.module.css'
import useMediaQuery from "../../components/Header/useMediaQuery";
import ButtonGoToDesktop from '../../components/Buttons/ButtonGoToDesktop'
import RotatingCross from '../../components/animations/RotatingCross/RotatingCross';
import ScaleSlideBrackets from '../../components/animations/ScaleSlideBrackets/ScaleSlideBrackets';
import clsx from 'clsx';

function Contacts() {
    const isMobile = useMediaQuery('(max-width: 768px)');
    const inputFocus = (current) => {
        current.target.placeholder = '';
    };
    const inputBlur = (current) => {
        if (current.target.value === '') {
            current.target.placeholder = current.target.dataset.placeholder || '';
        } 
    };
    return (
        <div className={style.containerContacts}>
            <div className={style.titleBoxContacts}>
                {!isMobile &&
                <div className={style.contactsTitleStrokeBox}>
                    <div className={clsx(style.contactsTitle, style.contactsTitle1)}>
                        <p>КОНТАКТЫ</p>
                    </div> 
                    <div className={style.contactsStyleElement1}>
                        <ScaleSlideBrackets/>
                    </div>
                </div>
                }
                <div className={style.contactsTitleBigBox}>
                    {isMobile ? 
                    <div className={style.contactsTitleContainer}>
                        <div className={style.contactsTitleStroke1}>
                            <div className={clsx(style.contactsTitle, style.contactsTitle1)}>
                            <p>КОНТАКТЫ</p>
                            </div> 
                            <div className={style.contactsStyleElement1}>
                            <ScaleSlideBrackets/>
                            </div>
                        </div>
                        <div className={style.contactsTitleStroke2}>
                            <div className={style.contactsStyleElement2}>
                                    <RotatingCross/>
                            </div>
                            <div className={clsx(style.contactsTitle, style.contactsTitle2)}>
                                    <p>ДЛЯ</p>
                            </div>
                            <div className={clsx(style.contactsTitle, style.contactsTitle3)}>
                                <p>СВЯЗИ</p>
                            </div>
                        </div>
                    </div>
                    :
                    <div className={style.contactsTitleContainer}>
                        <div className={style.contactsTitleSubContainer}>
                            
                            
                        </div>
                        
                    </div>
                    }
                    <div className={style.contactForm}>
                        <div className={style.nameFormContainer}><input type="text" className={style.contactsName} placeholder="фио" data-placeholder='фио' onFocus={inputFocus} onBlur={inputBlur}></input><img src={personalInfoIcon} alt="persInfoIcon" className={style.personalInfoIcon}/></div>
                        <div className={style.contactsDateBirthContainer}><input name="birthday" type="text" className={style.contactsDateBirth} placeholder="дата рождения" data-placeholder='дата рождения' onFocus={inputFocus} onBlur={inputBlur}/><img src={calendar} alt="calendar" className={style.dateBirthIcon}/></div>
                        <div className={style.emailFormContainer}><input type="email" className={style.contactsEmail} placeholder="email" data-placeholder='email' onFocus={inputFocus} onBlur={inputBlur}/><img src={letterIcon} alt="letterIcon" className={style.emailIcon}/></div>
                        <div className={style.phoneFormContainer}><input type="tel" className={style.contactsPhone} placeholder="телефон" data-placeholder='телефон' onFocus={inputFocus} onBlur={inputBlur} pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/><img src={phoneIcon} alt="phoneIcon" className={style.phoneIcon}/></div>
                        <div className={style.messageFormContainer}>
                            {isMobile? 
                            <textarea type="text" className={style.contactsMessageArea} placeholder="сообщение" data-placeholder='сообщение' onFocus={inputFocus} onBlur={inputBlur} />
                            :
                            <input type="text" className={style.contactsMessage} placeholder="сообщение" data-placeholder='сообщение' onFocus={inputFocus} onBlur={inputBlur}/>
                            }
                            <img src={messageIcon} alt="messageIcon" className={style.messageIcon}/>
                        </div>
                        <div className={style.sendButtonFormContainer}>
                            <ButtonGoToDesktop text="отправить"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.contactsAboutUs}>
                <div className={style.contactsAboutUsBox}>
                    <p className={style.contactsAboutUsTitle}>EMAIL</p>
                    <p className={style.contactsAboutUsText}>krst@krst.ru</p>
                </div>
                <div className={style.contactsAboutUsBox}>
                    <p className={style.contactsAboutUsTitle}>ТЕЛЕФОН</p>
                    <p className={style.contactsAboutUsText}>+7 (888) 888-88-88</p>
                </div>
                {!isMobile &&
                    <div className={style.contactsAboutUsBox}>
                        <p className={style.contactsAboutUsTitle}>АДРЕС</p>
                        <p className={style.contactsAboutUsText}>Санкт-Петербург, Арсенальная наб. 7</p>
                    </div>
                }
            </div>
            <div className={style.contactsInfo}>
                <div className={style.contactsInfo1}>
                    <p className={style.contactsInfoHashtag}>
                        #ЦЕНИМ
                    </p>
                    <p className={style.contactsInfoText}>
                        Мы ценим каждого нашего клиента и всегда стремимся 
                        к общению. Нам важна ваша обратная связь, ведь именно 
                        благодаря вам мы становимся лучше.
                    </p>
                </div>
                <div className={style.contactsInfo2}>
                    <p className={style.contactsInfoHashtag}>
                        #СВЯЗЬ
                    </p>
                    <p className={style.contactsInfoText}>
                        Свяжитесь с нами любым удобным способом — мы всегда 
                        готовы ответить на ваши вопросы и помочь!
                    </p>
                </div>
            </div>
            <div className={style.contactsContentBottom}>
                <div className={style.contactsContentBottom1}>
                    <img className={style.contactsContentBottomPicture} src={mapPicture} alt="map" />
                    {isMobile && 
                        <div className={style.onMapAdress}>
                            <p className={style.contactsAboutUsText}>Санкт-Петербург, Арсенальная наб. 7</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}
export default Contacts;