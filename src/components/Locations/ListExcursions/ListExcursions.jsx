import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { ListLE } from '../../../data/listExcursions';
import "./ListExcursions2.css";
import Dots from "../../../components/animations/ScaleSlideDots";
import RotatingCross from "../../../components/animations/RotatingCross";
import Card from "../../../components/Card/Сard";
import Filter from '../../../components/Filter/Filter';
import MainExcursion from "../../../assets/locations/ListExcursions/mainexcursions.png";


function ListExcursions() {
	const { id } = useParams();
	const navigate = useNavigate();
	const excursion = (excursionId) => {
		navigate(`/Locations/ListExcursions/ConcretLE/${id}`);
	};
	const [selectedCategories, setSelectedCategories] = useState([]);

	useEffect(() => {
        window.scrollTo(0, 0)
	}, [])

	const categoryGroups = [
		{
			title: 'Экскурсии',
			categories: [
				'#аудиогид',
				'#дневная',
				'#беседа',
				'#экспресс',
				'#вечерняя',
				'#пешая',
				'#интерактивная',
				'#квест',
			]
		}
	];

	const filteredExcursions = selectedCategories.length === 0
  	? ListLE : ListLE.filter(place =>
    	place.categories.some(tagObj => selectedCategories.includes(tagObj.name))
    );
	
    return (
		<div className= "ListExcursionPage">
			<div className="ListExcursionContainer">
				<h1 className="ListExcursionTitle">
					<span className="ListExcursionBlock1">
						<span>
							СПИСОК
						</span>
						<img src={Dots} alt="Dots" />
					</span>
					<span className="ListExcursionBlock2">
						<img src={RotatingCross} alt="RotatingCross" />
						<span className="accent">ЭКСКУРСИЙ</span>
					</span>
                    
				</h1>

				<div className="ListExcursionBlock">
					<img className="ListExcursionMain" src={MainExcursion} alt="" />
					<div className="LEdescribe">
						<div className="lemain">
							<h3 className="leopis">#описание</h3>
							<p className="ledes">"КРСТ" — уникальное пространство, где история встречается с современным искусством. Бывшая тюрьма, сохранившая дух прошлого, теперь центр творчества и культуры. Наши экскурсии раскрывают истории этих стен через искусство, архитектуру и городские легенды.</p>
						</div>
						<div className="Leprice">
							<div className="LepriceBlock">
								<div className="leprice">
									<div className="leprice1">4 часа</div>
									<div className="leprice2">Средняя продолжительность</div>
								</div>

								<div className="leprice">
									<div className="leprice1">10 +</div>
									<div className="leprice2">Уникальных маршрутов</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<Filter
					categories={categoryGroups}
					selectedCategories={selectedCategories}
					onChange={setSelectedCategories}
				></Filter>

				<div className="ListExcursionsFilter">
					{filteredExcursions.map((card, index) => (						
						<Card
							key={card.id}
							data={card}
							reverse={index % 2 === 1}
							btnText="перейти"
							btnAction={() => excursion(card.id)}
						>
							{excursion.text}
						</Card>
					))}
				</div>
			</div>
        </div>
    );
}
export default ListExcursions;