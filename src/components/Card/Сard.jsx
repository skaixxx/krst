import ButtonGoToDesktop from "../Buttons/ButtonGoToDesktop";
import style from "./card.module.css";

export default function Card({img, title, children, btnText, btnAction}) {
	return (
		<div className={style.card}>
			<div className={style.cardImg}>
				<img src={img} alt="" />
			</div>
			<div className={style.cardContent}>
				<h3>{title}</h3>
				<p>{children}</p>
				<ButtonGoToDesktop text={btnText} action={btnAction}/>
			</div>
		</div>
	);
}