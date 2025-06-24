import { useState } from "react";
import "./PhotoGallery.css"

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
    
    return(
        <div className="gallery" style={{ height: `calc(${imageHeight} * 1.1)` }}>
        {
            photos.map((photo, index) => (
                <div key={index} onClick={() => handleImageClick(index)}>
                    <img
                        src={photo.url}
                        alt={photo.alt || `Фото ${index + 1}`}
                        className="image"
                        style={calculateSize(index)}
                        />
                </div>
            ))
        }
        </div>
    );
}

export default PhotoGallery