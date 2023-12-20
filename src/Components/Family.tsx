
import { FamilyProps } from '../types/family';
import Parent from './Parent';

const Family = ({secret}:FamilyProps) => {
  return (
    <div className="flex justify-center">
      <Parent secret={secret}/>
    </div>
  );
}

export default Family;