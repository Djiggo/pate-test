import {Product, ProductVariant} from "../../api/models/Product";
import {FC, useState} from "react";
import styles from './ProductCard.module.scss';
import {Badge} from "../../../../shared/ui/Badge/Badge";
import {ImagesSlider} from "../../../../shared/ui/ImagesSlider/ImagesSlider";
import {HeartButton} from "../../../../shared/ui/HeartButton/HeartButton";
import {Chip} from "../../../../shared/ui/Chip/Chip";
import {RatingStars} from "../../../../shared/ui/RatingStars/RatingStars";
import cn from "classnames";
import {AddToCart} from "../../../cart/ui/AddToCart/AddToCart";


export enum ProductCardType {
  Default = 'default',
  Fashion = 'fashion',
  ClickNDelivery = 'clickNDelivery'
}

export type ProductCardProps = {
  product: Product;
  type?: ProductCardType
}

export const ProductCard: FC<ProductCardProps> = ({product, type = ProductCardType.Default}) => {


  const [activeVariantId, setActiveVariantId] = useState<ProductVariant['id'] | null>(product.variants?.[0]?.id || null);

  const getTitleRowsCount = () => {

    let count = 4;

    if (product.variants) {
      count--;
    }

    if (product.rating) {
      count--;
    }

    return count;

  };

  return <div className={cn(styles.wrapper, styles[`type_${type}`])}>
    <div className={styles.top}>
      {product.promo?.badge && <Badge className={styles.badge}>{product.promo.badge}</Badge>}
      <ImagesSlider imageSources={product.photos}/>
      <HeartButton className={styles.favButton}/>
    </div>

    <div className={styles.middle}>
      <div className={styles.chips}>
        {product.promo?.discountPercent && <Chip>{product.promo?.discountPercent}%</Chip>}
      </div>
      <div className={styles.price}>{product.price}<span>₽</span></div>
      {product.promo?.previousPrice &&
          <div className={styles.previousPrice}>{product.promo?.previousPrice}<span>₽</span></div>}
    </div>

    <div className={styles.bottom}>
      {/*@ts-ignore*/}
      <div className={styles.title} style={{'WebkitLineClamp': getTitleRowsCount()}}>{product.title}</div>
      {Number.isFinite(product.rating) && <RatingStars rating={product.rating!} votes={product.ratingVotes}/>}

      {product.variants && <div className={styles.variants}>
        {product.variants?.map((variant) => <div
            key={variant.id}
            className={cn(styles.variant, {[styles.variantActive]: activeVariantId === variant.id})}
            onClick={() => setActiveVariantId(variant.id)}
        >
          {variant.label}
        </div>)}
      </div>}

    </div>

    <AddToCart
        productId={product.id}
        className={styles.addToCard}
        hideStepper={type === ProductCardType.ClickNDelivery}
    />

  </div>

}
