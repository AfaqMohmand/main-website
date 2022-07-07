import React from 'react'
import Gone from '../global/one'
import styles from "./sfour.module.css"

function SecFour() {
  return (
    <div className={styles.DOnw}>
            <div className={styles.Dtop}>
                <Gone text={`Trusted by teams everywhere`}/>
            </div>
            <div> 
            <div className={styles.LogoGrop}>
                    <Logos/>
                    <Logos/>
                    <Logos/>
                    <Logos/>
            </div>
            <div className={styles.LogoGrop}>
                    <Logos/>
                    <Logos/>
                    <Logos/>
                    <Logos/>
            </div>
            </div>
    </div>
  )
}

export default SecFour

export function Logos(){
    return(<div className={styles.Logo}>
        {/* <Image/> */}
        <p>Logos</p>
    </div>)
}