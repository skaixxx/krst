import ButtonGoToDesktop from "../Buttons/ButtonGoToDesktop"
import style from "./CardLocations.module.css"
export default function CardLocations({ data, btnText, btnAction }) {
    return (
        <div className={style.card}>
            <div className={style.cardImageContainer}>
                <img src={data.image} alt={data.title} className={style.cardImage}/>
            </div>
            <div className={style.cardContent}>
                <div className={style.cardTitleBox}>
                    <p className={style.cardTitle}>{data.title}</p>
                </div>
                <div className={style.cardTagsBox}>
                        {data.tags.map((tag, index) => (
                        <div key={index} className={style.cardTag}>
                            <p className={style.cardTagText}>{tag.name}</p>
                        </div>
                        ))}
                        
                </div>
                <div className={style.cardTextBox}>
                    <p className={style.cardText}>{data.text}</p>
                </div>
                <div className={style.bottomRow}>
                    <div className={style.cardButtonBox}>
                        <ButtonGoToDesktop text={btnText} action={btnAction}/>
                    </div>
                    <div className={style.minInfoBox}>
                        <div className={style.priceBox}>
                            <img src={data.cardIcon1} alt="icon1" className={style.cardIcon}/>
                            <p className={style.priceText}>{data.price}</p>
                        </div>
                        <div className={style.subBox}>
                            <img src={data.cardIcon2} alt="icon2" className={style.cardIcon}/>
                            <p className={style.subText}>{data.sub}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}