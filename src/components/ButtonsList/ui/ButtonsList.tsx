import { Button } from 'ui/Button';
import { observer } from 'mobx-react';
import { IButton } from '../types/IButton';

import './ButtonsList.scss';

interface ButtonsListProps {
  btnsList: IButton[];
}

export const ButtonsList = observer(({ btnsList }: ButtonsListProps) => (
  <div className='ButtonsList'>
    {btnsList.map(({ id, text, callback }) => (
      <Button key={id} className='ButtonsList__item' text={text} callback={callback} />
    ))}
  </div>
));
