import React from 'react'
import Gone, { BlueBtn, SocilaIcons } from '../global/one'
import styles from "./seven.module.css"
import Image from 'next/image'

function SecSeven() {
  return (
    <div className={styles.SeOne}>
        <div className={styles.Stop}>
            <Gone text={`Contact Us`}/>
        </div>
        <div className={styles.SeTwo}>
            <Info/>
             <Form/>
        </div>
    </div>
  )
}

export default SecSeven

export function Info(){
    return(<div className={styles.Info}>
                {/*` address */}
                
                <div className={styles.InOne}>
                    <h1>Contact Information</h1>
                    <p> Eprel ketolig nafen ökasam. Vagerade dekasade paraspevis. Önat senusa. Vagerade dekasade paraspevis. </p>
                </div>
                <div className={styles.Loco}>
                    {/* Icons name */}
                    <div><Image src={`/Location.png`} layout="fixed" width={30} height={20} /> <ul>location</ul></div>
                    <div><Image src={`/Email.png`} layout="fixed" width={30} height={20} /> <ul>Email</ul></div>
                    <div><Image src={`/Phone.png`} layout="fixed" width={30} height={20} /> <ul>Phone</ul></div>
                </div >
                    {/*all  social Media icons  from Global*/}
                       <div>  <SocilaIcons/> </div>
                <div className={styles.Circ}>
                    <div className={styles.Red}></div>
                    <div className={styles.Blue}></div>
    
                </div>
            </div>
    )
}

export function Form(){
    // use React Hooks for Validation, mute value  and submit
 
    const left={
        position: "relative",
        left: "50%",

    }    
    return(<div className={styles.Form}>
            <div className={styles.The} > 
            <InputForm width={`200px`} name={`First Name`} place={`First Name`}/> 
            <InputForm width={`200px`} name={`Last Name` } place={`Last Name`}/>
            </div> 
            <InputForm width={`200px`} name={`Email Address`} place={`Email Address`}/> 
            <InputForm name={`Message`} place={`write your Message`} width={`450px`}/>
             {/*Button  */}
             <div style={left}> 
             <BlueBtn text={`Send Message`}/>
             </div>
    </div>)
}

// Input field
export function InputForm({name,place,width}){
    const style = {
        width: width ? width : "300px",
        border: "1px solid #414141"
    }
    return(<div className={styles.Inpo}>
        <span> {name}</span>
        <input placeholder={place}/>
        <p style={style}></p>
    </div>)
}