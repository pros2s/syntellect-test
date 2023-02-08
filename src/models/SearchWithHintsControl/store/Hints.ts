import { getCountryByName } from 'api/apiService';
import { IHint } from 'components/HintsList';
import { action, makeAutoObservable } from 'mobx';

export class Hints {
  protected hints: IHint[];

  protected currentHint: IHint | undefined;

  protected isLoading: boolean;

  protected isHintMenuOpened: boolean;

  protected errorMessage: string;

  constructor() {
    makeAutoObservable(this);

    this.hints = [];
    this.isLoading = false;
    this.isHintMenuOpened = false;
    this.errorMessage = '';
  }

  fetchHintsBySearchValue = (searchValue: string) => {
    this.isLoading = true;

    getCountryByName(searchValue)
      .then(
        action('succes', (res) => {
          this.hints = res;
        })
      )
      .catch(
        action('error', (err) => {
          this.errorMessage = err;
        })
      )
      .finally(
        action('finally', () => {
          this.isLoading = false;
        })
      );
  };

  setCurrentHint = (hint: IHint) => {
    this.currentHint = hint;
  };

  setIsHintMenuOpened = (value: boolean) => {
    this.isHintMenuOpened = value;
  };

  get hintsArray() {
    return this.hints;
  }

  get isLoadingStatus() {
    return this.isLoading;
  }

  get isHintMenuOpenedValue() {
    return this.isHintMenuOpened;
  }

  get errorMessageString() {
    return this.errorMessage;
  }
}
