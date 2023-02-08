import { v4 as uuidv4 } from 'uuid';
import { Buttons } from '../store/ButtonsStore';

export const useAddNewButton = (store: Buttons, text: string, callback: () => void) => {
  const { addButton } = store;

  const additionalFunc = () => {
    addButton({
      id: uuidv4(),
      callback,
      text,
    });
  };

  return additionalFunc;
};
