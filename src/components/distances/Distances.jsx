import React, { useState, useEffect } from 'react'
import Heroheader from '../heroheader/Heroheader'
import scss from '../styles/distances.module.scss'
import { Link } from 'react-router-dom'
import { FaAngleRight } from 'react-icons/fa'
import { BsDot } from 'react-icons/bs'

export default function Distances(props) {

    // fetch page
    const [page, setPage] = useState([])
    // console.log("Distances -> page", page)

    async function fetchPage() {
        const url = `https://api.mediehuset.net/rordal/pages/2`
        let data = await props.doFetch(url)
        setPage(data)
    }

    useEffect(() => {
        fetchPage()
    }, [])

    // fetch distances
    const [distances, setDistances] = useState([])
    const [distanceID, setDistanceID] = useState(0)
    console.log("Distances -> distances", distances)

    async function fetchDistances() {
        const url = `https://api.mediehuset.net/rordal/run`
        let data = await props.doFetch(url)
        setDistances(data)
    }

    useEffect(() => {
        fetchDistances()
    }, [])

    return (
        <div className={scss.maindiv}>
            <Heroheader />
            <section>
                <span className={scss.breadcrumbs}><Link to="/frontpage" className={scss.bclink}>FORSIDE</Link> <FaAngleRight /> DISTANCER</span>
                <h2>{page.item && page.item.title}</h2>
                {page.item && page.item.content}
                <div className={scss.distancesgrid}>
                    <div className={scss.backgroundblue}>
                        <h3>Distancebeskrivelser</h3>
                        <p>Klik på de enkelte distancer for at få en beskrivelse af, hvad den enkelte distance har at tilbyde.</p>
                        {distances.items && distances.items.map((item, i) => {
                            return (
                                <div key={i}>
                                    <p id={item.id} onClick={(e) => { setDistanceID(e.target.id) }}><BsDot />{item.title}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className={scss.backgroundblue}>
                        <h3>
                            {distances.items && distances.items.distanceID.title}
                        </h3>
                    </div>
                </div>
            </section>
        </div>
    )
}
