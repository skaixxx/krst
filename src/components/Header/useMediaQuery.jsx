import { useEffect, useState } from "react";

export default function useMediaQuery(query) {
    const [matches, setMatch] = useState(() => 
        typeof window !== 'undefined' ? window.matchMedia(query).matches : false
    );
    useEffect(() => {
        const mediaQuery = window.matchMedia(query);
        const handle = (event) => setMatch(event.matches);

        mediaQuery.addEventListener('change', handle);
        setMatch(mediaQuery.matches);

        return () => mediaQuery.removeEventListener('change', handle);
    }, [query]);

    return matches;
}