import { ButtonHTMLAttributes, memo, ReactNode } from 'react';

import './Button.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  text?: string;
  callback?: () => void;
}

export const Button = memo((props: ButtonProps) => {
  const { children, text, callback, ...restProps } = props;

  return (
    <button type='button' className='Button' {...restProps} onClick={callback}>
      {children}
    </button>
  );
});
