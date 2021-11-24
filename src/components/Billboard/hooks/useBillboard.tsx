import {useContext} from "react";
import {BillboardContext} from "../billboard.context";


export const useBillboardContext = () => {
    return useContext(BillboardContext);
}

