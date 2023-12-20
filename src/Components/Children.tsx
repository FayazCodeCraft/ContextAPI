import GrandSon from './GrandSon';
import GrandDaughter from './GrandDaughter';
import { useFamilyContext } from '../context/FamilyContext';
// import { FamilyProps } from '../types/family';

const Children = () => {
  const secret = useFamilyContext()
  return (
    <div className=" border-2 border-solid border-red-700 pt-2 pl-4">
      <h2>{`Children ${secret.familyName}`}</h2>
      <GrandSon />
      <GrandDaughter/>
    </div>
  );
}

export default Children;