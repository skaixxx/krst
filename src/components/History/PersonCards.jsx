import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import styles from "./PersonCardsStyle.module.css";
import { useContainerWidth } from "./useContainerWidth";

export default function CarouselContent() {
  const [data, setData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [containerRef, containerWidth] = useContainerWidth();

  // Загрузка данных
  useEffect(() => {
    fetch('/data/history/famousPeople.json')
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Ошибка загрузки JSON:", err));
  }, []);
if (data.length === 0) return <div>Загрузка...</div>;

  const k = 1.29;
  const n = data.length;
  const baseWidth = containerWidth / (n + 0.95);
  const activeWidth = baseWidth * k;

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageContainer} ref={containerRef}>
        {data.map((item, index) => (
          <div
            key={item.id}
            className={`${styles.imageWrapper} ${
              index === activeIndex ? styles.active : ""
            }`}
            style={{
              width: index === activeIndex ? activeWidth : baseWidth,
              height: index === activeIndex ? (activeWidth / 1.18) : (baseWidth / 1.18) ,
              transition: "all 0.3s ease",
            }}
            onClick={() => setActiveIndex(index)}
          >
            <img src={item.picture} alt={item.title} className={styles.image} />
          </div>
        ))}
      </div>

      <div className={styles.content}>
        <div className={styles.contentCol1}>
          <p className={styles.cardTitle}>{data[activeIndex].name}</p>
          <p className={styles.cardYear}>{data[activeIndex].year}</p>
        </div>
        <div className={styles.contentCol2}>
          <p>{data[activeIndex].description}</p>
        </div>
      </div>
    </div>
  );
}