// import { FamilyProps } from "../types/family";

import { useFamilyContext } from "../context/FamilyContext";

const GrandDaughter = () => {
  const secret = useFamilyContext()
    return (    
      <div className="border-2 border-solid border-pink-700 m-2 p-2">
        <h3>{`Granddaughter ${secret.familyName}`}</h3>
        <p>{secret.onlyGrandChildrenShouldKnow()}</p>
      </div>
    );
  }
  
  export default GrandDaughter;