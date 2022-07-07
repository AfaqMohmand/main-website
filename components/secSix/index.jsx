import React from 'react'
import Gone, { BlackBtn, BlueBtn } from '../global/one'
import styles from "./six.module.css"

function SecSix() {
 
  return (
    <div className={styles.Sone}>
    
    <div className={styles.Paki} >  <Gone text={`Oue Curent Blogs`}/> </div>
     <div className={styles.Mtag}>    
    <div className={styles.Right}>
        {/* right  */}
        <BoxBig/>    
    </div>
    {/* for Mobile */}
    
    <div className  ={styles.Ham}>
            <BlueBtn text={`Contact Us`}/>
            <BlackBtn text={`View More`}/>
        </div>
    <div className={styles.Left}>
        {/* left  */}
    
        <Boxinfo/>
        <Boxinfo/> 
         <Boxinfo/> 
         <Boxinfo/> 
    </div>
    </div>
    </div>  
  )
}

export default SecSix

// Big Box
export function BoxBig(){
    return(<div className={styles.BigIn}>
        {/* <Image/> */}
        <h1>Image</h1>
        <div className={styles.Bione}>
            <p>One</p>
            <span>Two</span>
        </div>
        <div className={styles.TexB}>
            <h2>Lörem ipsum nanoteknik pergyn tibånd såväl som fant?</h2>
            <p>Lörem ipsum nanoteknik pergyn tibånd såväl som fant. Lörem ipsum nanoteknik pergyn tibånd såväl som fant.</p>
            <div className={styles.Bimg}>
                <p>Ava</p>
                <span>NAME</span>
            </div>
        </div>
    </div>)
}


// Small Box
export function Boxinfo(){
    return(<div className={styles.SmOne}>
        {/* <Image/> */}
        <h1>Image</h1>
        <div style={{margin:"110px"}}>
            <div className={styles.Smtex}>
                <p>One</p>
                <span>Two</span>
            </div>
            <span className={styles.Lor}>Lörem ipsum nanoteknik pergyn tibånd såväl som fant?</span>
        </div>
    </div>)
}