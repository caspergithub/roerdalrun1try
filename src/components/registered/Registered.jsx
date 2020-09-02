import React from 'react'
import Heroheader from '../heroheader/Heroheader'
import scss from '../styles/about.module.scss'
import { Link } from 'react-router-dom'
import { FaAngleRight } from 'react-icons/fa'

export default function Registered() {
    return (
        <div className={scss.maindiv}>
            <Heroheader />
            <section>
                <span className={scss.breadcrumbs}><Link to="/frontpage" className={scss.bclink}>FORSIDE</Link> <FaAngleRight /> TILMELDING <FaAngleRight/> TAK FOR DIN TILMELDING</span> 
                <h2>Du er nu tilmeldt Rørdal Run</h2>
                <p>Mange tak for din tilmelding. Du vil modtage en e-mail fra os med dit løbenummer, samt informationer vedr. Rørdal Run.</p>
                <p>Tak og vi ses!</p>
            </section>
        </div>
    )
}
