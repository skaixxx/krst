import { useState } from "react";
import style from "./PhotoGallery.module.css"

const PhotoGallery = ({photos = [], imageWidth = "18.8rem", imageHeight = "14rem"}) => {
    
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleImageClick = (index) => {
        setSelectedIndex(index);
    }
    
    const calculateSize = (index) => {
        if (index === selectedIndex) {
            return {
                width: `calc(${imageWidth} * 1.2)`,
                height: `calc(${imageHeight} * 1.2)`,
            };
        }
        return {
            width: imageWidth,
            height: imageHeight
        };
    }

    const calculatePosition = (index) =>  {
        if (window.innerWidth <= 768){
            
            const totalPhotos = photos.length;
            let offset = index - selectedIndex;

            // Зацикливание для первого и последнего элемента
            if (selectedIndex === 0 && index === totalPhotos - 1){
                offset = -1;
            } else if (selectedIndex === totalPhotos - 1 && index === 0){
                offset = 1;
            }
            
            switch(offset) {
                case 0:
                    return {
                        transform: "translateX(0)",
                        zIndex: "2"
                    };
                case -1:
                    return {
                        transform: "translateX(-50%)",
                        zIndex: "1"
                    };
                case 1:
                    return {
                        transform: "translateX(50%)",
                        zIndex: "1"
                    };
                default:
                    return {
                        display: "none"
                    };
            }
        }
        return {};
    }
    
    return(
        <div className={style.gallery} style={{ height: `calc(${imageHeight} * 1.1)` }}>
        {
            photos.map((photo, index) => (
                <div
                    key={index}
                    onClick={() => handleImageClick(index)}
                    className={style.container}
                    style={calculatePosition(index)}    
                    >
                    <img
                        src={photo.url}
                        alt={photo.alt || `Фото ${index + 1}`}
                        className={style.image}
                        style={calculateSize(index)}
                        />
                </div>
            ))
        }
        </div>
    );
}

export default PhotoGallery