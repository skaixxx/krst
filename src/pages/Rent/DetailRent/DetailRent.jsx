import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { places } from '../../../data/places';
import style from "./detailRent.module.css";
import arrowBR from "../../../assets/mainPage/arrowsBR.svg"
import Card from "../../../components/Card/Сard";
import ScaleSlideDotsInverted from '../../../components/animations/ScaleSlideDots/ScaleSlideDotsInverted';
import Filter from '../../../components/Filter/Filter';


function DetailRent() {
	const { id } = useParams();
	const navigate = useNavigate();
	const goToPlace = (placeId) => {
		navigate(`/rent/${id}/${placeId}`);
	};
	const [selectedTags, setSelectedTags] = useState([]);

	useEffect(() => {
        window.scrollTo(0, 0)
	}, [])

	const tagGroups = [
		{
			title: 'Удобства',
			tags: [
				'#проектор',
				'#гардеробная',
				'#зонаочистки',
				'#шкафы',
				'#декор',
				'#высокиепотолки',
				'#трековаясистема',
				'#кондиционер',
				'#звукоизоляция',
				'#зеркала',
				'#аудиосистема',
			]
		}
	];

	const filteredPlaces = selectedTags.length === 0
  	? places
  	: places.filter(place =>
    	place.tags.some(tagObj => selectedTags.includes(tagObj.name))
    );
	
    return (
		<div className={style.detailRent}>
			<div className={style.detailRentContainer}>
				<h1 className={style.detailRentTitle}>
					<span className={style.detailRentTitleWrap}>
						<span>
							СПИСОК
						</span>
						<span className={style.detailRentAnimation}>
							<ScaleSlideDotsInverted></ScaleSlideDotsInverted>
						</span>
						{/* <img src={arrowBR} alt="arrows" /> */}
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

				<Filter
					tags={tagGroups}
					selectedTags={selectedTags}
					onChange={setSelectedTags}
				></Filter>

				<div className={style.cardList}>
					{filteredPlaces.map((card, index) => (						
						<Card
							key={card.id}
							data={card}
							reverse={index % 2 === 1}
							btnText="арендовать"
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