import {classNames} from "shared/lib/classNames/classNames";
import classes from "./AppLink.module.less";
import {Link, LinkProps} from "react-router-dom";
import React, {FC, PropsWithChildren} from "react";

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps{
  className?: string;
  children: React.ReactNode;
  theme?: AppLinkTheme;
}

export const AppLink: FC<PropsWithChildren<AppLinkProps>> = (props: AppLinkProps) => {
  const {className, children, to, theme = AppLinkTheme.PRIMARY, ...other} = props;

  return (
    <Link to={to} {...other} className={classNames(classes.appLink,{}, [className, classes[theme]])}>
      {children}
    </Link>
  );
};