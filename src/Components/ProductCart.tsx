import React, { useState } from "react";
import s from "../Styles/Components/ProductCart.module.css";
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { Dispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { removeProduct, toggleFavorite } from "../Redux/ProductsSlice";
import { deleteProduct } from "../api";

interface ProductCartProps {
    id: number;
    title: string;
    image: string;
    isFavorite: boolean;
    handleDelete: (id: number) => void;
}

const ProductCart = React.memo(({ id, title, image, isFavorite, handleDelete}: ProductCartProps) => {
  const dispatch = useDispatch();

  const handleLike = () => {
    dispatch(toggleFavorite(id));
  };

  return (
    <div className={s.cartBox}>
      <img className={s.productImage} src={image} alt="Cart image" />
      <div className={s.btn_box}>
        <button className={s.del_btn}
                onClick={() => handleDelete(id)}>🗑️</button>
        <button
          className={s.like_btn}
          onClick={() => handleLike()}
        >
          {isFavorite ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>
      <p className={s.title}>{title}</p>
    </div>
  );
});

export default ProductCart;
