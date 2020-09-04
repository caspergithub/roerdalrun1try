import React, { useState, useEffect } from 'react'
import scss from '../styles/registration.module.scss'
import Heroheader from '../heroheader/Heroheader'
import { Link } from 'react-router-dom'
import { FaAngleRight } from 'react-icons/fa'

export default function Registration(props) {

    // fetch page
    const [page, setPage] = useState([])
    // console.log("Distances -> page", page)

    async function fetchPage() {
        const url = `https://api.mediehuset.net/rordal/pages/3`
        let data = await props.doFetch(url)
        setPage(data)
    }

    useEffect(() => {
        fetchPage()
    }, [])

    // registration
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [birthdate, setBirthdate] = useState(1)
    const [gender, setGender] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [zipcode, setZipcode] = useState(1)
    const [city, setCity] = useState('')
    const [phone, setPhone] = useState(1)
    const [runID, setRunID] = useState(1)
    const [comment, setComment] = useState('')

    const [completed, setCompleted] = useState(false)

    // funktion der konverterer birthdate
    function dateToTimestamp(unixdate) {
        let date = new Date(unixdate);
        let converted = date.getTime() / 1000
        return converted
    }

    async function sendRegistration(e) {

        // console.log("my props.loginData = ", props.loginData)

        e.preventDefault()

        let convertedDate = dateToTimestamp(birthdate)

        let formData = new FormData()

        formData.append('firstname', firstname)
        formData.append('lastname', lastname)
        formData.append('birthdate', convertedDate)
        formData.append('gender', gender)
        formData.append('email', email)
        formData.append('address', address)
        formData.append('zipcode', zipcode)
        formData.append('city', city)
        formData.append('phone', phone)
        formData.append('run_id', runID)
        formData.append('comment', comment)

        let options = {
            method: "POST",
            body: formData,
            headers: {
                'Authorization': `Bearer ${props.loginData.access_token}`
            }
        }

        try {
            const url = `https://api.mediehuset.net/rordal/registrations`
            const response = await fetch(url, options)
            const data = await response.json()
            console.log("send registration", data)
            setCompleted(true)
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={scss.maindiv}>
            <Heroheader />
            <section>
                <span className={scss.breadcrumbs}><Link to="/frontpage" className={scss.bclink}>FORSIDE</Link> <FaAngleRight /> TILMELDING {completed == true && <FaAngleRight />} {completed == true && "TAK FOR DIN TILMELDING"} </span>
                {completed == false && <div>
                    <h2>{page.item && page.item.title}</h2>
                    <div dangerouslySetInnerHTML={page.item && { __html: page.item.content }}></div>
                    <form className={scss.registrationform}>
                        <div>
                            <label>Navn</label>
                            <input className={scss.registrationinput} onChange={(e) => { setFirstname(e.target.value) }}></input>

                            <label>Efternavn</label>
                            <input className={scss.registrationinput} onChange={(e) => { setLastname(e.target.value) }}></input>

                            <label>Fødselsdato</label>
                            <input className={scss.registrationinput} type="date" onChange={(e) => { setBirthdate(e.target.value) }}>
                            </input>

                            <label>Køn</label>
                            <select onChange={(e) => { setGender(e.target.value) }}>
                                <option value="m">Vælg køn</option>
                                <option value="m">Mand</option>
                                <option value="f">Kvinde</option>
                            </select>

                            <label>E-mail</label>
                            <input className={scss.registrationinput} onChange={(e) => { setEmail(e.target.value) }}></input>
                        </div>
                        <div>
                            <label>Adresse</label>
                            <input className={scss.registrationinput} onChange={(e) => { setAddress(e.target.value) }}></input>

                            <label>Postnummer</label>
                            <input type="number" className={scss.registrationinput} onChange={(e) => { setZipcode(e.target.value) }}></input>

                            <label>By</label>
                            <input className={scss.registrationinput} onChange={(e) => { setCity(e.target.value) }}></input>

                            <label>Telefon</label>
                            <input type="number" className={scss.registrationinput} onChange={(e) => { setPhone(e.target.value) }}></input>

                            <label>Vælg Program</label>
                            <select onChange={(e) => { setRunID(e.target.value) }}>
                                <option value="Vælg program">Vælg program</option>
                                <option value="1">10km</option>
                                <option value="2">5km</option>
                                <option value="3">One mile</option>
                            </select>
                        </div>
                        <div>
                            <label>Kommentar</label>
                            <textarea className={scss.commentfield} onChange={(e) => { setComment(e.target.value) }}></textarea>

                            <button onClick={(e) => { sendRegistration(e) }} className={scss.tilmeld}>TILMELD</button>
                        </div>
                    </form>
                </div>}
                {completed == true &&
                    <div>
                        <h2>Du er nu tilmeldt Rørdal Run</h2>
                        <p>Mange tak for din tilmelding. Du vil modtage en e-mail fra os med dit løbenummer, samt informationer vedr. Rørdal Run.</p>
                        <p>Tak og vi ses!</p>
                    </div>
                }
            </section>
        </div>
    )
}
