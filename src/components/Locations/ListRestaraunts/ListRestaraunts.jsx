import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { ListLR } from '../../../data/listRestaraunts';
import "./ListRestaunts2.css";
import Dots from "../../../components/animations/ScaleSlideDots";
import RotatingCross from "../../../components/animations/RotatingCross";
import Card from "../../../components/Card/Сard";
import Filter from '../../../components/Filter/Filter';
import MainRestaraunt from "../../../assets/locations/ListRestaraunts/mainRestaraunts.png";


function ListRestaraunts() {
	const { id } = useParams();
	const navigate = useNavigate();
	const restaurant = (restarauntId) => {
		navigate(`/Locations/ListRestaraunts/ConcretLR/${id}`);
	};
	const [selectedCategories, setSelectedCategories] = useState([]);

	useEffect(() => {
        window.scrollTo(0, 0)
	}, [])

	const categoryGroups = [
		{
			title: 'Рестораны',
			categories: [
				'#семейный',
				'#европейская',
				'#грузинская',
				'#завтраки',
				'#авторская',
				'#китайская',
				'#детскоеменю',
			]
		}
	];

	const filteredRestaraunts = selectedCategories.length === 0
  	? ListLR
  	: ListLR.filter(place =>
    	place.categories.some(tagObj => selectedCategories.includes(tagObj.name))
    );
	
    return (
		<div className= "ListRestarauntPage">
			<div className="ListRestarauntContainer">
				<h1 className="ListRestarauntTitle">
					<span className="ListRestarauntBlock1">
						<span>
							СПИСОК
						</span>
						<img src={Dots} alt="Dots" />
					</span>
					<span className="ListRestarauntBlock2">
						<img src={RotatingCross} alt="RotatingCross" />
						<span className="accent">РЕСТОРАНОВ</span>
					</span>
                    
				</h1>

				<div className="ListRestarauntBlock">
					<img className="ListRestarauntMain" src={MainRestaraunt} alt="" />
					<div className="LRdescribe">
						<div className="lrmain">
							<h3 className="lropis">#описание</h3>
							<p className="lrdes">В КРСТ представлены рестораны на любой вкус — от уютных кафе до премиальных заведений. Здесь вы легко найдете место для деловой встречи, семейного ужина или дружеских посиделок.</p>
						</div>
						<div className="Lrprice">
							<div className="LrpriceBlock">
								<div className="lrprice">
									<div className="lrprice1">2 500 ₽</div>
									<div className="lrprice2">Средний чек</div>
								</div>

								<div className="lrprice">
									<div className="lrprice1">65</div>
									<div className="lrprice2">Заведений</div>
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

				<div className="ListRestarauntsFilter">
					{filteredRestaraunts.map((card, index) => (						
						<Card
							key={card.id}
							data={card}
							reverse={index % 2 === 1}
							btnText="перейти"
							btnAction={() => restaurant(card.id)}
						>
							{restaurant.text}
						</Card>
					))}
				</div>
			</div>
        </div>
    );
}
export default ListRestaraunts;