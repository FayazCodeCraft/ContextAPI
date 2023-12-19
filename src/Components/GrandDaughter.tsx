import { FamilyProps } from "../types/family";

const GrandDaughter = ({secret}:FamilyProps) => {
  
    return (    
      <div className="border-2 border-solid border-pink-700 m-2 p-2">
        <h3>{`Granddaughter ${secret.familyName}`}</h3>
        <p>{secret.onlyGrandChildrenShouldKnow()}</p>
      </div>
    );
  }
  
  export default GrandDaughter;