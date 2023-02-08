import { memo } from 'react';
import { Button } from 'ui/Button';
import { Input } from 'ui/Input';
import './DoubleSidedControl.scss';

interface DoubleSidedControlProps {
  onClickLeft: () => void;
  onClickRight: () => void;
  onControlChange?: (value: string) => void;
  value?: string | number;
}

export const DoubleSidedControl = memo(
  ({ onClickLeft, onClickRight, onControlChange, value }: DoubleSidedControlProps) => {
    return (
      <section className='DoubleSidedControl'>
        <Button text='<-left' callback={onClickLeft} />
        <Input onChange={onControlChange} value={value} />
        <Button text='right->' callback={onClickRight} />
      </section>
    );
  }
);
