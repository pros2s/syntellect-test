import { observer } from 'mobx-react';
import { Image } from 'ui/Image';
import { Loader } from 'ui/Loader';
import { v4 as uuidv4 } from 'uuid';
import { IHint } from '../types/Hint';
import './HintsList.scss';

interface HintsListProps {
  hints: IHint[];
  isHintsLoading?: boolean;
  hintLimit?: number;
  onCountryClick?: (country: IHint) => void;
}

export const HintsList = observer(
  ({ hints, onCountryClick, isHintsLoading, hintLimit = 0 }: HintsListProps) => (
    <ul className={`HintsList ${isHintsLoading && 'ai-center w-100'}`}>
      {isHintsLoading ? (
        <Loader size={100} />
      ) : (
        <>
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
              <Image className='HintsList__img' src={hint.flag} alt={hint.name} />
              <p>
                {hint.name} - ({hint.fullName})
              </p>
            </li>
          ))}
        </>
      )}
    </ul>
  )
);
