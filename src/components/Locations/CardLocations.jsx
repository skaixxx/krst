import ButtonGoToDesktop from "../Buttons/ButtonGoToDesktop"
import useMediaQuery from "../Header/useMediaQuery"
import style from "./CardLocations.module.css"
export default function CardLocations({ data, float, btnText, btnAction }) {
    const varClass = style[`variant${float}`]
    const isMobile = useMediaQuery('(max-width: 768px)');
    return (
        <div className={`${style.card} ${varClass}`}>
            <div className={`${style.cardImageContainer} ${varClass}`}>
                <img src={data.image} alt={data.title} className={style.cardImage}/>
            </div>
            <div className={`${style.cardContent} ${varClass}`}>
                <div className={style.cardTitleBox}>
                    <p className={`${style.cardTitle} ${varClass}`}>{data.title}</p>
                </div>
                <div className={`${style.cardTagsBox} ${varClass}`}>
                        {data.tags.map((tag, index) => (
                        <div key={index} className={`${style.cardTag} ${varClass}`}>
                            <p className={style.cardTagText}>{tag.name}</p>
                        </div>
                        ))}
                </div>
                <div className={`${style.cardTextBox} ${varClass}`}>
                    <p className={style.cardText}>{data.text}</p>
                </div>
                <div className={style.bottomRow}>
                    <div className={style.cardButtonBox}>
                        <ButtonGoToDesktop text={btnText} action={btnAction}/>
                    </div>
                    <div className={`${style.minInfoBox} ${varClass}`}>
                        <div className={`${style.priceBox} ${varClass}`}>
                            <img src={isMobile? data.cardIcon1Mobile:data.cardIcon1Desktop} alt="icon1" className={style.cardIcon}/>
                            <p className={style.priceText}>{data.price}</p>
                        </div>
                        <div className={`${style.subBox} ${varClass}`}>
                            <img src={isMobile? data.cardIcon2Mobile:data.cardIcon2Desktop} alt="icon2" className={style.cardIcon}/>
                            <p className={style.subText}>{data.subText2}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}