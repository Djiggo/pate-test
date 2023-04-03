import {FC} from "react";
import styles from './AddToCart.module.scss';
import cn from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {getAmountOfProductInCart, getProductCartIsLoading} from "../../ducks/cartSelectors";
import {getProductById} from "../../../product/ducks/productSelectors";
import {addToCart, removeFromCart} from "../../ducks/cartActions";
import {ReactComponent as Loading} from './assets/loading.svg';


export type AddToCartProps = {
  productId: string;
  className?: string;
  hideStepper?: boolean;
}

export const AddToCart: FC<AddToCartProps> = ({productId, className, hideStepper = false}) => {

  const dispatch = useDispatch();

  const amountInCart = useSelector(getAmountOfProductInCart(productId));
  const product = useSelector(getProductById(productId));
  const isLoading = useSelector(getProductCartIsLoading(productId));

  console.log(amountInCart, isLoading)
  const maxAvailable = product?.availableInStock || 0;

  const add = () => {
    if (isLoading) {
      return
    }
    dispatch(addToCart({productId}));
  }

  const subtract = () => {
    if (isLoading) {
      return
    }

    dispatch(removeFromCart({productId}));
  }

  const wrapperClickHandler = () => {

    if (amountInCart === 0) {
      add();
    }
  }

  return <div
      className={cn(styles.wrapper, className, {[styles.empty]: !isLoading && !amountInCart})}
      onClick={wrapperClickHandler}
  >

    {isLoading && <Loading/>}

    {!isLoading && <>
      {!hideStepper && amountInCart > 0 && <div className={styles.stepper}>
          <div onClick={subtract}>-</div>
        {amountInCart}
        {amountInCart < maxAvailable ?
            <div onClick={add}>+</div> :
            <div></div>}
      </div>}

      {hideStepper && amountInCart > 0 && <div className={styles.stepper}>
        {amountInCart} шт
      </div>}


      {amountInCart === 0 && "В корзину"}
    </>}
  </div>
}
