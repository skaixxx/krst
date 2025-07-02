import { useParams, useNavigate } from 'react-router-dom';
import style from "./detailRent.module.css";
import arrowBR from "../../../assets/mainPage/arrowsBR.svg"
import Card from "../../../components/Card/card";

import img1 from "../../../assets/card/1-min.png"
import icon1 from '../../../assets/card/icons/icon-1.svg';
import icon2 from '../../../assets/card/icons/icon-2.svg';

function DetailRent() {
	const { id } = useParams();
	const navigate = useNavigate();

	const goToPlace = (placeId) => {
		navigate(`/rent/${id}/${placeId}`);
	};

	const cards = [
		{
			id: 1,
			title: 'ГАРМОНИЯ',
			image: img1,
			text: 'Помещение идеально подходит для мастер-классов по керамике: здесь всё продумано до мелочей для удобства участников.',
			info: [
				{
					icon: icon1,
					label: '87 000 руб',
				},
				{
					icon: icon2,
					label: '120 М²',
				},
			],
			tags: [
				{ name: '#проектор', },
				{ name: '#гардеробная', },
				{ name: '#зонаочистки', }
			]
		},
		{
			id: 2,
			title: 'ФАНТАЗИЯ',
			image: img1,
			text: 'Уютный и вдохновляющий зал с большими окнами,<br> идеально подходящий для проведения мастер-классов по живописи. ',
			info: [],
			tags: [],
		},
	]
    return (
		<div className={style.detailRent}>
			<div className={style.detailRentContainer}>
				<h1 className={style.detailRentTitle}>
					<span className={style.detailRentTitleWrap}>
						<span>
							СПИСОК
						</span>
						<img src={arrowBR} alt="arrows" />
						<span>Т<span className={style.accent}>Ц</span></span>
					</span>
					<span>ПОМЕЩЕНИЙ</span>
				</h1>

				<div className={style.descBlock}>
					<img className={style.descBlockImg} src="/images/rent/1.jpg" alt="" />
					<div className={style.descBlockBlockRow}>
						<div className={style.descBlockItem}>
							<h3 className={style.descBlockItemTitle}>#описание</h3>
							<p className={style.descBlockItemText}>«Творческий центр» — это специально выделенный корпус КРСТ для художников, ремесленников и творческих команд. Помещения предназначены для мастерских, фотостудий, залов для йоги и других направлений, которые требуют уединённой и вдохновляющей атмосферы.</p>
						</div>
						<div className={style.descBlocItem}>
							<div className={style.statBlockList}>
								<div className={style.statBlockItem}>
									<div className={style.statBlockNumber}>1 200 м²</div>
									<div className={style.statBlockText}>Площадь корпуса</div>
								</div>

								<div className={style.statBlockItem}>
									<div className={style.statBlockNumber}>150</div>
									<div className={style.statBlockText}>Помещений</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className={style.cardList}>
					{cards.map((card, index) => (
						<Card
							key={card.id}
							data={card}
							reverse={index % 2 === 1}
							btnText="перейти"
							btnAction={() => goToPlace(card.id)}
						>
							{card.text}
						</Card>
					))}
				</div>
			</div>
			
			
        </div>
    );
}
export default DetailRent;