import { useParams } from "react-router"
import style from "./LocationsList.module.css"
import NotFound from "../../404/NotFound";
import { picture } from "framer-motion/client";
import clsx from "clsx";



export default function LocationsList() {
    const data = {
        Restraunts: {
            tag: "#ОПИСАНИЕ",
            description: "В КРСТ представлены рестораны на любой вкус — от уютных кафе до премиальных заведений. Здесь вы легко найдете место для деловой встречи, семейного ужина или дружеских посиделок.",
            title: "СПИСОК",
            subtitle: "РЕСТОРАНОВ",
            picture: "/images/locations/Restraunts/restrauntsMainPhoto.png",
            price: "2 500 ₽",
            priceDescription: "Средний чек",
            places: "65",
            placesDescription: "Заведений"
        },
        MasterClasses: {
            tag: "#ОПИСАНИЕ",
            description: "Бывшая тюрьма, ставшая творческим пространством, теперь открыта для мастер-классов по искусству. Здесь, среди исторических стен, профессиональные художники делятся своим опытом, помогая каждому раскрыть творческий потенциал.",
            title: "МАСТЕР  —",
            subtitle: "КЛАССЫ",
            picture: "/images/locations/MasterClasses/MasterClassesMainPhoto.png",
            price: "1 500 ₽",
            priceDescription: "Средний чек",
            places: "15",
            placesDescription: "Мест в группе"
        },
        Exquisites: {
            tag: "#ОПИСАНИЕ",
            description: "КРСТ — уникальное пространство, где история встречается с современным искусством. Бывшая тюрьма, сохранившая дух прошлого, теперь центр творчества и культуры. Наши экскурсии раскрывают истории этих стен через искусство, архитектуру и городские легенды.",
            title: "ЭКСКУРСИИ",
            subtitle: "ПО МУЗЕЮ",
            picture: "/images/locations/Exquisites/ExquisitesMainPhoto.png",
            price: "4 часа",
            priceDescription: "Средняя продолжительность",
            places: "10 +",
            placesDescription: "Уникальных маршрутов"
        }
    }
    const { id } = useParams();
    const current = data[id];
    if (!current) {
        return <NotFound/>
    }
    return (
        <div className={style.container}>
            <div className={style.titleContainer}>
                <div className={style.titleRow1}>
                    <p className={clsx(style.titleText1, style.titleText)}>
                        {current.title}
                    </p>
                </div>
                <div className={style.titleRow2}>
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
            <div className={style.filterRow}>
                filter here
            </div>
        </div>
    )
}