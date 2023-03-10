import { ButtonsList } from 'components/ButtonsList';
import { Input } from 'ui/Input';
import { observer } from 'mobx-react';

import { Buttons } from '../store/ButtonsStore';
import { Input as InputInstance } from '../store/InputStore';

import './ButtonsControl.scss';

interface ButtonsControlProps {
  inputStore: InputInstance;
  leftBtnsStore?: Buttons;
  rightBtnsStore?: Buttons;
}

export const ButtonsControl = observer((props: ButtonsControlProps) => {
  const { leftBtnsStore, rightBtnsStore, inputStore } = props;

  const { setValue, actualValue } = inputStore;
  const { buttonsArray: leftBtns = [] } = leftBtnsStore ?? {};
  const { buttonsArray: rightBtns = [] } = rightBtnsStore ?? {};

  return (
    <section className='ButtonsControl'>
      <Input value={actualValue} onChange={setValue} />
      <div className='ButtonsControl__btns'>
        <div className='ButtonsControl__btns_left'>
          {leftBtnsStore && <ButtonsList btnsList={leftBtns} />}
        </div>
        <div className='ButtonsControl__btns_right'>
          {rightBtnsStore && <ButtonsList btnsList={rightBtns} />}
        </div>
      </div>
    </section>
  );
});
