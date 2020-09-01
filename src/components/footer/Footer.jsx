import React from 'react'
import { Link } from 'react-router-dom'
import scss from '../styles/footer.module.scss'

export default function Footer() {
    return (
        <section className={scss.footer}>
            <div>
                <p className={scss.information}>INFORMATION</p>
            </div>
            <div>
                <Link className={scss.footerLinks} to="/about">OM RØRDAL RUN</Link>
                <Link className={scss.footerLinks} to="/frontpage">RUTER</Link>
                <Link className={scss.footerLinks} to="/registration">TILMELDING</Link>
                <Link className={scss.footerLinks} to="/distances">DISTANCER</Link>
            </div>
            <div>
                <p className={scss.contactus}>KONTAKT OS</p>
            </div>
            <div>
                <p className={scss.phonenumberandmail}>+45 35 67 90 87</p>
                <p className={scss.phonenumberandmail}>ROERDALRUN@MAIL.COM</p>
            </div>
        </section>
    )
}
