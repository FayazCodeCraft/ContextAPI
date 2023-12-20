
// import { useContext } from 'react';
import Children from './Children';
import { useFamilyContext } from '../context/FamilyContext';
// import { FamilyProps } from '../types/family';

const Parent = () => {
  // const secret=useContext(FamilyContext)
  const secret = useFamilyContext()
  return (
    <div className="border-4 border-solid border-black p-2">
      <h1>{`Parent ${secret.familyName}`}</h1>
      <p>{secret.onlyParentCanSee()}</p>
      <Children/>
    </div>
  );
}

export default Parent;