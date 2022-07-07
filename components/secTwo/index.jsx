import React from 'react'
import styles from  "./two.module.css"
import Image from 'next/image'
import { BlackBtn } from '../global/one'

function Sectwo() {
  return (
    <div className={styles.Tone}>
        {/* one */}
        <div className={styles.Ttwo}>
            <div className={styles.Mob}> <Image className={styles.Ima} src={`/Group.png`} width={`750`} height={`550`}/> </div>
            <div className={styles.Tthree}>
                <h1>Welcome to BlocTAK - Fastest Growing IT Company </h1>
                <p>BlocTAK is a software development company. We are here to help you to create and boost your digital presence through world-class services. Our experienced team of professionals is dedicated to create and deliver business solutions including digital product development and support, DApps(decentralized Apps) development,Nft Development and Discord Services, Smart Contract Development and auditing, Token Development, Reward systems, IT consulting and technical content writing.</p>
            </div>
        </div>
        {/* images */}
        <div className={styles.Trust}>
            <div><Image src={`/Shape.png`} width={`150`} height={`150`}/></div>
            <div><Image src={`/Shape.png`} width={`150`} height={`150`}/></div>
            <div><Image src={`/Shape.png`} width={`150`} height={`150`}/></div>
            <div><Image src={`/Shape.png`} width={`150`} height={`150`}/></div>
        </div>

            <div className={styles.Sm}> <BlackBtn text={`Talk to Our Experts`}/> </div>
    </div>
  )
}

export default Sectwo