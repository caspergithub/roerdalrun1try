import React from 'react'
import Heroheader from '../heroheader/Heroheader'
import scss from '../styles/about.module.scss'

export default function About() {
    return (
        <div className={scss.maindiv}>
            <Heroheader />
            <section>
                <h2>About</h2>
            </section>
        </div>
    )
}
