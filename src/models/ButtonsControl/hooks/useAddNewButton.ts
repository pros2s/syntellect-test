import { Buttons } from '../store/ButtonsStore';
import { v4 as uuidv4 } from 'uuid';

export const useAddNewButton = (store: Buttons, text: string, callback: () => void) => {
  const { addButton } = store;

  return () => {
    addButton({
      id: uuidv4(),
      callback,
      text,
    });
  };
};
