import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { ListMC } from '../../../data/masterClasses';
import "./MasterClasses2.css";
import Dots from "../../../components/animations/ScaleSlideDots";
import RotatingCross from "../../../components/animations/RotatingCross";
import Card from "../../../components/Card/Сard";
import Filter from '../../../components/Filter/Filter';
import MainRestaraunt from "../../../assets/locations/ListExcursions/mainexcursions.png";


function ListExcursions() {
	const { id } = useParams();
	const navigate = useNavigate();
	const mclass = (mclassesId) => {
		navigate(`/Locations/MasterClasses/ConcretMC/${id}`);
	};
	const [selectedCategories, setSelectedCategories] = useState([]);

	useEffect(() => {
        window.scrollTo(0, 0)
	}, [])

	const categoryGroups = [
		{
			title: 'Мастер-классы',
			categories: [
				'#семейный',
				'#арттерапия',
				'#романтический',
				'#индивидуальный',
				'#длядетей',
			]
		}
	];

	const filteredMasterClasses = selectedCategories.length === 0
  	? ListMC : ListMC.filter(place =>
    	place.categories.some(tagObj => selectedCategories.includes(tagObj.name))
    );
	
    return (
		<div className= "MasterClassesPage">
			<div className="MasterClassesContainer">
				<h1 className="MasterClassesTitle">
					<span className="MasterClassesBlock1">
						<span>
							МАСТЕР  — 
						</span>
						<img src={Dots} alt="Dots" />
					</span>
					<span className="MasterClassesBlock2">
						<img src={RotatingCross} alt="RotatingCross" />
						<span className="accent">КЛАССЫ</span>
					</span>
                    
				</h1>

				<div className="MasterClassesBlock">
					<img className="MasterClassesMain" src={MainRestaraunt} alt="" />
					<div className="MCdescribe">
						<div className="mcmain">
							<h3 className="mcopis">#описание</h3>
							<p className="mcdes">Бывшая тюрьма, ставшая творческим пространством, теперь открыта для мастер-классов по искусству. Здесь, среди исторических стен, профессиональные художники делятся своим опытом, помогая каждому раскрыть творческий потенциал.</p>
						</div>
						<div className="Mcprice">
							<div className="McpriceBlock">
								<div className="mcprice">
									<div className="mcprice1">1 500 ₽</div>
									<div className="mcprice2">Средний чек</div>
								</div>

								<div className="mcprice">
									<div className="mcprice1">15</div>
									<div className="mcprice2">Мест в группе</div>
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

				<div className="MasterClassesFilter">
					{filteredMasterClasses.map((card, index) => (						
						<Card
							key={card.id}
							data={card}
							reverse={index % 2 === 1}
							btnText="перейти"
							btnAction={() => mclass(card.id)}
						>
							{mclass.text}
						</Card>
					))}
				</div>
			</div>
        </div>
    );
}
export default ListExcursions;