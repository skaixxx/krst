import style from "./rent.module.css"
import arrowBR from "../../assets/mainPage/arrowsBR.svg"
// import arrowMP from "../../assets/mainPage/arrowsMP.svg"


function Rent() {
    return (
        <div className={style.rentPage}>
            <div className={style.rentPageContainer}>
                <h1 className={style.rentPageTitle}>
                    <span>
                        АРЕНДА У НАС
                        <img src={arrowBR} alt="arrows"/>
                    </span>
                    <span>ЛЕГКО И БЫСТРО</span>
                </h1>

                <div className={style.rentPageBlock}>
                    <img className={style.rentPageBlockImg} src="/images/rent/1.jpg" alt="" />
                    <div className={style.rentPageBlockRow}>
                        <div className={style.rentPageBlockItem}>
                            <h3 className={style.rentPageBlockItemTitle}>#преимущества</h3>
                            <p className={style.rentPageBlockItemText}>Аренда помещения в общественном пространстве КРСТ — это уникальная возможность для вашего бизнеса, творчества или мероприятий.</p>
                        </div>
                        <div className={style.rentPageBlockItem}>
                            <h3 className={style.rentPageBlockItemTitle}>#среда</h3>
                            <p className={style.rentPageBlockItemText}>Мы создали идеальную среду, где комфорт и функциональность сочетаются с вдохновением и инновациями.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="specific-event-stroke-container">
                <div className="specific-event-stroke-element">
                    <span className="specific-event-stroke-term">4,17</span>
                    <p>гектара<br/> общая площадь</p>
                </div>
                <div className="specific-event-stroke-element">
                    <span className="specific-event-stroke-term">50</span>
                    <p>кол-во<br/> помещений</p>
                </div>
                <div className="specific-event-stroke-element">
                    <span className="specific-event-stroke-term">16</span>
                    <p>кол-во<br/> зданий</p>
                </div>
            </div>

            <div className={`${style.rentPageContainer} ${style.cardsContainer}`}>
                <div className={style.cards}>
                    <div className={style.card}>
                        <div className={style.cardImage}>
                            <img src="/images/rent/photo-1.png" alt="" />
                        </div>
                        <div className={style.cardContent}>
                            <div className={style.cardHeader}>
                                <div className={style.cardNumber}>1</div>
                                <div className={style.cardTitle}>кулинарный корпус</div>
                            </div>
                            <div className={style.cardArea}>
                                <div className={style.cardAreaInner}>
                                    общая площадь <span>44 839 м²</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.card}>
                        <div className={style.cardImage}>
                            <img src="/images/rent/photo-2.png" alt="" />
                        </div>
                        <div className={style.cardContent}>
                            <div className={style.cardHeader}>
                                <div className={style.cardNumber}>2</div>
                                <div className={style.cardTitle}>творческий центр</div>
                            </div>
                            <div className={style.cardArea}>
                                <div className={style.cardAreaInner}>
                                    общая площадь <span>7 320 м²</span></div>
                                </div>
                        </div>
                    </div>
                    <div className={style.card}>
                        <div className={style.cardImage}>
                            <img src="/images/rent/photo-3.png" alt="" />
                        </div>
                        <div className={style.cardContent}>
                            <div className={style.cardHeader}>
                                <div className={style.cardNumber}>3</div>
                                <div className={style.cardTitle}>территория движения</div>
                            </div>
                            <div className={style.cardArea}>
                                <div className={style.cardAreaInner}>
                                    общая площадь <span>8 540 м²</span></div>
                                </div>
                        </div>
                    </div>
                    <div className={style.card}>
                        <div className={style.cardImage}>
                            <img src="/images/rent/photo-4.png" alt="" />
                        </div>
                        <div className={style.cardContent}>
                            <div className={style.cardHeader}>
                                <div className={style.cardNumber}>4</div>
                                <div className={style.cardTitle}>центр развития</div>
                            </div>
                            <div className={style.cardArea}>
                                <div className={style.cardAreaInner}>
                                    общая площадь <span>5 360 м²</span></div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Rent;