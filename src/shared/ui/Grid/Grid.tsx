import {FC, PropsWithChildren} from "react";
import styles from './Grid.module.scss'

export type GridProps = {} & PropsWithChildren

export const Grid: FC<GridProps> = ({children}) => {

  return <div className={styles.grid}>{children}</div>
}
