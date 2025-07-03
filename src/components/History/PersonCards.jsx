import {useState} from "react";
import styles from "./PersonCardsStyle.module.css";
import PhotoGallery from "../PhotoCards/PhotoGallery";

export default function CarouselContent({data}) {
  const [activeIndex, setActiveIndex] = useState(0);
if (data.length === 0) return <div>Загрузка...</div>;
  return (
    <div className={styles.wrapper}>
     <PhotoGallery photos={data} onPhotoSelect={setActiveIndex} isMonochrome={true}/>
      <div className={styles.underPhotoContent}>
        <div className={styles.column1}>
          <p className={styles.cardYear}>{data[activeIndex].year}</p>
          <p className={styles.cardTitle}>{data[activeIndex].name}</p>
        </div>
        <div className={styles.column2}>
          <p className={styles.cardParagraph}>{data[activeIndex].description}</p>
        </div>
      </div>
    </div>
  );
}