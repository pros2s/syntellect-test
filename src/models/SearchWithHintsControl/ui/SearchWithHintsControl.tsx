import { HintsList, IHint } from 'components/HintsList';
import { useCallback, useMemo } from 'react';
import { Input } from 'ui/Input';
import { Input as InputInstance } from 'models/ButtonsControl';
import { observer } from 'mobx-react';
import { Loader } from 'ui/Loader';
import { useDebounce } from '../hooks/useDebounce';
import { Hints } from '../store/Hints';

import './SearchWithHintsControl.scss';

interface SearchWithHintsControlProps {
  inputStore: InputInstance;
  hintsStore: Hints;
  hintLimit?: number;
}

export const SearchWithHintsControl = observer(
  ({ inputStore, hintLimit, hintsStore }: SearchWithHintsControlProps) => {
    const {
      errorMessageString,
      fetchHintsBySearchValue,
      hintsArray,
      isHintMenuOpenedValue,
      isLoadingStatus,
      setCurrentHint,
      setIsHintMenuOpened,
    } = hintsStore;

    const debouncedSearch = useDebounce((val: string | number) => {
      fetchHintsBySearchValue(String(val));
    }, 300);

    const onChangeCountry = useCallback(
      (val: string | number) => {
        if (val) setIsHintMenuOpened(true);
        inputStore.setValue(val);
        debouncedSearch(val);
      },
      [debouncedSearch, inputStore, setIsHintMenuOpened]
    );

    const onCountryClick = useCallback(
      (hint: IHint) => {
        setCurrentHint(hint);
        inputStore.setValue(`${hint.name} (${hint.fullName})`);
        setIsHintMenuOpened(false);
      },
      [inputStore, setCurrentHint, setIsHintMenuOpened]
    );

    const loader = useMemo(() => <Loader size={100} />, []);
    const error = useMemo(
      () => <h1 className='SearchWithHintsControl__error'>{errorMessageString}</h1>,
      [errorMessageString]
    );

    return (
      <section className='SearchWithHintsControl'>
        <Input value={inputStore.actualValue} onChange={onChangeCountry} />

        {errorMessageString && error}
        {isLoadingStatus && loader}

        {isHintMenuOpenedValue && !isLoadingStatus && (
          <HintsList hints={hintsArray} hintLimit={hintLimit} onCountryClick={onCountryClick} />
        )}
      </section>
    );
  }
);
