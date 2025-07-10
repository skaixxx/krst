import ScaleCrossSlideBracket from "../../components/animations/ScaleCrossSlideBracket/ScaleCrossSlideBracket";
import ScaleSlideDots from "../../components/animations/ScaleSlideDots/ScaleSlideDots";
import RotatingCross from "../../components/animations/RotatingCross/RotatingCross";
import ButtonGoToDesktop from "../../components/Buttons/ButtonGoToDesktop";
import PhotoGallery from "../../components/PhotoCards/PhotoGallery";
import style from "./Locations.module.css"
import { useEffect, useState } from "react";
import Restraunts from "./Lists/Restraunts";

const Locations = () => {

    const galleryPhotos = [
        {
            url: "./images/locations/restaurants.png",
            alt: "Рестораны",
            title: "СПИСОК",
            subtitle: "РЕСТОРАНОВ",
            description: "Вкус, который запомнится: уникальные блюда и атмосфера наших ресторанов!"
        },
        {
            url: "./images/locations/masterClasses.png",
            alt: "Мастер-классы",
            title: "МАСТЕР  —",
            subtitle: "КЛАССЫ",
            description: "Освойте новые навыки и вдохновитесь: вместе с нами вы сможете достичь невероятного!"
        },
        {
            url: "./images/locations/excursions.png",
            alt: "Экскурсии",
            title: "ЭКСКУРСИИ",
            subtitle: "ПО МУЗЕЮ",
            description: "Раскройте тайны прошлого в увлекательных экскурсиях по нашему музею!"
        }
    ];
    
    // Состояние для хранения выбранного индекса
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [displayedIndex, setDisplayedIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (selectedIndex !== displayedIndex) {
            setIsAnimating(true) // Запускаем анимацию
            const timer = setTimeout(() => {
                setDisplayedIndex(selectedIndex);
                setIsAnimating(false);
            }, 300);
        
            return () => clearTimeout(timer);
        }
    }, [selectedIndex, displayedIndex]);

    return(
        <div className={style.fullscreenContainer}>
            <PhotoGallery
                photos={galleryPhotos}
                onPhotoSelect={setSelectedIndex}/>
            <div className={style.contentContainer}>
                <div className={style.titleBlock}>
                    <div className={style.titleWithIcon}>
                        <h1 className={`${style.title} ${isAnimating ? style.fadeOut : style.fadeIn}`}>{galleryPhotos[displayedIndex].title}</h1>
                        {displayedIndex === 0 && (
                            <div className={`${style.icon} ${isAnimating ? style.fadeOut : style.fadeIn}`}>
                                <ScaleCrossSlideBracket/>
                            </div>
                        )}
                    </div>
                    <div className={style.titleWithIcon}>
                        {displayedIndex === 1 && (
                            <div className={`${style.icon} ${isAnimating ? style.fadeOut : style.fadeIn}`} style={{width: window.innerWidth <= 768 ? "5rem" : "9rem"}}>
                                <ScaleSlideDots/>
                            </div> // !!!
                        )}
                        {displayedIndex === 2 && (
                            <div className={`${style.icon} ${isAnimating ? style.fadeOut : style.fadeIn}`}>
                                <RotatingCross/>
                            </div>
                        )}
                        <h1 className={`${style.subtitle} ${isAnimating ? style.fadeOut : style.fadeIn}`}>{galleryPhotos[displayedIndex].subtitle}</h1>
                    </div> 
                </div>
                <div className={style.textContainer}>
                    <p className={`${style.description} ${isAnimating ? style.fadeOut : style.fadeIn}`}>
                        {galleryPhotos[displayedIndex].description} 
                    </p>
                    <ButtonGoToDesktop text="перейти"/>                        
                </div>            
            </div>
        </div>
    )  
}

export default Locations;