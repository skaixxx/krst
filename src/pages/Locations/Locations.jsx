import ScaleCrossSlideBracket from "../../components/animations/ScaleCrossSlideBracket/ScaleCrossSlideBracket";
import ButtonGoToDesktop from "../../components/Buttons/ButtonGoToDesktop";
import PhotoGallery from "../../components/PhotoCards/PhotoGallery";
import style from "./Locations.module.css"


const Locations = () => {

    const galleryPhotos = [
        {url: './images/locations/restaurants.png', alt: 'Рестораны'},
        {url: './images/locations/masterClasses.png', alt: 'Мастер-классы'},
        {url: './images/locations/excursions.png', alt: 'Экскурсии'}
    ];
    
    return(
        <div className={style.fullscreenContainer}>
            <PhotoGallery
                photos={galleryPhotos}/>
            <div className={style.contentContainer}>
                <div className={style.titleBlock}>
                    <div className={style.titleWithIcon}>
                        <h1 className={style.title}>СПИСОК</h1>
                        <div className={style.icon}>
                            <ScaleCrossSlideBracket/>
                        </div>
                    </div>
                    <h1 className={style.subtitle}>РЕСТОРАНОВ</h1>
                </div>
                <div className={style.textContainer}>
                    <p className={style.description}>День, который точно запомниться: яркие активности, креативные идеи и море эмоций ждут 
на наших мероприятиях! 
                        </p>
                    <ButtonGoToDesktop text="перейти"/>                        
                </div>            
            </div>
        </div>
    )  
}

export default Locations;