import "./LanguageSelector.css"
import React, {useState} from "react"
import Vector from "../../assets/footer/chevron.svg"

const LanguageSelector = () => {

    const [isActive, setIsActive] = useState(false);
    const [selectedLang, setSelectedLang] = useState('Ru');

    const toggleMenu = () => {
        setIsActive(!isActive)
    }

    const handleLangSelect = (lang) => {
        setSelectedLang(lang);
        setIsActive(false);
    }

    return (
        <div className={`footer-lang-change ${isActive ? 'active' : ''}`}>
            <div className="lang-select-container">
                <div className="lang-select-btn" onClick={toggleMenu}>
                    <span>{selectedLang}</span>
                    <img src={Vector} alt="arrow" className={`arrow-select ${isActive ? 'rotate' : ''}`}/>
                </div>

                <ul className={`options ${isActive ? 'show' : ''}`}>
                    <li onClick={() => handleLangSelect('Ru')}>
                        <span>Ru</span>
                    </li>
                    <li onClick={() => handleLangSelect('En')}>
                        <span>En</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default LanguageSelector