import React, { useRef, useEffect, useState } from "react";
import styles from "./HistoryCarouselStyle.module.css";

const Carousel = ({ items }) => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionLength = items.length;

  const extendedItems = [...items, ...items, ...items];

  const dragStartX = useRef(0);
  const scrollStartX = useRef(0);
  const isDragging = useRef(false);

  // При монтировании ставим прокрутку на центральный клон первого элемента
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const centerCloneIndex = sectionLength; // центральный клон первого элемента
    const centerItem = container.children[centerCloneIndex];
    if (!centerItem) return;

    const containerCenter = container.offsetWidth / 2;
    const itemBox = centerItem.getBoundingClientRect();
    const containerBox = container.getBoundingClientRect();
    const itemCenter = itemBox.left - containerBox.left + itemBox.width / 2;

    const scrollOffset = itemCenter - containerCenter;

    container.scrollLeft += scrollOffset;

    setActiveIndex(0);
  }, [sectionLength]);

  const updateActiveIndex = () => {
    const container = containerRef.current;
    if (!container) return;

    const children = Array.from(container.children);
    const containerCenter = container.offsetWidth / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    children.forEach((child, index) => {
      const box = child.getBoundingClientRect();
      const containerBox = container.getBoundingClientRect();
      const childCenter = box.left - containerBox.left + box.width / 2;
      const distance = Math.abs(childCenter - containerCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex % sectionLength);
  };

  // Обработчик прокрутки
  const handleScroll = () => {
    updateActiveIndex();
  };

  // Drag and Swipe handlers
  const onMouseDown = (e) => {
    isDragging.current = true;
    dragStartX.current = e.pageX;
    scrollStartX.current = containerRef.current.scrollLeft;
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    const deltaX = e.pageX - dragStartX.current;
    containerRef.current.scrollLeft = scrollStartX.current - deltaX;
  };

  const onMouseUp = (e) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    updateActiveIndex();
  };

  const onTouchStart = (e) => {
    isDragging.current = true;
    dragStartX.current = e.touches[0].pageX;
    scrollStartX.current = containerRef.current.scrollLeft;
  };

  const onTouchMove = (e) => {
    if (!isDragging.current) return;
    const deltaX = e.touches[0].pageX - dragStartX.current;
    containerRef.current.scrollLeft = scrollStartX.current - deltaX;
  };

  const onTouchEnd = (e) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    updateActiveIndex();
  };

  // Клик по элементу — скроллим и активируем
  const handleClick = (index, id) => {
    const container = containerRef.current;
    if (!container) return;

    const child = container.children[index];
    const containerCenter = container.offsetWidth / 2;
    const childBox = child.getBoundingClientRect();
    const containerBox = container.getBoundingClientRect();
    const childCenter = childBox.left - containerBox.left + childBox.width / 2;
    const scrollOffset = childCenter - containerCenter;

    container.scrollLeft += scrollOffset;

    setActiveIndex(index % sectionLength);

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
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={{ userSelect: isDragging.current ? "none" : "auto" }}
      >
        {extendedItems.map((item, index) => {
          const trueIndex = index % sectionLength;
          const isActive = trueIndex === activeIndex;

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
                cursor: "pointer",
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