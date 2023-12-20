import { createContext, useContext } from "react";
import { FamilySecret } from "../types/family";

export const FamilyContext=createContext<FamilySecret|undefined>(undefined)

export function useFamilyContext(){
    const secret=useContext(FamilyContext)
    if(secret===undefined){
        throw new Error("useFamilyContext must be used within FamilyContextProvider")
    }
    return secret

}