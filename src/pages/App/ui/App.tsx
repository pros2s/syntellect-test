import { ButtonsControl, leftButtonsStore, rightButtonsStore } from 'models/ButtonsControl';
import { useAddNewButton } from '../hooks/useAddNewButton';
import { inputStore } from 'models/ButtonsControl';
import { useEffect } from 'react';
import './App.scss';

const App = () => {
  const { setValue } = inputStore;
  const { buttonsArray: leftBtns } = leftButtonsStore;
  const { buttonsArray: rightBtns } = rightButtonsStore;

  const clearButton = useAddNewButton('right', 'Clear Button', () => setValue(''));
  const helloButton = useAddNewButton('right', 'Say Hello', () => setValue('Hello world!'));

  useEffect(() => {
    clearButton();
    helloButton();
  }, [clearButton, helloButton]);

  return (
    <div className='App'>
      <>
        <ButtonsControl leftBtns={leftBtns} rightBtns={rightBtns} />
      </>
    </div>
  );
};

export default App;
