import React from 'react'
import scss from '../styles/registration.module.scss'
import Heroheader from '../heroheader/Heroheader'

export default function Registation() {
    return (
        <div className={scss.maindiv}>
            <Heroheader/>
            <section>
                <h2>Tilmelding</h2>
            </section>
        </div>
    )
}
