import { memo } from 'react';
import { Button } from 'ui/Button';
import './ButtonList.scss';

interface ButtonListProps {
  btnList: HTMLButtonElement[];
}

export const ButtonList = memo(({ btnList }: ButtonListProps) => {
  return (
    <div className='ButtonList'>
      {btnList.map((btn, i) => (
        <Button key={i} />
      ))}
    </div>
  );
});
