import { Route, Routes } from "react-router";
import { LocationProvider } from "./LocationsContext";
import Locations from "../components/Locations/Locations"
import SpecificLocations from "../components/Locations/SpecificLocations/SpecificLocations"
const LocationRoutes = () => {
    const navbar = [
        {path: "/Locations", element: <Locations/>},
        {path: "/Locations/:id", element: <SpecificLocations/>},
    ]
    return (
        <LocationProvider>
        <Routes>
            {navbar.map((route) =>(
                <Route key={route.path} path={route.path} element={route.element}/>
            ))}
        </Routes>
        </LocationProvider>
        );
};
export default LocationRoutes;