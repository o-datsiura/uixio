import { FC, ButtonHTMLAttributes, ReactNode } from 'react';

import styles from '@styles/button/button.module.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export const Button: FC<ButtonProps> = ({
  size = 'md',
  children,
  ...props
}) => {
  const classes = [styles['button'], styles[size]]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
