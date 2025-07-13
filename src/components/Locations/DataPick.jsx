import { restraunts } from "../../data/restraunts";
import { excursions } from "../../data/excursions";
import { masterClasses } from "../../data/masterClasses";
export function DataPick(id) {
    const map = {
        restraunts,
        masterClasses,
        excursions,
    }
    return map[id] || []
}