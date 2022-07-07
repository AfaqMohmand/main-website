import React ,{useState}from 'react'
import styles from "./three.module.css"

import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import Gone from '../global/one';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function Index() {
    const [style,setstyle]=useState(styles.CardLinn)
    const Left = () => {
      
    }

        const Right = () => {
             
        }
 
    return (   
        <div className={styles.Tone}>
            {/* <h1>Section three</h1> */}
            <div className={styles.Ttwo}>
                {/* top */}
                <div className={styles.Opo}><Gone text={`What we provide`}/></div>
                <div className={styles.Icon}>
                    {/* icons */}
                    <p><FiArrowLeft onClick={Left} size={40}/></p>

                    <p><FiArrowRight onClick={Right} size={40}/> </p>
                </div>
            </div>
            
            <div className={styles.CardList}>
                {/* <div className={ style}> */}
                <Carousel autoPlay={true} showThumbs={false} infiniteLoop={true} interval={2000} stopOnHover={true} > 
                <CardP/>
                <CardP/>
                <CardP/>
                <CardP/>
                <CardP/>
                <CardP/>
                </Carousel>
                {/* </div> */}
            </div>
        </div>
  )
}

export default Index

// Card
export function CardP(){
    return(
        <div className={styles.Card}>
            {/* <Image/> */}
            <h2>Image</h2>
            <div className={styles.ztop}> 
            <h1>Heading</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing  quod.</p>
            <span>Learn More</span>
            </div>
        </div>
    )
}