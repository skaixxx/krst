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
import { useState } from 'react';
import { useAppContext } from '../../components/popup/popupContext';
import ContactsTranslate from './Contacts.translate.js';
import { useTranslation } from '../../hooks/useTranslation.jsx';
function Contacts() {
    const { languageState } = useAppContext();
    const { popup } = useAppContext();
    const t = useTranslation(ContactsTranslate);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [birthday, setBirthday] = useState("");
    const [message, setMessage] = useState("");
    const handleSubmit = () => {
        if (!name || !email || !phone || !birthday || !message) {
            popup.openPopup(
            <div className={style.popUpBox}>
                <p>Пожалуйста, заполните все поля!</p>
            </div>
        )
            return;
        }
        popup.openPopup(
            <div className={style.popUpBox}>
                <p>Успешно отправлено!</p>
                <p>Мы скоро с вами свяжемся!</p>
            </div>
        )
    }
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
            <div className={languageState.language === "ru" ? style.titleBoxContacts : clsx(style.titleBoxContacts, style.en)}>
                {!isMobile &&
                <div className={style.contactsTitleStrokeBox}>
                    <div className={clsx(style.contactsTitle, style.contactsTitle1)}>
                        <p>{t("titleText1")}</p>
                    </div> 
                    <div className={style.contactsStyleElement1}>
                        <ScaleSlideBrackets/>
                    </div>                 
                    
                </div>
                }
                <div className={languageState.language === "ru" ? style.contactsTitleBigBox : clsx(style.contactsTitleBigBox, style.en)}>
                    {isMobile ? 
                    <div className={style.contactsTitleContainer}>
                        <div className={style.contactsTitleStroke1}>
                            <div className={clsx(style.contactsTitle, style.contactsTitle1)}>
                            <p>{t("titleText1")}</p>
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
                                    <p>{t("titleText2")}</p>
                            </div>
                            <div className={clsx(style.contactsTitle, style.contactsTitle3)}>
                                <p>{t("titleText3")}</p>
                            </div>
                        </div>
                    </div>
                    :
                    <div className={languageState.language === "ru" ? style.contactsTitleContainer : clsx(style.contactsTitleContainer, style.en)}>
                        <div className={languageState.language === "ru" ? style.contactsTitleSubContainer : clsx(style.contactsTitleSubContainer, style.en)}>
                            <div className={clsx(style.contactsTitle, style.contactsTitle2)}>
                            <p>{t("titleText2")}</p>
                            </div>
                            <div className={style.contactsStyleElement2}>
                            <RotatingCross/>
                            </div>
                        </div>
                        <div className={clsx(style.contactsTitle, style.contactsTitle3)}>
                                <p>{t("titleText3")}</p>
                        </div>
                        
                    </div>
                    }
                    <div className={languageState.language === "ru" ? style.contactForm : clsx(style.contactForm, style.en)}>
                        <div className={style.nameFormContainer}><input type="text" className={style.contactsName} value={name} onChange={(e) => setName(e.target.value)} placeholder={t("namePlaceholder")} data-placeholder={t("namePlaceholder")} onFocus={inputFocus} onBlur={inputBlur}></input><img src={personalInfoIcon} alt="persInfoIcon" className={style.personalInfoIcon}/></div>
                        <div className={style.contactsDateBirthContainer}><input name="birthday" type="text" className={style.contactsDateBirth} value={birthday} onChange={(e) => setBirthday(e.target.value)} placeholder={t("birthdayPlaceholder")} data-placeholder={t("birthdayPlaceholder")} onFocus={inputFocus} onBlur={inputBlur}/><img src={calendar} alt="calendar" className={style.dateBirthIcon}/></div>
                        <div className={style.emailFormContainer}><input type="email" className={style.contactsEmail} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" data-placeholder='email' onFocus={inputFocus} onBlur={inputBlur}/><img src={letterIcon} alt="letterIcon" className={style.emailIcon}/></div>
                        <div className={style.phoneFormContainer}><input type="tel" className={style.contactsPhone} value={phone} onChange={(e) => setPhone(e.target.value)} placeholder={t("phonePlaceholder")} data-placeholder={t("phonePlaceholder")} onFocus={inputFocus} onBlur={inputBlur} pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/><img src={phoneIcon} alt="phoneIcon" className={style.phoneIcon}/></div>
                        <div className={style.messageFormContainer}>
                            {isMobile? 
                            <textarea type="text" value={message} onChange={(e) => setMessage(e.target.value)} className={style.contactsMessageArea} placeholder={t("messagePlaceholder")} data-placeholder={t("messagePlaceholder")} onFocus={inputFocus} onBlur={inputBlur} />
                            :
                            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} className={style.contactsMessage} placeholder={t("messagePlaceholder")} data-placeholder={t("messagePlaceholder")} onFocus={inputFocus} onBlur={inputBlur}/>
                            }
                            <img src={messageIcon} alt="messageIcon" className={style.messageIcon}/>
                        </div>
                        <div className={style.sendButtonFormContainer}>
                            <ButtonGoToDesktop text="отправить" action={handleSubmit}/>
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
                    <p className={style.contactsAboutUsTitle}>{t("phoneText")}</p>
                    <p className={style.contactsAboutUsText}>+7 (888) 888-88-88</p>
                </div>
                {!isMobile &&
                    <div className={style.contactsAboutUsBox}>
                        <p className={style.contactsAboutUsTitle}>{t("adressText")}</p>
                        <p className={style.contactsAboutUsText}>{t("addressText2")}</p>
                    </div>
                }
            </div>
            <div className={style.contactsInfo}>
                <div className={style.contactsInfo1}>
                    <p className={style.contactsInfoHashtag}>
                        {t("hashtag1")}
                    </p>
                    <p className={style.contactsInfoText}>
                        {t("hashtag1Text")}
                    </p>
                </div>
                <div className={style.contactsInfo2}>
                    <p className={style.contactsInfoHashtag}>
                        {t("hashtag2")}
                    </p>
                    <p className={style.contactsInfoText}>
                        {t("hashtag2Text")}
                    </p>
                </div>
            </div>
            <div className={style.contactsContentBottom}>
                <div className={style.contactsContentBottom1}>
                    <img className={style.contactsContentBottomPicture} src={mapPicture} alt="map" />
                    {isMobile && 
                        <div className={style.onMapAdress}>
                            <p className={style.contactsAboutUsText}>{t("addressText2")}</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}
export default Contacts;