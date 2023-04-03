import {FC, useState} from "react";
import cn from "classnames";
import styles from './ImagesSlider.module.scss';

export type BadgeProps = {
  className?: string;
  imageSources: string[]
}

export const ImagesSlider: FC<BadgeProps> = ({imageSources, className}) => {

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return <div className={cn(styles.wrapper, className)}>
    <img src={imageSources[selectedImageIndex]} alt=""/>
    {/** TODO navigation */}
  </div>

}
