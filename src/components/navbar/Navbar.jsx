import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import scss from '../styles/navbar.module.scss'
import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { HiMenuAlt2 } from 'react-icons/hi'
import { HiX } from 'react-icons/hi'
import { FaCaretDown } from 'react-icons/fa'

export default function Navbar(props) {

    // states til at gemme username, password og token
    const [username, setUsername] = useState("indtast brugernavn")
    const [password, setPassword] = useState("indtast password")
    const [token, setToken] = useState([])
    // console.log("Login -> token", token)

    async function getToken(e) {

        e.preventDefault()

        let formData = new FormData()

        formData.append('username', username)
        formData.append('password', password)

        let options = {
            method: "POST",
            body: formData,
        }

        try {
            const url = `https://api.mediehuset.net/token`
            const response = await fetch(url, options)
            const data = await response.json()
            setToken(data)
        }
        catch (error) {
            console.log(error)
        }
    }

    function logOut(e) {
        e.preventDefault()
        sessionStorage.removeItem("token")
        props.setLoginData([])
    }

    // useEffect til at gemme token i sessionstorage
    useEffect(() => {
        if (token && token.user_id) {
            props.setLoginData(token)
            sessionStorage.setItem("token", JSON.stringify(token))
        }
    }, [token])

    return (
        <nav className={scss.navbar}>
            <ul className={scss.positionR}>
                <div className={scss.menuxdiv} ><HiX className={scss.menux}/></div>
                <div className={scss.dropdown}>
                    <div className={scss.iconandtext}>
                        <HiMenuAlt2 className={scss.menuicon} />
                        <p className={scss.menutext}>MENU</p>
                    </div>
                    {/* <div className={scss.menuxdiv}>
                        <HiX className={scss.menux} />
                    </div> */}
                    <div className={scss.dropdowncontent}>
                        <Link className={scss.navbarLinks} to="/frontpage">FORSIDE</Link>
                        <Link className={scss.navbarLinks} to="/distances">DISTANCER</Link>
                        <Link className={scss.navbarLinks} to="/registration">TILMELDING</Link>
                        <Link className={scss.navbarLinks} to="/about">OM RØRDAL RUN</Link>
                        <div className={scss.logindropdown}>
                            <span className={scss.navbarLinks}>LOGIN <FaCaretDown /></span>
                            <div className={scss.logindropdowncontent}>
                                <form className={scss.navbarform}>
                                    {
                                        !props.loginData.user_id &&
                                        <>
                                            <label className={scss.navbarlabel}>Brugernavn</label>
                                            <input value={username} onClick={() => { setUsername("") }} onChange={(e) => { setUsername(e.target.value) }} />
                                            <label className={scss.navbarlabel}>Password</label>
                                            <input type="password" value={password} onClick={() => { setPassword("") }} onChange={(e) => { setPassword(e.target.value) }} />
                                            <button className={scss.logoutbtn} onClick={(e) => { getToken(e) }} >Log ind</button>
                                        </>
                                    }
                                    {
                                        props.loginData.user_id &&
                                        <button className={scss.logoutbtn} onClick={(e) => { logOut(e) }} >Log ud</button>
                                    }
                                </form>
                            </div>
                        </div>
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
