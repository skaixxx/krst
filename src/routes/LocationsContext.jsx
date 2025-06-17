import { createContext, useContext, useState } from "react";

const locationsData = [
    {
        id: "restraunts",
        title: "СПИСОК РЕСТОРАНОВ",
        title1:"СПИСОК",
        //animation:RotatingCross,
        image: "./images/locations/restaraunt.png",
        title2:"РЕСТОРАНОВ",
        paragraph: "День, который точно запомнится: яркие активности, креативные идеи и море эмоций ждут на наших мероприятиях!"
    },
    {
        id: "masters",
        title: "МАСТЕР-КЛАССЫ", 
        title1:"МАСТЕР - ",
        //animation:ScaleCrossSlideBracket,  
        image: "./images/locations/paint.png",
        title2:"КЛАССЫ", 
        paragraph: "Освойте новые навыки и вдохновитесь: вместе с нами вы сможете достичь невероятного!"
    },
    {
        id: "Exquisite",
        title: "ЭКСКУРСИИ ПО МУЗЕЮ",    
        title1:"ЭКСКУРСИИ",
        //icon:krst,
        image: "./images/locations/prison.png",
        title2:"ПО МУЗЕЮ", 
        paragraph: "Раскройте тайны прошлого в увлекательных экскурсиях по нашему музею!"
    },
];

const LocationsContext = createContext();

export function LocationProvider({ children }) {
     const [ base, setBase] = useState(locationsData);
    return (
       <LocationsContext.Provider value={{ base, setBase }}>
           {children}
        </LocationsContext.Provider>
    )
}
    

export function useLocations() {
    const context = useContext(LocationsContext);
    console.log(context)
    return context;
};