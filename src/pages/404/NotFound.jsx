import NotFoundAnimation from "../../components/animations/NotFoundAnimation/NotFoundAnimation";
import { useTranslation } from "../../hooks/useTranslation";
import style from "./NotFoundStyle.module.css";
import NotFoundTranslate from "./NotFound.translate";
export default function NotFound() {
    const t = useTranslation(NotFoundTranslate);
    return (
        <div className={style.container}>
            <NotFoundAnimation/>
            <span className={style.text}>{t("primaryText")}</span>
        </div>
    );
}