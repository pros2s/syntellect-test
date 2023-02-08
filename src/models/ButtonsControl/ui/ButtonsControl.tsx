import { ButtonsList, IButton } from 'components/ButtonsList';
import { Input } from 'ui/Input';
import { observer } from 'mobx-react';
import { inputStore } from '../store/InputStore';

import './ButtonsControl.scss';

interface ButtonsControlProps {
  leftBtns: IButton[];
  rightBtns: IButton[];
}

export const ButtonsControl = observer((props: ButtonsControlProps) => {
  const { leftBtns, rightBtns } = props;
  const { setValue, actualValue } = inputStore;

  return (
    <div className='ButtonsControl'>
      <Input value={actualValue} onChange={setValue} />
      <div className='ButtonsControl__btns'>
        <div className='ButtonsControl__btns_left'>
          <h1>Left Side</h1>
          <ButtonsList btnsList={leftBtns} />
        </div>
        <div className='ButtonsControl__btns_right'>
          <h1>Right Side</h1>
          <ButtonsList btnsList={rightBtns} />
        </div>
      </div>
    </div>
  );
});
