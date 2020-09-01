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

    async function sendRegistration(e) {
        e.preventDefault()
        let formData = new FormData()

        formData.append('firstname', firstname)
        formData.append('lastname', lastname)
        formData.append('birthdate', birthdate)
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
            headers : {
                'Authorization': `Bearer ${props.loginData.access_token}`
            }
        }

        try {
            const url = `https://api.mediehuset.net/rordal/registrations`
            const response = await fetch(url, options)
            const data = await response.json()
            console.log("send registration", data)

        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={scss.maindiv}>
            <Heroheader />
            <section>
                <span className={scss.breadcrumbs}><Link to="/frontpage" className={scss.bclink}>FORSIDE</Link> <FaAngleRight /> DISTANCER</span>
                <h2>{page.item && page.item.title}</h2>
                <p>{page.item && page.item.content}</p>
                <form>
                    <div>
                        <label>Navn</label>
                        <input onChange={(e) => {setFirstname(e.target.value)}}></input>
                        <label>Efternavn</label>
                        <input onChange={(e) => {setLastname(e.target.value)}}></input>
                        <label>Fødselsdato</label>
                        <select onChange={(e) => {setBirthdate(e.target.value)}}>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                        </select>
                        <label>Køn</label>
                        <input onChange={(e) => {setGender(e.target.value)}}></input>
                        <label>E-mail</label>
                        <input onChange={(e) => {setEmail(e.target.value)}}></input>
                    </div>
                    <div>
                        <label>Adresse</label>
                        <input onChange={(e) => {setAddress(e.target.value)}}></input>
                        <label>Postnummer</label>
                        <input onChange={(e) => {setZipcode(e.target.value)}}></input>
                        <label>By</label>
                        <input onChange={(e) => {setCity(e.target.value)}}></input>
                        <label>Telefon</label>
                        <input onChange={(e) => {setPhone(e.target.value)}}></input>
                        <label>Vælg Program</label>
                        <select onChange={(e) => {setRunID(e.target.value)}}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div>
                        <label>Kommentar</label>
                        <input onChange={(e) => {setComment(e.target.value)}}></input>
                        <button onClick={(e) => {sendRegistration(e)}}>TILMELD</button>
                    </div>
                </form>
            </section>
        </div>
    )
}
