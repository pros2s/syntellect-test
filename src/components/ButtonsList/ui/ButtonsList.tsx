import { IButton } from '../types/IButton';
import { Button } from 'ui/Button';
import { observer } from 'mobx-react';

import './ButtonsList.scss';

interface ButtonsListProps {
  btnsList: IButton[];
}

export const ButtonsList = observer(({ btnsList }: ButtonsListProps) => {
  return (
    <div className='ButtonsList'>
      {btnsList.map(({ id, text, callback }) => (
        <Button key={id} text={text} callback={callback} />
      ))}
    </div>
  );
});
