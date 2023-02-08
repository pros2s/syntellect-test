import { IButton } from 'components/ButtonsList';
import { makeAutoObservable } from 'mobx';

export class Buttons {
  protected buttons: IButton[];

  constructor() {
    makeAutoObservable(this);

    this.buttons = [];
  }

  addButton = (button: IButton) => {
    this.buttons.push(button);
  };

  removeButton = (id: string) => {
    this.buttons.filter((btn) => btn.id !== id);
  };

  get buttonsArray() {
    return this.buttons;
  }
}
