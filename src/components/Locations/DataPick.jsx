import { restraunts } from "../../data/Restraunts";
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