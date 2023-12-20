import { FamilyProps } from "../types/family";

const GrandSon = ({secret}:FamilyProps) => {
    return (
      <div className="border-2 border-solid border-blue-700 m-1 p-2">
        <h3>{`Grandson ${secret.familyName}`}</h3>
        <p>{secret.onlyGrandChildrenShouldKnow()}</p>
      </div>
    );
  }
  
  export default GrandSon;