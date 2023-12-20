
import Children from './Children';
import { FamilyProps } from '../types/family';

const Parent = ({secret}:FamilyProps) => {
  return (
    <div className="border-4 border-solid border-black p-2">
      <h1>{`Parent ${secret.familyName}`}</h1>
      <p>{secret.onlyParentCanSee()}</p>
      <Children secret = {secret}/>
    </div>
  );
}

export default Parent;