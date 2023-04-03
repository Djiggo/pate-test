import {FC, PropsWithChildren} from "react";
import cn from "classnames";

import styles from './Chip.module.scss';

export type ChipProps = {
  className?: string;
  // TODO theme
} & PropsWithChildren

export const Chip: FC<ChipProps> = ({children, className}) => {


  return <div className={cn(styles.wrapper, className)}>
    <div>
      {children}
    </div>
  </div>

}
