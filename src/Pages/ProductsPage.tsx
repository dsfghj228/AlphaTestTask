import React, { useEffect, useState } from 'react'
import { getProducts } from '../api'
import { useDispatch, useSelector } from 'react-redux'
import { addProducts } from '../Redux/ProductsSlice'
import { ProductsState } from '../interfaces'
import ProductCart from '../Components/ProductCart'
import s from "../Styles/Pages/ProductsPage.module.css";

type Props = {}

const ProductsPage = (props: Props) => {
  const dispatch = useDispatch();
  const [ products, setProducts ] = useState<ProductsState[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts(1);
      dispatch(addProducts(data));
      setProducts(data);
    };

    fetchData();
  }, []);

   const carts = products.map(c => {
    return <ProductCart title={c.title} description={c.description} image={c.image} />
   })

  return (
    <div className={s.cartContainer}>
      {carts}
    </div>
  )
}

export default ProductsPage