import React, { useEffect, useRef, useState } from "react";
import style from "./HistoryCorouselStyle.module.css";

const Carousel = ({ children }) => {
    const refContainer = useRef(null);
    const [activeIndicator, setActiveIndicator] = useState(0);

    const handleScroll = () => {
        const container = refContainer.current;
        const center = container.scrollLeft + container.offsetWidth / 2;
        const itemNodes = Array.from(container.children);
        const closeIndex = itemNodes.reduce((closest, item, i) => {
            const box = item.getBoundingClientReact();
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
    
    return <div className={style.carousel} ref={refContainer}>
        {React.Children.map(children, (children, i) => (
            <div key={i} className={`${style.item} ${i === activeIndicator ? style.active : ''}`}>
                {children}
            </div>
        ))}
    </div>
}
export default Carousel;