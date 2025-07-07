import ButtonGoToDesktop from "../Buttons/ButtonGoToDesktop";
import style from "./card.module.css";

export default function Card({ data, reverse, btnText, btnAction }) {	
	return (
		<div className={`${style.card} ${reverse ? style.cardReverse : ''}`}>
			<div className={style.cardImg}>
				<img src={data.image} alt="" />
			</div>
			<div className={style.cardContent}>
				<div className={style.cardContentTop}>
					<div className={style.cardContentHeader}>
						<h3 className={style.cardTitle}>{data.title}</h3>

						<div className={style.cardTags}>
							{data.tags.map((tag, index) => (
								<div key={index} className={style.cardTag}>{tag.name}</div>
							))}
						</div>
					</div>
					<p className={style.cardDescription} dangerouslySetInnerHTML={{ __html: data.text }}></p>
				</div>
				
				<div className={style.cardContentBottom}>
					<ButtonGoToDesktop text={btnText} action={btnAction} />
					
					<div className={style.cardContentInfo}>
						{data.specs.map((spec, index) => (
							<div key={index} className={style.cardInfo}>
								<img src={spec.icon} alt="" />
								<span>{spec.value}</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}