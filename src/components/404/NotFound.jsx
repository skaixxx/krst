import NotFoundAnimation from "../animations/NotFoundAnimation/NotFoundAnimation";
import "./NotFoundStyle.css";

export default function NotFound() {
    return (
        <div className="not-found-page-container">
            <NotFoundAnimation/>
            <span className="not-found-page-text">Такой страницы не существует</span>
        </div>
    );
}