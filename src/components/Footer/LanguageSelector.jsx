import "./LanguageSelector.css"
import React, {useState} from "react"
import Vector from "../../assets/footer/chevron.svg"
import { useAppContext } from "../popup/popupContext";

const LanguageSelector = () => {
    const { languageState } = useAppContext();
    const [isActive, setIsActive] = useState(false);
    const languages =  [
        { code: "ru", label: "Ru"},
        { code: "en", label: "En"}
    ]
    const toggleMenu = () => {
        setIsActive(!isActive)
    }

    const handleLangSelect = (lang) => {
        languageState.changeLanguage(lang);
        setIsActive(false);
    }
    return (
        <div className={`footer-lang-change ${isActive ? 'active' : ''}`}>
            <div className="lang-select-container">
                <div className="lang-select-btn" onClick={toggleMenu}>
                    <span>{languages.find((l) => l.code === languageState.language)?.label}</span>
                    <img src={Vector} alt="arrow" className={`arrow-select ${isActive ? 'rotate' : ''}`}/>
                </div>

                <ul className={`options ${isActive ? 'show' : ''}`}>
                    {languages.map((lang) => (
                        <li key={lang.code} onClick={() => handleLangSelect(lang.code)}>
                            <span>{lang.label}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default LanguageSelector