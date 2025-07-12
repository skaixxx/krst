import { Route, Routes } from "react-router";
import MainPage from "../pages/MainPage/MainPage"
import History from "../pages/History/History"
import Events from "../pages/Events/Events"
import Locations from "../pages/Locations/Locations";
import Rent from "../pages/Rent/Rent"
import DetailRent from "../pages/Rent/DetailRent/DetailRent"
import Placement from "../pages/Rent/Placement/Placement";
import Contacts from "../pages/Contacts/Contacts"
import Residence from "../pages/Residence/Residence"
import SpecificEvent from "../pages/Events/SpecificEvent/SpecificEvent";
import NotFound from "../pages/404/NotFound";
import LocationsList from "../pages/Locations/Lists/LocationsList";
import SpecificLocations from "../pages/Locations/SpecificLocations/SpecificLocations";
const AppRoutes = () => {
    const navbar = [
        {path: "/", element: <MainPage/>},
        {path: "/History", element: <History/>},
        {path: "/Events", element: <Events/>},
        {path: "/Locations", element: <Locations/>},
        {path: "/Locations/:id", element: <LocationsList/>},
        {path: "/Locations/:id/:special", element: <SpecificLocations/>},
        {path: "/Rent", element: <Rent/>},
        {path: "/Rent/:id", element: <DetailRent/>},
        {path: "/Rent/:id/:place", element: <Placement/>},
        {path: "/Contacts", element: <Contacts/>},
        {path: "/Residence", element: <Residence/>},
        {path: "/Events/SpecificEvent/:id", element: <SpecificEvent/>},
        {path: "*", element:<NotFound/>}
    ]
    return(
        <Routes>
            {navbar.map((route) =>(
                <Route key={route.path} path={route.path} element={route.element}/>
            ))}
        </Routes>
        );
};
export default AppRoutes;