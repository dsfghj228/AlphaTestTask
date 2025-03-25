import React from 'react'
import logo from "../Images/6672270964.jpg"
import s from "../Styles/Components/Navbar.module.css"
import { Link } from 'react-router-dom'
import CreateProductPage from '../Pages/CreateProductPage'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className={s.nav_container}>
        <div className={s.navbar_box}>
            <img className={s.logo} 
                 src={logo} 
                 alt='Логотип'/>
            <Link to={"/create-product"}>
            Создать карточку продукта
            </Link>
        </div>
    </div>
  )
}

export default Navbar