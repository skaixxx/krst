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
        <p>{data[activeIndex].name}</p>
        <p>{data[activeIndex].description}</p>
        <p>{data[activeIndex].year}</p>
      </div>
    </div>
  );
}