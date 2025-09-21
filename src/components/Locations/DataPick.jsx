import { restaurants } from "../../data/restaurants";
import { excursions } from "../../data/excursions";
import { masterClasses } from "../../data/masterClasses";
export function DataPick(id) {
    const map = {
        restaurants,
        masterClasses,
        excursions,
    }
    return map[id] || []
}