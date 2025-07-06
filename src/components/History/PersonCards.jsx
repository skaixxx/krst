import {useEffect, useState} from "react";
import styles from "./PersonCardsStyle.module.css";
import PhotoGallery from "../PhotoCards/PhotoGallery";

export default function CarouselContent({data}) {
  
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

  if (data.items.length === 0) return <div>Загрузка...</div>;
  
  return (
    <div className={styles.wrapper}>
      <PhotoGallery 
        photos={data.items}
        onPhotoSelect={setSelectedIndex}
        isMonochrome={true}
        desktopSize={data.desktopSize}
      />
      <div className={styles.underPhotoContent}>
        <div className={styles.column1}>
          <p className={`${styles.cardYear} ${isAnimating ? styles.fadeOut : styles.fadeIn}`}>{data.items[displayedIndex].year}</p>
          <p className={`${styles.cardTitle} ${isAnimating ? styles.fadeOut : styles.fadeIn}`}>{data.items[displayedIndex].name}</p>
        </div>
        <div className={styles.column2}>
          <p className={`${styles.cardParagraph} ${isAnimating ? styles.fadeOut : styles.fadeIn}`}>{data.items[displayedIndex].description}</p>
        </div>
      </div>
    </div>
  );
}