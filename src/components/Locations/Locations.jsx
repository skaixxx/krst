import "./Locations.css"
import "../general.css";
import { useNavigate } from "react-router";
import { useEffect } from "react";


function Locations() {
    const navigate = useNavigate();
    useEffect(() => {
        navigate(`/Locations/restraunts`)
    }, [navigate]);
           
    return null;
}
export default Locations;


// function Locations() {
//     const { items } = useData();
//         const navigate = useNavigate();
//         const handleClick = (id) => {
//                 navigate(`/Locations/SpecificLocations/${id}`)
//         }
    //  console.log("Data: ", items);
    // if (!items || items.length === 0) {
    //     return <p>Данные загружаются...</p>
    // };
    // return (
//     <div className="grid-container-locations">
//     {items.map((item) =>(
//     <a className={`locationsCard${item.id}`} key={item.id} onClick={() => handleClick(item.id)} style={{
//         backgroundImage: `url(${item.image})`,
//         backgroundPosition: "center",
//         backgroundSize: "cover",
//         //width: `23,5 rem`,
//         //height: `17,5 rem`,
//         cursor: "pointer"
//     }}> 
//     </a>

    
//         ))}

//     </div>
    
         
//              );
// }
// export default Locations;