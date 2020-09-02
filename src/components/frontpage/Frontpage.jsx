import React, { useState, useEffect } from 'react'
import Heroheader from '../heroheader/Heroheader'
import scss from '../styles/frontpage.module.scss'
import { Link } from 'react-router-dom';


export default function Frontpage(props) {

    // fetch page
    const [page, setPage] = useState([])
    console.log("Frontpage -> page", page)

    async function fetchPage() {
        const url = `https://api.mediehuset.net/rordal/pages/1`
        let data = await props.doFetch(url)
        setPage(data)
    }

    useEffect(() => {
        fetchPage()
    }, [])

    return (
        <div className={scss.maindiv}>
            <Heroheader />
            <section className={scss.gridcontainer}>
                <div className={scss.item1}>
                    <h2>{page.item && page.item.title}</h2>
                    <div className={scss.iwonder} dangerouslySetInnerHTML={page.item && { __html: page.item.content}}></div>

                    <button className={scss.mereinfo}>MERE INFO</button>
                </div>
                <div className={scss.item2}>
                    <h3>Ruter</h3>
                    <p>{page.item && page.item.teaser}</p>
                </div>
                <div className={scss.item3}>
                    <h3>One Mile</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam accusantium omnis doloribus inventore possimus tempore, ut hic earum, saepe labore, numquam quisquam dicta. Distinctio dicta porro nostrum eius culpa. Nobis.</p>
                    <Link to="/registration" className={scss.tilmeld}>TILMELD ONE MILE</Link>
                </div>
                <div className={scss.item4}>
                    <h3>5 km</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minus eius, dolorum sapiente similique incidunt eum non error, vel ducimus porro aut magni minima cumque doloremque distinctio perferendis numquam tempora?</p>
                    <Link to="/registration" className={scss.tilmeld}>TILMELD 5 KM</Link>
                </div>
                <div className={scss.item5}>
                    <h3>10 km</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, commodi. Nam recusandae doloremque repudiandae velit corporis cum, harum possimus veritatis accusantium voluptate unde a quisquam quibusdam explicabo dolorem animi.</p>
                    <Link to="/registration" className={scss.tilmeld}>TILMELD 10 KM</Link>
                </div>
            </section>
        </div>
    )
}
