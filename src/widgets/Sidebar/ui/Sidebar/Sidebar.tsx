import {classNames} from "shared/lib/classNames/classNames";
import classes from "./Sidebar.module.less";
import React, {useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher";

interface SidebarProps {
  className?: string
}

export const Sidebar = ({className}: SidebarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onToggle = () => {
    setCollapsed(prev => !prev)
  };

  return (
    <div className={classNames(classes.sidebar,{[classes.collapsed]: collapsed}, [className])}>
      <button onClick={onToggle}>Toggle</button>
      <div className={classes.switchers}>
        <ThemeSwitcher/>
        <LangSwitcher className={classes.lang}/>
      </div>
    </div>
  );
};