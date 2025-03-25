import React, { useEffect, useState } from 'react';
import { deleteProduct, getProducts } from '../api';
import { useDispatch, useSelector } from 'react-redux';
import { addProducts, removeProduct, resetState } from '../Redux/ProductsSlice';
import { ProductsState } from '../interfaces';
import ProductCart from '../Components/ProductCart';
import s from "../Styles/Pages/ProductsPage.module.css";
import { RootState } from '../Redux/store';

type Props = {}

const ProductsPage = (props: Props) => {
  const dispatch = useDispatch();
  const [isFavFilter, setIsFavFilter] = useState<boolean>(false);
  const productsList = useSelector<RootState, ProductsState[]>(state => state.products);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      if (productsList.length > 0) {
        setIsLoading(false);
        return;
      }

      const data = await getProducts(1);

      const products = data.map((p: ProductsState) => ({
        id: p.id,
        title: p.title,
        description: p.description,
        category: p.category,
        image: p.image,
        price: p.price,
        isFavorite: false,
      }));

      dispatch(resetState());
      dispatch(addProducts(products));
      setIsLoading(false);
    };

    fetchData();
  }, [dispatch, productsList.length]);

  const filteredProducts = isFavFilter
    ? productsList.filter(product => product.isFavorite)
    : productsList;

  const handleDelete = (id: number, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const fetchData = async () => {
      e.preventDefault();
      await deleteProduct(id);
      dispatch(removeProduct(id));
    };

    fetchData();
  };

  const carts = filteredProducts.map(c => (
    <ProductCart
      key={c.id}
      id={c.id}
      title={c.title}
      image={c.image}
      isFavorite={c.isFavorite}
      handleDelete={handleDelete}
    />
  ));

  return (
    <>
      <div className={s.btn_box}>
        <button onClick={() => setIsFavFilter(false)}
                className={!isFavFilter ? s.active_btn : s.inactive_btn}>Все</button>
        <button onClick={() => setIsFavFilter(true)}
                className={isFavFilter ? s.active_btn : s.inactive_btn}>Избранное</button>
      </div>
      <div className={s.cartContainer}>
        {isLoading ? <p>Загрузка...</p> : carts}
      </div>
    </>
  );
};

export default ProductsPage;