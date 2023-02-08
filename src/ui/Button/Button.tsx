import { ButtonHTMLAttributes, memo } from 'react';

import './Button.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  text?: string;
  callback?: () => void;
}

export const Button = memo((props: ButtonProps) => {
  const { children, text, callback, className, ...restProps } = props;

  return (
    <button type='button' className={`${className} Button`} {...restProps} onClick={callback}>
      {text}
    </button>
  );
});
