import { useAddNewButton, Buttons, Input, ButtonsControl } from 'models/ButtonsControl';
import { useEffect } from 'react';
import { observer } from 'mobx-react';

const textRightButtonsStore = new Buttons();
const textInputStore = new Input();

export const TextControl = observer(() => {
  const { setValue } = textInputStore;

  const clearButton = useAddNewButton(textRightButtonsStore, 'Clear Button', () => setValue(''));
  const helloButton = useAddNewButton(textRightButtonsStore, 'Say Hello', () =>
    setValue('Hello world!')
  );

  useEffect(() => {
    clearButton();
    helloButton();
  }, [clearButton, helloButton]);

  return <ButtonsControl inputStore={textInputStore} rightBtnsStore={textRightButtonsStore} />;
});
