import { HintsList } from 'components/HintsList';
import { useCallback, useMemo } from 'react';
import { Input } from 'ui/Input';
import { Input as InputInstance } from 'models/ButtonsControl';
import { observer } from 'mobx-react';
import { Loader } from 'ui/Loader';
import { Hints } from '../store/Hints';
import { useDebounce } from '../hooks/useDebounce';

interface SearchWithHintsControlProps {
  inputStore: InputInstance;
  hintsStore: Hints;
  hintLimit?: number;
}

export const SearchWithHintsControl = observer(
  ({ inputStore, hintLimit, hintsStore }: SearchWithHintsControlProps) => {
    const debouncedSearch = useDebounce((val: string | number) => {
      hintsStore.fetchHintsBySearchValue(String(val));
    }, 300);

    const onChangeCountry = useCallback(
      (val: string | number) => {
        inputStore.setValue(val);
        debouncedSearch(val);
      },
      [debouncedSearch, inputStore]
    );

    const loader = useMemo(() => <Loader size={100} />, []);
    const error = useMemo(
      () => <h1 className='SearchWithHintsControl__error'>{hintsStore.errorMessageString}</h1>,
      [hintsStore.errorMessageString]
    );

    return (
      <section className='SearchWithHintsControl'>
        <Input value={inputStore.actualValue} onChange={onChangeCountry} />
        {hintsStore.errorMessageString && error}
        {hintsStore.isLoadingStatus ? (
          loader
        ) : (
          <HintsList hints={hintsStore.hintsArray} hintLimit={hintLimit} />
        )}
      </section>
    );
  }
);
