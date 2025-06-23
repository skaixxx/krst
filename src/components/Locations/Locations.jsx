import PhotoGallery from "./PhotoGallery";

const Locations = () => {

    const galleryPhotos = [
        {url: './images/locations/restaurants.png', alt: 'Рестораны'},
        {url: './images/locations/masterClasses.png', alt: 'Мастер-классы'},
        {url: './images/locations/excursions.png', alt: 'Экскурсии'}
    ];
    
    return(
        <PhotoGallery
            photos={galleryPhotos}/>
    )  
}

export default Locations;