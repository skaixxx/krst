import { useNavigate, useParams } from "react-router"
import style from "./LocationsList.module.css"
import NotFound from "../../404/NotFound";
import clsx from "clsx";
import RotatingCross from "../../../components/animations/RotatingCross/RotatingCross";
import ScaleSlideDotsInverted from "../../../components/animations/ScaleSlideDots/ScaleSlideDotsInverted";
import Card from "../../../components/Card/Сard";
import Filter from "../../../components/Filter/Filter";
import { useEffect, useState } from "react";
import { DataPick } from "../../../components/Locations/DataPick";
import CardLocations from "../../../components/Locations/CardLocations";
export default function LocationsList() {
    useEffect(() => {
            window.scrollTo(0, 0)
    }, [])
    const [selectedTags, setSelectedTags] = useState([]);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const data = {
        restraunts: {
            title:"",
            tag: "#ОПИСАНИЕ",
            description: "В КРСТ представлены рестораны на любой вкус — от уютных кафе до премиальных заведений. Здесь вы легко найдете место для деловой встречи, семейного ужина или дружеских посиделок.",
            title: "СПИСОК",
            subtitle: "РЕСТОРАНОВ",
            picture: "/images/locations/Restraunts/restrauntsMainPhoto.png",
            price: "2 500 ₽",
            priceDescription: "Средний чек",
            places: "65",
            placesDescription: "Заведений",
            buttonText: "забронировать"
        },
        masterClasses: {
            title:"",
            tag: "#ОПИСАНИЕ",
            description: "Бывшая тюрьма, ставшая творческим пространством, теперь открыта для мастер-классов по искусству. Здесь, среди исторических стен, профессиональные художники делятся своим опытом, помогая каждому раскрыть творческий потенциал.",
            title: "МАСТЕР  —",
            subtitle: "КЛАССЫ",
            picture: "/images/locations/MasterClasses/MasterClassesMainPhoto.png",
            price: "1 500 ₽",
            priceDescription: "Средний чек",
            places: "15",
            placesDescription: "Мест в группе",
            buttonText: "записаться"
        },
        excursions: {
            title:"",
            tag: "#ОПИСАНИЕ",
            description: "КРСТ — уникальное пространство, где история встречается с современным искусством. Бывшая тюрьма, сохранившая дух прошлого, теперь центр творчества и культуры. Наши экскурсии раскрывают истории этих стен через искусство, архитектуру и городские легенды.",
            title: "ЭКСКУРСИИ",
            subtitle: "ПО МУЗЕЮ",
            picture: "/images/locations/Excursions/ExcursionsMainPhoto.png",
            price: "4 часа",
            priceDescription: "Средняя продолжительность",
            places: "10 +",
            placesDescription: "Уникальных маршрутов",
            buttonText: "купить"
        }
    }
    const { id } = useParams();
    const someData = DataPick(id);
    const navigate = useNavigate()
    const handleNavigation = ( id, special) => {
        navigate(`/Locations/${id}/${special}`)
    }
    const UniqueTags = [
    ...new Set(someData.flatMap(obj => obj.tags.map(tag =>  tag.name)))
    ];
    const TagGroup = [
        {
            title: "",
            tags: {UniqueTags}
        }
    ]
    console.log("Tags:", TagGroup)
    const current = data[id];
    if (!current) {
        return <NotFound/>
    }
    const filteredPlaces = UniqueTags.length === 0
    ? someData
    : someData.filter(someData =>
        someData.tags.some(tagObj => UniqueTags.includes(tagObj.name))
    );
    return (
        <div className={style.container}>
            <div className={style.titleContainer}>
                <div className={style.titleRow1}>
                    <p className={clsx(style.titleText1, style.titleText)}>
                        {current.title}
                    </p>
                    <div className={style.titleAnimationContainer1}>
                        <ScaleSlideDotsInverted/>
                    </div>
                </div>
                <div className={style.titleRow2}>
                    <div className={style.titleAnimationContainer2}>
                        <RotatingCross/>
                    </div>
                    <p className={clsx(style.titleText2, style.titleText)}>
                        {current.subtitle}
                    </p>
                </div>
            </div>
            <div className={style.fullscreenPicContainer}>
                <img src={current.picture} alt={current.subtitle} className={style.fullscreenPic}/>
            </div>
            <div className={style.descriptionRow}>
                <div className={style.descriptionBox1}>
                    <p className={style.descriptionTitle}>{current.tag}</p>
                    <p className={style.descriptionText}>{current.description}</p>
                </div>
                <div className={style.descriptionRowCol1}>
                    <div className={style.descriptionBox2}>
                        <p className={style.descriptionPrice}>{current.price}</p>
                        <p className={style.descriptionPriceSub}>{current.priceDescription}</p>
                    </div>
                    <div className={style.descriptionBox3}>
                        <p className={style.descriptionPlaces}>{current.places}</p>
                        <p className={style.descriptionPlacesSub}>{current.placesDescription}</p>
                    </div>
                </div>
            </div>
            <div className={style.cardsList}>
                <Filter
                    tags={TagGroup}
                    selectedTags={selectedTags}
                    onChange={setSelectedTags}
                    isOpen={isFilterOpen}
                    onToggle={setIsFilterOpen}
                >
                </Filter>
				<div className={style.cardList}>
                    {filteredPlaces.map((card, index)  => (
                        <CardLocations
							key={card.id}
							data={card}
                            float= {(index % 3) + 1}
							btnText={current.buttonText}
							btnAction={() => handleNavigation( id, card.special)}
						>
						</CardLocations>
                    ))}				
				</div>
            </div>
        </div>
    )
}