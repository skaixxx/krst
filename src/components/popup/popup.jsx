import ButtonGoToDesktop from "../Buttons/ButtonGoToDesktop";
import style from "./popup.module.css"
import { usePopup } from "./popupContext";

const PopUp = () => {
    const { isPopupOpen, closePopup} = usePopup();
     console.log("PopUp open? ", isPopupOpen)
    if (!isPopupOpen) return null;
    console.log("PopUp error")
    return (
        <div className={style.popUpOverlay} onClick={closePopup}>
            <div className={style.popUp}>
                <p className={style.text}>Успешно!</p>
                <ButtonGoToDesktop text="закрыть" action={closePopup} notShowPic={true}/>
            </div>
        </div>
    );
}
export default PopUp;