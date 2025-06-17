import { useLocations } from "../../../routes/LocationsContext";
import "./SpecificLocations.css";
import { useEffect, useState } from "react";

function SpecificLocations() {
    let { locData } = useLocations();
    console.log(locData)
    const [selectedLocationId, setSelectedLocationId] = useState("restraunts");
    const selectedLocation = locData.find((loc) => loc.id === selectedLocationId);
      useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
    <div>
    <div className="specific-location">
            {locData.map((loc) => (
                <div
                key={loc.id}
                className={`card ${loc.id === selectedLocationId ? "active" : ""}`} 
                onClick={() => setSelectedLocationId(loc.id)}
                >
                <p>{loc.title1}</p>
                <p>{loc.title2}</p>
                </div>
            ))}
            </div>
            <div className="details">
                <p>{selectedLocation.title1}</p>
            </div>
    </div>
    );
    
}

export default SpecificLocations;