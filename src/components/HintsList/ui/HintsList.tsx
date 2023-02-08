import { observer } from 'mobx-react';
import { Image } from 'ui/Image';
import { v4 as uuidv4 } from 'uuid';
import { IHint } from '../types/Hint';
import './HintsList.scss';

interface HintsListProps {
  hints: IHint[];
  hintLimit?: number;
  onCountryClick?: (country: IHint) => void;
}

export const HintsList = observer(({ hints, onCountryClick, hintLimit = 0 }: HintsListProps) => (
  <ul className='HintsList'>
    {hints.map((hint, index) => (
      <li
        role='presentation'
        onClick={() => {
          onCountryClick?.(hint);
        }}
        onKeyDown={() => {
          onCountryClick?.(hint);
        }}
        key={uuidv4()}
        className={hintLimit <= index ? 'd-none' : 'HintsList__item'}
      >
        {hint.name} - ({hint.fullName})
        <Image src={hint.flag} alt={hint.name} />
      </li>
    ))}
  </ul>
));
