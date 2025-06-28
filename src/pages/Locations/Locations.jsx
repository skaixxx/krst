import { useState } from "react";
import ScaleCrossSlideBracket from "../../components/animations/ScaleCrossSlideBracket/ScaleCrossSlideBracket";
import ButtonGoToDesktop from "../../components/Buttons/ButtonGoToDesktop";
import PhotoGallery from "../../components/PhotoCards/PhotoGallery";
import style from "./Locations.module.css"


const Locations = () => {

    const galleryPhotos = [
        {
            url: './images/locations/restaurants.png',
            alt: 'Рестораны',
            description: "Вкус, который запомнится: уникальные блюда и атмосфера наших ресторанов!"
        },
        {
            url: './images/locations/masterClasses.png',
            alt: 'Мастер-классы',
            description: "Освойте новые навыки и вдохновитесь: вместе с нами вы сможете достичь невероятного!"
        },
        {
            url: './images/locations/excursions.png',
            alt: 'Экскурсии',
            description: "Раскройте тайны прошлого в увлекательных экскурсиях по нашему музею!"
        }
    ];
    
    // Состояние для хранения выбранного индекса
    const [selectedIndex, setSelectedIndex] = useState(0)

    return(
        <div className={style.fullscreenContainer}>
            <PhotoGallery
                photos={galleryPhotos}
                onPhotoSelect={setSelectedIndex}/>
            <div className={style.contentContainer}>
                <div className={style.titleBlock}>
                    <div className={style.titleWithIcon}>
                        <h1 className={style.title}>СПИСОК</h1>
                        <div className={style.icon}>
                            <ScaleCrossSlideBracket key={selectedIndex}/>
                        </div>
                    </div>
                    <h1 className={style.subtitle}>РЕСТОРАНОВ</h1>
                </div>
                <div className={style.textContainer}>
                    <p className={style.description}>
                        {galleryPhotos[selectedIndex].description} 
                    </p>
                    <ButtonGoToDesktop text="перейти"/>                        
                </div>            
            </div>
        </div>
    )  
}

export default Locations;