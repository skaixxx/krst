import { Route, Routes } from "react-router";
import MainPage from "../components/MainPage/MainPage"
import History from "../components/History/History"
import Events from "../components/Events/Events"
import Locations from "../components/Locations/Locations"
import Rent from "../components/Rent/Rent"
import Contacts from "../components/Contacts/Contacts"
import Residence from "../components/Residence/Residence"
import SpecificEvent from "../components/Events/SpecificEvent/SpecificEvent";
import NotFound from "../components/404/NotFound";
import { DataProvider } from "./DataContext";
const AppRoutes = () => {
    const navbar = [
        {path: "/", element: <MainPage/>},
        {path: "/History", element: <History/>},
        {path: "/Events", element: <Events/>},
        {path: "/Rent", element: <Rent/>},
        {path: "/Contacts", element: <Contacts/>},
        {path: "/Residence", element: <Residence/>},
        {path: "/Events/SpecificEvent/:id", element: <SpecificEvent/>},
        {path: "*", element:<NotFound/>}
    ]
    return (
        <DataProvider>
        <Routes>
            {navbar.map((route) =>(
                <Route key={route.path} path={route.path} element={route.element}/>
            ))}
        </Routes>
        </DataProvider>
        );
};
export default AppRoutes;
