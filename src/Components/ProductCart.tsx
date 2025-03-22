import s from "../Styles/Components/ProductCart.module.css";

interface ProductCartProps {
    title: string;
    description: string;
    image: string;
}

const ProductCart = ({ title, description, image }:ProductCartProps ) => {
  return (
    <div className={s.cartBox}>
        <img className={s.productImage} src={image} alt='Cart image' />
        <p className={s.title}>{title}</p>
    </div>
  )
}

export default ProductCart