import { restraunts } from "../../data/Restraunts";
import { exquisites } from "../../data/exquisites";
import { masterClasses } from "../../data/masterClasses";
import Locations from "../../pages/Locations/Locations";
export function DataPick(id) {
    const map = {
        restraunts,
        masterClasses,
        exquisites,
    }
    return map[id] || []
}