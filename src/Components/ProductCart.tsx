import { useState } from "react";
import s from "../Styles/Components/ProductCart.module.css";
import { FaRegHeart, FaHeart } from 'react-icons/fa';

interface ProductCartProps {
    title: string;
    description: string;
    image: string;
}

const ProductCart = ({ title, description, image }:ProductCartProps ) => {
  const [ isLiked, setIsLiked ] = useState<boolean>(false);
  
  return (
    <div className={s.cartBox}>
        <img className={s.productImage} src={image} alt='Cart image' />
        <div className={s.btn_box}>
          <button className={s.del_btn}>🗑️</button>
          <button className={s.like_btn} 
                  onClick={() => setIsLiked(!isLiked)}>{isLiked ? <FaHeart /> : <FaRegHeart /> }</button>
        </div>
        <p className={s.title}>{title}</p>
        <button className={s.moreInfoBtn}>Больше информации</button>
    </div>
  )
}

export default ProductCart