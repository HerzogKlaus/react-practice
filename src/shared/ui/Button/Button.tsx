import { classNames } from 'shared/lib/classNames/classNames';
import React, { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import classes from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string;
  children: React.ReactNode;
  theme: ThemeButton;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  className, children, theme, ...other
}: ButtonProps) => (
  <button type="button" className={classNames(classes.button, {}, [className, classes[theme]])} {...other}>
    {children}
  </button>
);
