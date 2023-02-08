import { memo } from 'react';
import { Image } from 'ui/Image';
import { v4 as uuidv4 } from 'uuid';
import { IHint } from '../types/Hint';
import './HintsList.scss';

interface HintsListProps {
  hints: IHint[];
}

export const HintsList = memo(({ hints }: HintsListProps) => (
  <ul className='HintsList'>
    {hints.map((hint) => (
      <li key={uuidv4()}>
        {hint.name} - ({hint.fullName}) - {hint.flag}
        <Image src={hint.flag} alt={hint.name} />
      </li>
    ))}
  </ul>
));
