import style from "./popup.module.css"
import { usePopup } from "./popupContext";

const PopUp = () => {
    const { isPopupOpen, closePopup} = usePopup();
    if (!isPopupOpen) return null;
    return (
        <div className={style.popUp_overlay} onClick={closePopup}>
            <div className={style.popUp}>
                <p className={style.text}>Успешно!</p>
            </div>
        </div>
    );
}
export default PopUp;