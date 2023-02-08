import { observer } from 'mobx-react';
import { Input } from 'models/ButtonsControl';
import { Hints, SearchWithHintsControl } from 'models/SearchWithHintsControl';

const searchMaxThreeCountryStore = new Input();
const hintsMaxThreeCountryStore = new Hints();

export const ThreeMaxHintsControl = observer(() => (
  <SearchWithHintsControl
    inputStore={searchMaxThreeCountryStore}
    hintsStore={hintsMaxThreeCountryStore}
    hintLimit={3}
  />
));
