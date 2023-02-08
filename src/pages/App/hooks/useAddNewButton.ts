import { leftButtonsStore, rightButtonsStore } from 'models/ButtonsControl';
import { v4 as uuidv4 } from 'uuid';

type SideType = 'left' | 'right';

export const useAddNewButton = (side: SideType, text: string, callback: () => void) => {
  const { addButton: addToRightSide } = rightButtonsStore;
  const { addButton: addToLeftSide } = leftButtonsStore;

  return () => {
    side === 'left'
      ? addToLeftSide({
          id: uuidv4(),
          callback,
          text,
        })
      : addToRightSide({
          id: uuidv4(),
          callback,
          text,
        });
  };
};
