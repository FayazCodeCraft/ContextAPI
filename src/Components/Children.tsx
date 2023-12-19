import GrandSon from './GrandSon';
import GrandDaughter from './GrandDaughter';
import { FamilyProps } from '../types/family';

const Children = ({secret}:FamilyProps) => {
  return (
    <div className=" border-2 border-solid border-red-700 pt-2 pl-4">
      <h2>{`Children ${secret.familyName}`}</h2>
      <GrandSon secret={secret}/>
      <GrandDaughter secret={secret} />
    </div>
  );
}

export default Children;