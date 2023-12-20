import React from 'react'
import {FamilyContext} from "./FamilyContext.ts"

interface FamilyContextProviderProps{
    children:React.ReactNode;
}
export function FamilyContextProvider({children}:FamilyContextProviderProps) {
  const familySecret={
    familyName:"xyz",
    onlyParentCanSee:()=>{
      return `The xyz are the best!`;
    },
    onlyGrandChildrenShouldKnow: () => {
      return `They are the best!`;
    }
  }

  return (
    <FamilyContext.Provider value={familySecret}>
      {children}
    </FamilyContext.Provider>
  )
}

export default FamilyContextProvider
