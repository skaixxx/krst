import { createContext, useContext, useState } from "react";

const PopupContext = createContext();

export const usePopup = () => 
    useContext(PopupContext);
    export const PopupProvider =  ({ children }) => {
        const [isPopupOpen, setIsPopupOpen] = useState(false);
        const openPopup = () => setIsPopupOpen(true);
        const closePopup = () => setIsPopupOpen(false);
        console.log("Pop up open")
        return (
            <PopupContext.Provider value={{ isPopupOpen, openPopup, closePopup}}>
                {children}
            </PopupContext.Provider>
        );
    };