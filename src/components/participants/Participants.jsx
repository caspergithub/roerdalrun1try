import React, { useState, useEffect } from 'react'
import Heroheader from '../heroheader/Heroheader'
import scss from '../styles/participants.module.scss'
import { Link } from 'react-router-dom'
import { FaAngleRight } from 'react-icons/fa'

export default function Participants(props) {

    // fetch page
    const [page, setPage] = useState([])
    // console.log("Distances -> page", page)

    async function fetchPage() {
        const url = `https://api.mediehuset.net/rordal/pages/5`
        let data = await props.doFetch(url)
        setPage(data)
    }

    useEffect(() => {
        fetchPage()
    }, [])

    // get participants
    const [participants, setParticipants] = useState('')
    console.log("Participants -> participants", participants)

    async function getParticipants() {
        let headers = {
            'Authorization': `Bearer ${props.loginData.access_token}`
        }
        try {
            const url = `https://api.mediehuset.net/rordal/registrations`
            const response = await fetch(url, headers)
            const data = await response.json()
            setParticipants(data)
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getParticipants()
    }, [])

    return (
        <div className={scss.maindiv}>
            <Heroheader />
            <section>
                <span className={scss.breadcrumbs}><Link to="/frontpage" className={scss.bclink}>FORSIDE</Link> <FaAngleRight /> DELTAGERLISTE</span>
                <h2>{page.item && page.item.title}</h2>
                <div dangerouslySetInnerHTML={page.item && { __html: page.item.content }}></div>


                <div className={scss.participantsgrid}>
                    {participants.items && participants.items.map((item, i) => {
                        return (<div key={i} className={scss.participantsinnerdiv}>
                            <p className={scss.participantsinfo}>Navn: {item.firstname} {item.lastname}</p>
                            <p className={scss.participantsinfo}>Fra: {item.city}</p>
                            <p className={scss.participantsinfo}>E-mail: {item.email}</p>
                            <p className={scss.participantsinfo}>{item.run_id == 1 && "Jeg skal løbe 10km"}</p>
                            <p className={scss.participantsinfo}>{item.run_id == 2 && "Jeg skal løbe 5km"}</p>
                            <p className={scss.participantsinfo}>{item.run_id == 3 && "Jeg skal løbe one mile"}</p>
                        </div>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}
