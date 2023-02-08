import { makeAutoObservable } from "mobx";

export class Input {
  protected value: string | number;

  constructor() {
    makeAutoObservable(this);

    this.value = "";
  }

  setValue = (newValue: string | number) => {
    this.value = newValue;
  };

  get actualValue() {
    return this.value;
  }
}
