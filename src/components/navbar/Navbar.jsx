import React from 'react'
import { Link } from 'react-router-dom'
import scss from '../styles/navbar.module.scss'
import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { HiMenuAlt2 } from 'react-icons/hi'
import { HiX } from 'react-icons/hi'

export default function Navbar() {
    return (
        <nav className={scss.navbar}>
            <ul>
                <div className={scss.dropdown}>
                    <div className={scss.iconandtext}>
                        <HiMenuAlt2 className={scss.menuicon} />
                        <p className={scss.menutext}>MENU</p>
                    </div>
                    <div className={scss.menuxdiv}>
                        <HiX className={scss.menux} />
                    </div>
                    <div className={scss.dropdowncontent}>
                        <Link className={scss.navbarLinks} to="/about">OM RØRDAL RUN</Link>
                        <Link className={scss.navbarLinks} to="/distances">DISTANCER</Link>
                        <Link className={scss.navbarLinks} to="/registration">TILMELDING</Link>
                        <Link className={scss.navbarLinks} to="/frontpage">FORSIDE</Link>
                    </div>
                </div>
            </ul>
            <div className={scss.smicons}>
                <FaInstagram />
                <FaFacebookF />
            </div>
        </nav>
    )
}
