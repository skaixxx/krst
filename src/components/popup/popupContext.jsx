import { createContext, useCallback, useContext, useEffect, useState } from "react";

const PopupContext = createContext();

export const usePopup = () => 
    useContext(PopupContext);
    export const PopupProvider =  ({ children }) => {
        const [isPopupOpen, setIsPopupOpen] = useState(false);
        const [content, setContent] = useState(null);
        const openPopup = useCallback((popupContent) => {
            setContent(popupContent);
            setIsPopupOpen(true);
        }, []);
        const closePopup = useCallback(() => {
            setIsPopupOpen(false);
            setContent(null);
        }, []);
        // Translation Provider
        const [language, setLanguage] = useState("ru");
        useEffect(() => {
            const savedLanguage = localStorage.getItem("language");
            if (savedLanguage) {
                setLanguage(savedLanguage);
            } else {
                const userLanguage = navigator.language.startsWith("ru") ? "ru" : "en";
                setLanguage(userLanguage);
                localStorage.setItem("language", userLanguage);
            }
        }, []);
        const changeLanguage = (lang) => {
            setLanguage(lang);
            localStorage.setItem("language", lang);
        };

        const value = {
            popup : {
                isPopupOpen,
                openPopup,
                closePopup,
                content
            },
            languageState : {
                language,
                changeLanguage,
            }
        };
        return (
            <PopupContext.Provider value={value}>
                {children}
            </PopupContext.Provider>
        );
    };
export const useAppContext = () => useContext(PopupContext);