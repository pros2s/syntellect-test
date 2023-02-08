import { makeAutoObservable } from 'mobx';

class Input {
  protected value: string | number;

  constructor() {
    makeAutoObservable(this);

    this.value = '';
  }

  setValue = (newValue: string | number) => {
    this.value = newValue;
  };

  get actualValue() {
    return this.value;
  }
}

export const inputStore = new Input();
