import ScaleCrossSlideBracket from "../../components/animations/ScaleCrossSlideBracket/ScaleCrossSlideBracket";
import ScaleSlideDots from "../../components/animations/ScaleSlideDots/ScaleSlideDots";
import RotatingCross from "../../components/animations/RotatingCross/RotatingCross";
import ButtonGoToDesktop from "../../components/Buttons/ButtonGoToDesktop";
import PhotoGallery from "../../components/PhotoCards/PhotoGallery";
import style from "./Locations.module.css"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useTranslation } from "../../hooks/useTranslation";

const Locations = () => {
    
    const galleryPhotos = [
        {
            title: {ru: "СПИСОК",
                en: "LIST"
            },
            subtitle: {ru: "РЕСТОРАНОВ",
                en: "RESTRAUNTS"
            },
            id: "restraunts",
            url: "/images/locations/restaurants.png",
            alt: "Рестораны",
            description: {ru: "Вкус, который запомнится: уникальные блюда и атмосфера наших ресторанов!",
                en: "A taste that will be remembered: the unique dishes and atmosphere of our restaurants!"
            }
        },
        {
            title: {ru: "МАСТЕР  —",
                en: "MASTER  —"
            },
            subtitle: {ru: "КЛАССЫ",
                en: "CLASSES"
            },
            id: "masterClasses",
            url: "/images/locations/masterClasses.png",
            alt: "Мастер-классы",
            description: {ru: "Освойте новые навыки и вдохновитесь: вместе с нами вы сможете достичь невероятного!",
                en: "Learn new skills and get inspired: together with us you can achieve incredible things!"
            }
        },
        {
            title: {ru: "ЭКСКУРСИИ",
                en: "MUSEUM"
            },
            subtitle: {ru: "ПО МУЗЕЮ",
                en: "TOURS"
            },
            id: "excursions",
            url: "/images/locations/excursions.png",
            alt: "Экскурсии",
            description: {ru: "Раскройте тайны прошлого в увлекательных экскурсиях по нашему музею!",
                en: "Discover the secrets of the past on fascinating tours of our museum!"
            }
        }
        
    ];
    const t = useTranslation(galleryPhotos);
    const navigate = useNavigate();
    // Состояние для хранения выбранного индекса
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [displayedIndex, setDisplayedIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    // eslint-disable-next-line
    const [actualId, setActualId] = useState("");
    
    const handleNavigation = () => {
        const activeCard = galleryPhotos[displayedIndex];
        navigate(`/Locations/${activeCard.id}`)
    }
    useEffect(() => {
        if (selectedIndex !== displayedIndex) {
            setIsAnimating(true) // Запускаем анимацию
            const timer = setTimeout(() => {
                setDisplayedIndex(selectedIndex);
                setIsAnimating(false);
                setActualId(galleryPhotos[displayedIndex].id)
            }, 300);
        
            return () => clearTimeout(timer);
        }
        // eslint-disable-next-line
    }, [selectedIndex, displayedIndex]);

    return(
        <div className={style.fullscreenContainer}>
            <PhotoGallery
                photos={galleryPhotos}
                onPhotoSelect={setSelectedIndex}/>
            <div className={style.contentContainer}>
                <div className={style.titleBlock}>
                    <div className={style.titleWithIcon}>
                        <h1 className={`${style.title} ${isAnimating ? style.fadeOut : style.fadeIn}`}>{t(galleryPhotos[displayedIndex].title)}</h1>
                        {displayedIndex === 0 && (
                            <div className={`${style.icon} ${isAnimating ? style.fadeOut : style.fadeIn}`}>
                                <ScaleCrossSlideBracket/>
                            </div>
                        )
                        }
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
                        <h1 className={`${style.subtitle} ${isAnimating ? style.fadeOut : style.fadeIn}`}>{t(galleryPhotos[displayedIndex].subtitle)}</h1>
                    </div> 
                </div>
                <div className={style.textContainer}>
                    <p className={`${style.description} ${isAnimating ? style.fadeOut : style.fadeIn}`}>
                        {t(galleryPhotos[displayedIndex].description)} 
                    </p>
                    <ButtonGoToDesktop text="перейти" action={handleNavigation}/>                        
                </div>            
            </div>
        </div>
    )  
}

export default Locations;