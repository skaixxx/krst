import { useEffect, useState } from "react";
import style from "./FamousPersonCardsStyle.module.css"

const FamousCards = () => {
        const [cards, setCards] = useState([]);
        const [activeCard, setActiveCard] = useState(null);

        useEffect(() => {
            fetch('/data/history/famousPeople.json')
            .then((res) => res.json())
            .then((data) => {
                if (Array.isArray(data) && data.length > 0 && data[0]?.id !== undefined) {
                    setCards(data);
                    setActiveCard(data[0].id);
                } else
                console.warn('Bad data', data)
            })
            .then((err) => console.error('Wrong JSON', err));
        }, []);
        return (
            <div className={style.rowContainer}>
                        <div className={style.cards} >
                        {cards.map((card) => (
                            <div 
                            className={`${style.card} ${activeCard.id === card.id ? style.active : ''}`}
                            key={card.id}
                            onClick={() => setActiveCard(card)}>
                                <img src={card.picture} alt={card.name} className={style.picture}/>
                            </div>
                        ))}
                        </div>
                        {activeCard && (
                            <div className={style.personInfoBlock}>
                                <div className={style.col1}>
                                    <div className={style.personName}>
                                        <p className={style.personNameText}>{activeCard.name}</p>
                                    </div>
                                    <div className={style.personYear}>
                                        <p className={style.personYearText}>{activeCard.year}</p>
                                    </div>
                                </div>
                                <div className={style.personDescription}>
                                    <p>{activeCard.description}</p>
                                </div>
                            </div>
                        )}
                
                
            </div>
        );
    };
export default FamousCards;