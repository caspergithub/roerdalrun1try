import React from 'react'
import Heroheader from '../heroheader/Heroheader'
import scss from '../styles/frontpage.module.scss'

export default function Frontpage() {
    return (
        <div className={scss.maindiv}>
            <Heroheader />
            <section className={scss.gridcontainer}>
                <div className={scss.item1}>
                    <h2>Rørdal Run 2020</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum porro quam veritatis minima repellat odio numquam nisi officiis eveniet, aliquid nostrum magnam corrupti fugiat! Veniam dignissimos tempore suscipit distinctio sit. Ipsum porro quam veritatis minima repellat odio numquam nisi officiis eveniet, aliquid nostrum magnam corrupti fugiat! Veniam dignissimos tempore suscipit distinctio sit.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis magni obcaecati quia odit sed nesciunt beatae id velit expedita omnis maiores accusamus necessitatibus animi, molestiae vel pariatur. Quia, porro explicabo. Ipsum porro quam veritatis minima repellat odio numquam nisi officiis eveniet, aliquid nostrum magnam corrupti fugiat! Veniam dignissimos tempore suscipit distinctio sit.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, laudantium nemo? Perferendis magni obcaecati quia odit sed.</p>
                    <button className={scss.mereinfo}>MERE INFO</button>
                </div>
                <div className={scss.item2}>
                    <h3>Ruter</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fugiat magnam saepe numquam unde voluptatibus vitae cumque. Sint sequi doloribus vitae odio ducimus autem excepturi, tempora tenetur impedit expedita fugit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo et tempora dolorem maxime quis, repellat quos explicabo accusamus minus ducimus blanditiis voluptate debitis magnam reprehenderit eligendi ipsam enim fugiat tempore? lorem</p>
                </div>
                <div className={scss.item3}>
                    <h3>One Mile</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam accusantium omnis doloribus inventore possimus tempore, ut hic earum, saepe labore, numquam quisquam dicta. Distinctio dicta porro nostrum eius culpa. Nobis.</p>
                    <button className={scss.tilmeld}>TILMELD ONE MILE</button>
                </div>
                <div className={scss.item4}>
                    <h3>5 km</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minus eius, dolorum sapiente similique incidunt eum non error, vel ducimus porro aut magni minima cumque doloremque distinctio perferendis numquam tempora?</p>
                    <button className={scss.tilmeld}>TILMELD 5 KM</button>
                </div>
                <div className={scss.item5}>
                    <h3>10 km</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, commodi. Nam recusandae doloremque repudiandae velit corporis cum, harum possimus veritatis accusantium voluptate unde a quisquam quibusdam explicabo dolorem animi.</p>
                    <button className={scss.tilmeld}>TILMELD 10 KM</button>
                </div>
            </section>
        </div>
    )
}
