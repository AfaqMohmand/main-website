import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'

import styles from '../styles/Home.module.css'

const DynamicOne = dynamic(() => import('../components/sectOne/One'))
const DynamicTwo = dynamic(() => import('../components/secTwo'))
const DynamicThree = dynamic(() => import('../components/secThree'))
const DynamicFour = dynamic(() => import('../components/secFour'))
const DynamicFive =dynamic(()=>import("../components/secFive/index"))
const DynamicSix =dynamic(()=>import("../components/secSix/index"))
const DynamicSeven =dynamic(()=>import("../components/secSeven/index"))

import { useAmp } from 'next/amp'
 


export const config = {
    amp: 'hybride   ',
  }
export default function Home() {
    const isAmp = useAmp()
    return ( <div className={styles.Back}>
         
        {/* for SEO  */}
        <Head>
            <title>BlocTAK</title>
            {/* <link rel="icon" href="/favicon.ico" /> */}

            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="description" content="BlocTAK is a software development company. We are here to help you to create and boost your digital presence through world-class services. Our experienced team of professionals is dedicated to create and deliver business solutions including digital product development and support, DApps(decentralized Apps) development,Nft Development and Discord Services, Smart Contract Development and auditing, Token Development, Reward systems, IT consulting and technical content writing." />

        </Head>


            <DynamicOne/>
            <DynamicTwo/>
            <DynamicThree/>
            <DynamicFour/>  
            <DynamicFive/>
            <DynamicSix/>
            <DynamicSeven/>
         
    </div>
        )
    }