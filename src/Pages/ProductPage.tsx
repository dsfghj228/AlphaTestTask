import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ProductsState } from '../interfaces';
import s from "../Styles/Pages/ProductPage.module.css";
import { useSelector } from 'react-redux';
import { getProductById } from '../Redux/ProductsSlice';


const ProductPage = () => {
    const { id } = useParams();
    const [ isLoading, setIsLoading ] = useState<boolean>(false);
    const [ product, setProduct ] = useState<ProductsState | null>();
    const data = useSelector(getProductById(Number(id)));

    useEffect(() => {
        setIsLoading(true);
        if (data) {
        setProduct(data);
        }
        setIsLoading(false);
    }, [data]);

  return (
    <div className={s.container}>
        <Link to="/products">Обратно к списку продуктов</Link>
        {isLoading ? <div className={s.loading}>Loading...</div> 
        : 
        <div className={s.product_info_box}>
            <img className={s.product_img} 
                src={product?.image} 
                alt='Фото продукта' />
            <p className={s.product_title}>{product?.title}</p>
            <div className={s.product_info}>
                <p className={s.product_description}>Описание: {product?.description}</p>
                <p className={s.product_category}>Категория: {product?.category}</p>
                <p className={s.product_price}>Цена: {product?.price}$</p>
            </div>
        </div>}
    </div>
  )
}

export default ProductPage