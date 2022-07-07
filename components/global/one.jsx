// all global components  defined here
import React from 'react'
import styles from "./globe.module.css"
import Image from 'next/image'



function Gone({text}) {
  return (
    <div className={styles.Gone}>
        <Image src={`/loo.png`} width={30} height={30}/>
        <span>{text}</span>
    </div>
  )
}

export default Gone


// button component Blue
export function BlueBtn({text}){
    return(<div className={styles.butblue}>
            {text}     
    </div>)
}
// button component Black
export function BlackBtn({text}){
    return(<div className={styles.butblack}>
            {text}      
    </div>)
}

// Linked Icons Social Used In fotter and  constact
export function SocilaIcons(){
  return(<div className={styles.Icon}>
    <Image src={`/Twitter.png`} width={20} height={20} layout={"fixed"}/>
    <Image src={`/Facebook.png`} width={20} height={20} layout={"fixed"}/>
    <Image src={`/Linkedin.png`} width={20} height={20} layout={"fixed"}/>
    <Image src={`/Instagram.png`} width={20} height={20} layout={"fixed"}/>
  </div>)
}