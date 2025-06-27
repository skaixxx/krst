import { useEffect, useRef, useState } from "react";

export function useContainerWidth() {
  const ref = useRef(null);
  const [width, setWidth] = useState(() => window.innerWidth); // Стартовое приближённое значение

  useEffect(() => {
    if (ref.current) {
      setWidth(ref.current.offsetWidth);
    }

    const handleResize = () => {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return [ref, width];
}
