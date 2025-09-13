import ButtonGoToDesktop from "../Buttons/ButtonGoToDesktop";
import style from "./popup.module.css"
import { usePopup } from "./popupContext";

export default function PopUp() {
    const { isPopupOpen, closePopup, content} = usePopup();
     console.log("PopUp open? ", isPopupOpen)
    if (!isPopupOpen) return null;
    console.log("PopUp error")
    return (
        <div className={style.popUpOverlay} onClick={closePopup}>
            <div className={style.popUp} onClick={(e) => e.stopPropagation()}>
                {content}
                <ButtonGoToDesktop text="закрыть" action={closePopup} notShowPic={true}/>
            </div>
        </div>
    );
}