import React, { useState, useEffect } from 'react'
import Heroheader from '../heroheader/Heroheader'
import scss from '../styles/participants.module.scss'
import { Link } from 'react-router-dom'
import { FaAngleRight } from 'react-icons/fa'
import { TiArrowUnsorted } from 'react-icons/ti'

export default function Participants(props) {

    const [isLoading, setIsLoading] = useState(true);

    const [query, setQuery] = useState('')

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

    useEffect(() => {
        console.log("Participants -> participants", participants)
    }, [participants])

    async function getParticipants() {
        let headers = {
            'Authorization': `Bearer ${props.loginData.access_token}`
        }
        try {
            const url = `https://api.mediehuset.net/rordal/registrations`
            const response = await fetch(url, headers)
            const data = await response.json()
            setParticipants(data)
            setIsLoading(false)
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getParticipants()
    }, [])

    // search function

    async function getSearchResult() {
        let headers = {
            'Authorization': `Bearer ${props.loginData.access_token}`
        }
        try {
            const url = `https://api.mediehuset.net/rordal/search/${query}`
            const response = await fetch(url, headers)
            const data = await response.json()
            setParticipants(data)
            setIsLoading(false)

        }
        catch (error) {
            console.log(error)
        }
    }


    function sortByKey(array, key) {
        return array.sort(function (a, b) {
            var x = a[key]; var y = b[key];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
    }


    return (
        <div className={scss.maindiv}>
            <Heroheader />
            <section>
                <span className={scss.breadcrumbs}><Link to="/frontpage" className={scss.bclink}>FORSIDE</Link> <FaAngleRight /> DELTAGERLISTE</span>
                <h2>{page.item && page.item.title}</h2>
                <div dangerouslySetInnerHTML={page.item && { __html: page.item.content }}></div>
                <p>Fandt : {participants.count && participants.count}{participants.num_items && participants.num_items} deltagere</p>

                <div className={scss.searchgrid}>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Søg blandt deltagere"
                        onChange={(e) => setQuery(e.target.value)}
                        autoFocus />
                    <button onClick={() => { !query == "" ? getSearchResult() : getParticipants() }}>SØG</button>
                    <button onClick={() => getParticipants()}>HENT ALLE DELTAGERE</button>
                </div>
                {isLoading ? (<h2>Henter deltagere</h2>) : (
                    <div className={scss.participantsgrid}>

                        <div className={scss.sortbtns}>
                            <button className={scss.sortbtn} onClick={() => sortByKey(participants.items, "firstname")}>Deltager <TiArrowUnsorted/></button>
                            <button className={scss.sortbtn}>By <TiArrowUnsorted/></button>
                            <button className={scss.sortbtn}>Distance <TiArrowUnsorted/></button>
                        </div>

                        {participants.items && participants.items.map((item, i) => {
                            return (<div key={i} className={scss.participantsinnerdiv}>
                                <p className={scss.participantsinfo}>Navn: {item.firstname} {item.lastname}</p>
                                <p className={scss.participantsinfotacenter}>Fra: {item.city}</p>
                                <p className={scss.participantsinfotaend}>{item.run_id == 1 && "Jeg skal løbe 10km"}{item.run_id == 2 && "Jeg skal løbe 5km"}{item.run_id == 3 && "Jeg skal løbe one mile"}</p>
                            </div>
                            )
                        })}
                    </div>
                )}
            </section>
        </div>
    )
}
