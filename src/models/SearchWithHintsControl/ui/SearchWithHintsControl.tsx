import { HintsList } from 'components/HintsList';
import { useCallback } from 'react';
import { Input } from 'ui/Input';
import { Input as InputInstance } from 'models/ButtonsControl';
import { observer } from 'mobx-react';
import { Hints } from '../store/Hints';

interface SearchWithHintsControlProps {
  inputStore: InputInstance;
  hintsStore: Hints;
  hintLimit?: number;
}

export const SearchWithHintsControl = observer(
  ({ inputStore, hintLimit, hintsStore }: SearchWithHintsControlProps) => {
    const onChangeCountry = useCallback(
      (val: string | number) => {
        inputStore.setValue(val);
        hintsStore.fetchHintsBySearchValue(String(val));
      },
      [hintsStore, inputStore]
    );

    return (
      <section className='SearchWithHintsControl'>
        <Input value={inputStore.actualValue} onChange={onChangeCountry} />
        <HintsList hints={hintsStore.hintsArray} hintLimit={hintLimit} />
      </section>
    );
  }
);
