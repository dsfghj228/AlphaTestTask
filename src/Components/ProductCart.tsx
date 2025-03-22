import React from 'react'

interface ProductCartProps {
    title: string;
    description: string;
    image: string;
}

const ProductCart = ({ title, description, image }:ProductCartProps ) => {
  return (
    <div>
        <img src={image} alt='Cart image' />
        <p>{title}</p>
        <p>{description}</p>
    </div>
  )
}

export default ProductCart