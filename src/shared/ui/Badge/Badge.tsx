import {FC, PropsWithChildren} from "react";
import cn from "classnames";

import styles from './Badge.module.scss';

export type BadgeProps = {
  className?: string;
} & PropsWithChildren

export const Badge: FC<BadgeProps> = ({children, className}) => {


  return <div className={cn(styles.wrapper, className)}>
    {children}
  </div>

}
