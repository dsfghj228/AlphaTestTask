import React, { useState } from "react";
import s from "../Styles/Components/ProductCart.module.css";
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { Dispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "../Redux/ProductsSlice";

interface ProductCartProps {
    id: number;
    title: string;
    image: string;
    isFavorite: boolean;
}

const ProductCart = React.memo(({ id, title, image, isFavorite}: ProductCartProps) => {
  const [isLiked, setIsLiked] = useState<boolean>(isFavorite);
  const dispatch = useDispatch();

  const handleLike = () => {
    setIsLiked(!isLiked);
    dispatch(toggleFavorite(id));
  };

  return (
    <div className={s.cartBox}>
      <img className={s.productImage} src={image} alt="Cart image" />
      <div className={s.btn_box}>
        <button className={s.del_btn}>🗑️</button>
        <button
          className={s.like_btn}
          onClick={() => handleLike()}
        >
          {isLiked ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>
      <p className={s.title}>{title}</p>
      <button className={s.moreInfoBtn}>Больше информации</button>
    </div>
  );
});

export default ProductCart;
