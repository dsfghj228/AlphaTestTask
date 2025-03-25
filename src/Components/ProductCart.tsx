import React, { useState } from "react";
import s from "../Styles/Components/ProductCart.module.css";
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { Dispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { removeProduct, toggleFavorite } from "../Redux/ProductsSlice";
import { deleteProduct } from "../api";
import { Link } from "react-router-dom";

interface ProductCartProps {
    id: number;
    title: string;
    image: string;
    isFavorite: boolean;
    handleDelete: (id: number, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const ProductCart = React.memo(({ id, title, image, isFavorite, handleDelete}: ProductCartProps) => {
  const dispatch = useDispatch();

  const handleLike = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(toggleFavorite(id));
  };

  return (
    <Link to={`/products/${id}`}>
      <div className={s.cartBox}>
      <img className={s.productImage} src={image} alt="Cart image" />
      <div className={s.btn_box}>
        <button className={s.del_btn}
                onClick={(e) => handleDelete(id, e)}>🗑️</button>
        <button
          className={s.like_btn}
          onClick={(e) => handleLike(e)}
        >
          {isFavorite ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>
      <p className={s.title}>{title}</p>
    </div>
    </Link>
  );
});

export default ProductCart;
