import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { createProduct } from '../Redux/ProductsSlice';

type Props = {}

const CreateProductPage = (props: Props) => {
    const [ title, setTitle ] = useState<string>("");
    const [ description, setDescription ] = useState<string>("");
    const [ category, setCategory ] = useState<string>("");
    const [ imageUrl, setImageUrl ] = useState<string>("");
    const [ price, setPrice ] = useState<number>(0);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const createProductCart = () => {
        if (!title || !description || !category || !imageUrl || price <= 0) {
            alert("Пожалуйста, заполните все поля.");
            return;
        }

        const newProduct = {
            id: Date.now(),
            title,
            description,
            category,
            image: imageUrl,
            price,
            isFavorite: false,
        };

        dispatch(createProduct(newProduct));

        navigate("/products");
    }

  return (
    <div>
        <Link to={"/products"}>Обратно к списку товаров</Link>
        <h1>Создание карточки продукта:</h1>
        <div>
            <h3>Введите название товара</h3>
            <input type='text'
                    placeholder='Название товара'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
            <h3>Введите описание товара</h3>
            <input type='text'
                    placeholder='Описание товара'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
            <h3>Введите категория товара</h3>
            <input type='text'
                    placeholder='Категория товара'
                    value={category}
                    onChange={(e) => setCategory(e.target.value)} />
        </div>
        <div>
            <h3>Введите ссылку на изображение товара</h3>
            <input type='text'
                    placeholder='Изображение товара'
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)} />
        </div>
        <div>
            <h3>Введите цену товара</h3>
            <input type='number'
                    placeholder='0'
                    value={price == 0 ? "" : price}
                    onChange={(e) => {
                        const value = Number(e.target.value);
                        if (!isNaN(value)) {
                            setPrice(value);
                        } else {
                            setPrice(0);
                        }
                    }} />
        </div>
        <button onClick={() => createProductCart()}>Создать карточку</button>
    </div>
  )
}

export default CreateProductPage