import style from "./LanguageSelector.module.css"
import React, {useState} from "react"
import Vector from "../../assets/footer/chevron.svg"
import { useAppContext } from "../popup/popupContext";
import clsx from "clsx";

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
        <div className={clsx(style.langChange, isActive ? style.active : "" )}>
            <div className={style.langSelectContainer}>
                <div className={style.langSelectBtn} onClick={toggleMenu}>
                    <span>{languages.find((l) => l.code === languageState.language)?.label}</span>
                    <img src={Vector} alt="arrow" className={clsx(style.arrowSelect, isActive ? style.rotate : "")}/>
                </div>

                <ul className={clsx(style.options, isActive ? style.show : "")}>
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