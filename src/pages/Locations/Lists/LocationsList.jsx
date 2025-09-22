import { useNavigate, useParams } from "react-router"
import style from "./LocationsList.module.css"
import NotFound from "../../404/NotFound";
import clsx from "clsx";
import RotatingCross from "../../../components/animations/RotatingCross/RotatingCross";
import ScaleSlideDotsInverted from "../../../components/animations/ScaleSlideDots/ScaleSlideDotsInverted";
import Filter from "../../../components/Filter/Filter";
import { useEffect, useState } from "react";
import { DataPick } from "../../../components/Locations/DataPick";
import CardLocations from "../../../components/Locations/CardLocations";
import useMediaQuery from "../../../components/Header/useMediaQuery";
import { useTranslation } from "../../../hooks/useTranslation";
export default function LocationsList() {
    useEffect(() => {
            window.scrollTo(0, 0)
    }, [])
    const t = useTranslation();
    const [selectedTags, setSelectedTags] = useState([]);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width: 768px)');
    const data = {
        restaurants: {
            tag: {ru: "#ОПИСАНИЕ", en: "#DESCRIPTION"},
            description: {ru: "В КРСТ представлены рестораны на любой вкус — от уютных кафе до премиальных заведений. Здесь вы легко найдете место для деловой встречи, семейного ужина или дружеских посиделок.",
                en: "KRST offers restaurants for every taste, from cozy cafes to premium establishments. Here you can easily find a place for a business meeting, a family dinner or friendly gatherings."
            },
            title: {ru: "СПИСОК", en: "LIST"},
            subtitle: {ru: "РЕСТОРАНОВ", en: "OF RESTAURANTS"},
            picture: `${process.env.PUBLIC_URL}/images/locations/Restaurants/restrauntsMainPhoto.png`,
            price: {ru: "2 500 ₽", en: "2 500 ₽"},
            priceDescription: {ru: "Средний чек", en: "Average receipt"},
            places: "65",
            placesDescription: {ru: "Заведений", en: "Establishments"},
            buttonText: {ru: "забронировать",
                en: "to book"
            }
        },
        masterClasses: {
            tag: {ru: "#ОПИСАНИЕ", en: "#DESCRIPTION"},
            description: {ru: "Бывшая тюрьма, ставшая творческим пространством, теперь открыта для мастер-классов по искусству. Здесь, среди исторических стен, профессиональные художники делятся своим опытом, помогая каждому раскрыть творческий потенциал.",
                en: "The former prison, which has become a creative space, is now open for art workshops. Here, among the historical walls, professional artists share their experiences, helping everyone unlock their creative potential."
            },
            title: {ru: "МАСТЕР  —", en: "MASTER  —"},
            subtitle: {ru: "КЛАССЫ", en: "CLASSES"},
            picture: `${process.env.PUBLIC_URL}/images/locations/MasterClasses/MasterClassesMainPhoto.png`,
            price: {ru: "1 500 ₽", en: "1 500 ₽"},
            priceDescription: {ru: "Средний чек", en: "Average receipt"},
            places: "15",
            placesDescription: {ru: "Мест в группе", en: "Places in the group"},
            buttonText: {ru: "записаться",
                en: "sign up"
            }
        },
        excursions: {
            tag: {ru: "#ОПИСАНИЕ", en: "#DESCRIPTION"},
            description: {ru: "КРСТ — уникальное пространство, где история встречается с современным искусством. Бывшая тюрьма, сохранившая дух прошлого, теперь центр творчества и культуры. Наши экскурсии раскрывают истории этих стен через искусство, архитектуру и городские легенды.",
                en: "KRST is a unique space where history meets modern art. A former prison that preserved the spirit of the past, it is now a center of creativity and culture. Our guided tours reveal the stories of these walls through art, architecture, and urban legends."
            },
            title: {ru: "ЭКСКУРСИИ", en: "MUSEUM"},
            subtitle: {ru: "ПО МУЗЕЮ", en: "TOURS"},
            picture: `${process.env.PUBLIC_URL}/images/locations/Excursions/ExcursionsMainPhoto.png`,
            price: {ru: "4 часа", en: "4 hours"},
            priceDescription: {ru: "Средняя продолжительность", en: "Average duration"},
            places: "10 +",
            placesDescription: {ru: "Уникальных маршрутов", en: "Unique routes"},
            buttonText: {ru: "купить",
                en: "buy"
            }
        }
    }
    const { id } = useParams();
    const someData = DataPick(id);
    const navigate = useNavigate()
    const handleNavigation = ( id, special) => {
        navigate(`/Locations/${id}/${special}`)
    }
    const UniqueTags = [
    ...new Set(someData.flatMap(obj => obj.tags.map(tag =>  t(tag.name))))
    ];
    const TagGroup = [
        {
            title: "",
            tags: UniqueTags
        }
    ]
    const current = data[id];
    if (!current) {
        return <NotFound/>
    }
    const filteredPlaces = selectedTags.length === 0
    ? someData
    : someData.filter(someData =>
        someData.tags.some(tagObj => selectedTags.includes(t(tagObj.name)))
    );

    return (
        <div className={style.container}>
            <div className={style.titleContainer}>
                {isMobile ? 
                    <div className={style.titleRow1}>
                        <p className={clsx(style.titleText1, style.titleText)}>
                            {t(current.title)}
                        </p>
                        {current.title === "СПИСОК" &&
                            <div className={style.titleAnimationContainer1}>
                                <ScaleSlideDotsInverted/>
                            </div>
                        }
                    </div>
                
                :
                    <div className={style.titleRow1}>
                        <p className={clsx(style.titleText1, style.titleText)}>
                            {t(current.title)}
                        </p>
                        <div className={style.titleAnimationContainer1}>
                            <ScaleSlideDotsInverted/>
                        </div>
                    </div>
            }
            {isMobile ? 
            
                <div className={style.titleRow2}>
                    <p className={clsx(style.titleText2, style.titleText)}>
                        {t(current.subtitle)}
                    </p>
                    {(t(current.subtitle) === "КЛАССЫ" || t(current.subtitle) === "ЭКСКУРСИИ") &&
                        <div className={style.titleAnimationContainer2}>
                            <ScaleSlideDotsInverted/>
                        </div>
                    }
                </div>
                :
                <div className={style.titleRow2}>
                    <div className={style.titleAnimationContainer2}>
                        <RotatingCross/>
                    </div>
                    <p className={clsx(style.titleText2, style.titleText)}>
                        {t(current.subtitle)}
                    </p>
                </div>
              }  
            </div>
            
            <div className={style.fullscreenPicContainer}>
                <img src={current.picture} alt={current.subtitle} className={style.fullscreenPic}/>
            </div>
            <div className={style.descriptionRow}>
                <div className={style.descriptionBox1}>
                    <p className={style.descriptionTitle}>{t(current.tag)}</p>
                    <p className={style.descriptionText}>{t(current.description)}</p>
                </div>
                <div className={style.descriptionRowCol1}>
                    <div className={style.descriptionBox2}>
                        <p className={style.descriptionPrice}>{t(current.price)}</p>
                        <p className={style.descriptionPriceSub}>{t(current.priceDescription)}</p>
                    </div>
                    <div className={style.descriptionBox3}>
                        <p className={style.descriptionPlaces}>{current.places}</p>
                        <p className={style.descriptionPlacesSub}>{t(current.placesDescription)}</p>
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
                            float= {isMobile? 1 : (index % 3) + 1}
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