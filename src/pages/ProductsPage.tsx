import {ProductCard} from "../entities/product/ui/ProductCard/ProductCard";
import React, {useEffect} from "react";
import {Grid} from "../shared/ui/Grid/Grid";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "../entities/product/ducks/productActions";
import {productList} from "../entities/product/ducks/productSelectors";

export const ProductsPage = () => {


  const dispatch = useDispatch();

  const productsList = useSelector(productList);

  useEffect(() => {
    // Fetch data from BE
    dispatch(fetchProducts());
  }, [])

  return <div>
    <Grid>

      {productsList.map((product) => <ProductCard product={product}/>)}

    </Grid>
  </div>
}
