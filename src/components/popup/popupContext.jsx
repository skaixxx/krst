import { createContext, useCallback, useContext, useState } from "react";

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
        console.log("Pop up open")
        return (
            <PopupContext.Provider value={{ isPopupOpen, openPopup, closePopup, content}}>
                {children}
            </PopupContext.Provider>
        );
    };