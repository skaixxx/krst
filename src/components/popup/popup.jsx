import ButtonGoToDesktop from "../Buttons/ButtonGoToDesktop";
import style from "./popup.module.css"
import { useAppContext } from "./popupContext";

export default function PopUp() {
    const { popup } = useAppContext();
    if (!popup.isPopupOpen) return null;
    return (
        <div className={style.popUpOverlay} onClick={popup.closePopup}>
            <div className={style.popUp} onClick={(e) => e.stopPropagation()}>
                {popup.content}
                <ButtonGoToDesktop text="закрыть" action={popup.closePopup} notShowPic={true}/>
            </div>
        </div>
    );
}