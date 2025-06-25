import PhotoGallery from "../PhotoCards/PhotoGallery";
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
        </div>
    )  
}

export default Locations;