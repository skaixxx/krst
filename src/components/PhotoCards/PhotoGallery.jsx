import { useEffect, useState } from "react";
import style from "./PhotoGallery.module.css"
import clsx from "clsx";

const PhotoGallery = ({
    photos = [],
    isMonochrome = false,
    desktopSize = { width: "18.8rem", height: "14rem" },
    mobileSize = { width: "13rem", height: "11rem" },
    onPhotoSelect }) => {
    
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [windowWidth, setWindowWidth]     = useState(window.innerWidth);
    const isMobile = windowWidth <= 768;
    
    // Добавляем обработчик изменения размера окна
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);        
        }

        window.addEventListener('resize', handleResize);

        // Убираем обработчик при размонтировании компонента
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    const handleImageClick = (index) => {
        setSelectedIndex(index);
        // Вызываем функцию обратного вызова, если она предоставлена
        if(onPhotoSelect) {
            onPhotoSelect(index);
        }
    }
    
    const calculateSize = (index) => {
        
        const {width, height } = isMobile ? mobileSize : desktopSize;

        if (index === selectedIndex) {
            return {
                width: `calc(${width} * 1.2)`,
                height: `calc(${height} * 1.2)`,
                filter: "grayscale(0%)",
            };
        }
        return {
            width: width,
            height: height
        };
    }
    const calculatePosition = (index) =>  {
        if (windowWidth <= 768){
            
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
                        filter: "grayscale(0%)",
                        boxShadow: "0 0 6px 4px rgba(0, 0, 0, 0.35)",
                        transform: "translateX(0)",
                        zIndex: "2"
                    };
                case -1:
                case 1:
                    return {
                        transform: offset === -1 ? `translateX(calc(-${windowWidth / 2}px + 50% + 1.5rem))` : `translateX(calc(${windowWidth / 2}px - 50% - 1.5rem))`,
                        boxShadow: "none",
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
        <div
            className={style.gallery}
            style={{ 
                height: isMobile
                    ? `calc(${mobileSize.height} * 1.2)`
                    : `calc(${desktopSize.height} * 1.2)`       
            }}>
        {
            photos.map((photo, index) => (
                <div
                    key={index}
                    onClick={() => handleImageClick(index)}
                    className={isMonochrome ? clsx(style.monochrome, style.container) : style.container}
                    style={{
                        ...calculatePosition(index),
                        ...calculateSize(index)
                    }}    
                >
                    <img
                        src={photo.url}
                        alt={photo.alt || `Фото ${index + 1}`}
                        className={style.image}
                    />
                </div>
            ))
        }
        </div>
    );
}

export default PhotoGallery