
import { FamilyProps } from '../types/family';
import Parent from './Parent';

const Family = ({secret}:FamilyProps) => {
  console.log(secret)
  return (
    <div className="flex justify-center">
      <Parent secret={secret}/>
    </div>
  );
}

export default Family;