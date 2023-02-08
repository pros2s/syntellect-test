import { observer } from 'mobx-react';
import { Input } from 'models/ButtonsControl';
import { Hints, SearchWithHintsControl } from 'models/SearchWithHintsControl';

const searchMaxTenCountryStore = new Input();
const hintsMaxTenCountryStore = new Hints();

export const TenMaxHintsControl = observer(() => (
  <SearchWithHintsControl
    inputStore={searchMaxTenCountryStore}
    hintsStore={hintsMaxTenCountryStore}
    hintLimit={10}
  />
));
