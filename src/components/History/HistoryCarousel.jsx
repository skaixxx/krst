import React, { useRef, useEffect, useState } from "react";
import styles from "./HistoryCarouselStyle.module.css";

const Carousel = ({ items }) => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionLength = items.length;
  const extendedItems = [...items, ...items, ...items];
  const pos = useRef({
    isDragging: false,
    startX: 0,
    scrollLeft: 0,
  });

  useEffect(() => {
    const container = containerRef.current;
    const initialScroll = container.scrollWidth / 3 - container.offsetWidth / 2;
    container.scrollLeft = initialScroll;
    updateActiveIndex();

    const onMouseDown = (e) => {
      pos.current.isDragging = true;
      pos.current.startX = e.pageX - container.offsetLeft;
      pos.current.scrollLeft = container.scrollLeft;
      container.style.cursor = "grabbing";
      e.preventDefault();
    };

    const onMouseMove = (e) => {
      if (!pos.current.isDragging) return;
      const x = e.pageX - container.offsetLeft;
      const walk = (pos.current.startX - x) * 1; // скорость прокрутки
      container.scrollLeft = pos.current.scrollLeft + walk;
    };

    const onMouseUp = () => {
      if (!pos.current.isDragging) return;
      pos.current.isDragging = false;
      container.style.cursor = "grab";
      updateActiveIndex();
    };

    const onTouchStart = (e) => {
      pos.current.isDragging = true;
      pos.current.startX = e.touches[0].pageX - container.offsetLeft;
      pos.current.scrollLeft = container.scrollLeft;
    };

    const onTouchMove = (e) => {
      if (!pos.current.isDragging) return;
      const x = e.touches[0].pageX - container.offsetLeft;
      const walk = (pos.current.startX - x) * 1;
      container.scrollLeft = pos.current.scrollLeft + walk;
    };

    const onTouchEnd = () => {
      pos.current.isDragging = false;
      updateActiveIndex();
    };

    container.addEventListener("mousedown", onMouseDown);
    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseup", onMouseUp);
    container.addEventListener("mouseleave", onMouseUp);
    container.addEventListener("touchstart", onTouchStart, { passive: true });
    container.addEventListener("touchmove", onTouchMove, { passive: true });
    container.addEventListener("touchend", onTouchEnd);
    container.style.cursor = "grab";

    return () => {
      container.removeEventListener("mousedown", onMouseDown);
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseup", onMouseUp);
      container.removeEventListener("mouseleave", onMouseUp);
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchmove", onTouchMove);
      container.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  const updateActiveIndex = () => {
    const container = containerRef.current;
    const children = Array.from(container.children);
    const center = container.scrollLeft + container.offsetWidth / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    children.forEach((child, index) => {
      const box = child.getBoundingClientRect();
      const containerBox = container.getBoundingClientRect();
      const childCenter = box.left - containerBox.left + box.width / 2;
      const distance = Math.abs(childCenter - container.offsetWidth / 2);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  const handleScroll = () => {
    updateActiveIndex();
  };

  const handleClick = (index, id) => {
    const container = containerRef.current;
    const child = container.children[index];
    const containerCenter = container.offsetWidth / 2;
    const childBox = child.getBoundingClientRect();
    const containerBox = container.getBoundingClientRect();
    const childCenter = childBox.left - containerBox.left + childBox.width / 2;
    const scrollOffset = childCenter - containerCenter;
    container.scrollLeft += scrollOffset;

    setTimeout(() => {
      const target = document.querySelector(`${id}`);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.decorativeLine} />
      <div
        className={styles.carousel}
        ref={containerRef}
        onScroll={handleScroll}
      >
        {extendedItems.map((item, index) => {
          const trueIndex = index % sectionLength;
          const isActive = activeIndex === index;

          return (
            <a
              key={index}
              href={`#${item.id}`}
              className={styles.card}
              onClick={(e) => {
                e.preventDefault();
                handleClick(index, item.id);
              }}
              style={{
                transform: `scale(${isActive ? 1 : 0.75})`,
                transition: "transform 0.3s ease",
              }}
            >
              <div
                className={`${styles.indicator} ${
                  isActive ? styles.active : ""
                }`}
              />
              <div className={styles.content}>
                <p className={styles.title}>{item.title}</p>
                <p className={styles.text}>{item.text}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;