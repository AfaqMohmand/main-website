import React from 'react'
import Gone, { BlackBtn, BlueBtn } from '../global/one'
import styles from "./four.module.css"

function Four() {
  return (
    <div className={styles.Fone}>
        
        <div className={styles.Ttwo}>
            <Gone text={"Our Profile"}/>
        </div>
        
        <div> 
        <div className={styles.ImgSec}>
            <ImgCard/>
            <ImgCard/>
            <ImgCard/>
            <ImgCard/>
        </div>
        <div className={styles.ImgSec}  >
            <div className={styles.Koo}> 
            <ImgCard/>
            <ImgCard/>
            <ImgCard/>
            <ImgCard/>
            </div>
        </div>
        </div>

        <div className={styles.GropButon}>
            <BlueBtn  text={`Conatct Us`}/>
            <BlackBtn text={`View More`}/>
            {/* button Group */}
        </div>

    </div>
  )
}

export default Four

// Imag card
export function ImgCard(){
    return(<div className={styles.Icard}>
            {/* <Image/> */}
            <p>Image</p>
    </div>)
}