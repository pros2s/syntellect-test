import { getCountryByName } from 'api/apiService';
import { IHint } from 'components/HintsList';
import { action, makeAutoObservable } from 'mobx';

export class Hints {
  protected hints: IHint[];

  protected isLoading: boolean;

  protected errorMessage: string;

  constructor() {
    makeAutoObservable(this);

    this.hints = [];
    this.isLoading = false;
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

  get hintsArray() {
    return this.hints;
  }

  get isLoadingStatus() {
    return this.isLoading;
  }

  get errorMessageString() {
    return this.errorMessage;
  }
}
