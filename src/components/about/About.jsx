import React, { useState, useEffect } from 'react'
import Heroheader from '../heroheader/Heroheader'
import scss from '../styles/about.module.scss'
import { Link } from 'react-router-dom'
import { FaAngleRight } from 'react-icons/fa'

export default function About(props) {

    // fetch page
    const [page, setPage] = useState([])

    async function fetchPage() {
        const url = `https://api.mediehuset.net/rordal/pages/4`
        let data = await props.doFetch(url)
        setPage(data)
    }

    useEffect(() => {
        fetchPage()
    }, [])

    return (
        <div className={scss.maindiv}>
            <Heroheader />
            <section>
                <span className={scss.breadcrumbs}><Link to="/frontpage" className={scss.bclink}>FORSIDE</Link> <FaAngleRight /> OM RØRDAL RUN</span>
                <h2>{page.item && page.item.title}</h2>
                <div dangerouslySetInnerHTML={page.item && { __html: page.item.content}}></div>
            </section>
        </div>
    )
}
