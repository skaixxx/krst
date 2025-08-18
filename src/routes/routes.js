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
        {path: "krst/Home", element: <MainPage/>},
        {path: "krst/History", element: <History/>},
        {path: "krst/Events", element: <Events/>},
        {path: "krst/Locations", element: <Locations/>},
        {path: "krst/Locations/:id", element: <LocationsList/>},
        {path: "krst/Locations/:id/:special", element: <SpecificLocations/>},
        {path: "krst/Rent", element: <Rent/>},
        {path: "krst/Rent/:id", element: <DetailRent/>},
        {path: "krst/Rent/:id/:place", element: <Placement/>},
        {path: "krst/Contacts", element: <Contacts/>},
        {path: "krst/Residence", element: <Residence/>},
        {path: "krst/Events/SpecificEvent/:id", element: <SpecificEvent/>},
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