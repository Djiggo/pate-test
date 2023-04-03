import {FC, PropsWithChildren} from "react";
import cn from "classnames";
import {ReactComponent as Star} from './assets/star.svg';

import styles from './RatingStars.module.scss';

export type RatingStarsProps = {
  className?: string;
  rating: number;
  votes?: number;
} & PropsWithChildren

export const RatingStars: FC<RatingStarsProps> = ({rating, votes, className}) => {

  const getStarClassname = (starIndex: number) => {

    if (rating > starIndex) {
      return styles.activeStar;
    }
    return ''
  }

  return <div className={cn(styles.wrapper, className)}>
    <Star className={getStarClassname(0)}/>
    <Star className={getStarClassname(1)}/>
    <Star className={getStarClassname(2)}/>
    <Star className={getStarClassname(3)}/>
    <Star className={getStarClassname(4)}/>
    <span className={styles.votes}>{votes}</span>
  </div>

}
