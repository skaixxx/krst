import React, { useEffect, useRef, useState } from "react";
import style from "./HistoryCorouselStyle.module.css";

const Carousel = ({ children }) => {
    const refContainer = useRef(null);
    const [activeIndicator, setActiveIndicator] = useState(0);
    const [isDrag, setIsDrag] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const handleMouseDown = (e) => {
            setIsDrag(true);
            setStartX(e.pageX - refContainer.current.offsetLeft);
            setScrollLeft(refContainer.current.scrollLeft);
    };
    const handleMouseEnd = () => {
        setIsDrag(false);
    };
    const handleMouseUp = () => {
        setIsDrag(false);
    };
    const handleMouseMove = (e) => {
        if (!isDrag) return;
        e.preventDefault();
        const x = e.pageX - refContainer.current.offsetLeft;
        const move = (x - startX) * 1.5;
        refContainer.current.scrollLeft = scrollLeft - move;
    }
    const handleScroll = () => {
        const container = refContainer.current;
        const center = container.scrollLeft + container.offsetWidth / 2;
        const itemNodes = Array.from(container.children);
        const closeIndex = itemNodes.reduce((closest, item, i) => {
            const box = item.getBoundingClientRect();
            const itemCenter = box.left + box.width / 2;
            const distance = Math.abs(itemCenter - window.innerWidth / 2);
            return distance < closest.distance ? {index: i, distance } : closest;
        }, {index:0, distance: Infinity}).index;

        setActiveIndicator(closeIndex);
    };
    useEffect(() => {
        const container = refContainer.current;
        container.addEventListener('scroll', handleScroll, {passive: true});

        return () => container.removeEventListener('scroll', handleScroll);
    }, []);
    
    return (
    <div 
        className={style.carousel}
        ref={refContainer}
        onScroll={handleScroll}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseEnd}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        >
            {React.Children.map(children, (children, i) => (
                <div key={i} className={`${style.item} ${i === activeIndicator ? style.active : ''}`}>
                    {children}
                </div>
            ))}
    </div>
    );
}
export default Carousel;