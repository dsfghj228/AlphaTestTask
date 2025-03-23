import React from 'react'
import logo from "../Images/6672270964.jpg"
import s from "../Styles/Components/Navbar.module.css"

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className={s.nav_container}>
        <div className={s.navbar_box}>
            <img className={s.logo} 
                 src={logo} 
                 alt='Логотип'/>
        </div>
    </div>
  )
}

export default Navbar