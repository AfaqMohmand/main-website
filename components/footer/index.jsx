import React from 'react'
import { SocilaIcons } from '../global/one'
import styles from "./foot.module.css"
import Image from "next/image"

function Footer() {
  return (
        <footer className={styles.Fone} >
            <div className={styles.Ftwo}>
              {/* Upper */}
              <Lone/>
              <LTwo/>
              <LThree/>
              <LFour/>
            </div>
            <div className={styles.Copright}>
                <SocilaIcons/>
                <CopyRight/>
            </div>
        </footer>
  )
}

export default Footer

// Upper
// One commpone componnet  is beig share in all below components  define in global

export function Lone(){
  return(<div className={styles.Lone}>
      <Image src={`/Group.png`} layout="fixed" width={100} height={100}/>
  </div>)
}
// Ltwo
export function LTwo(){
  return(<div className={styles.LTwo}>
      <div className={styles.LThrr}>  
      < ComFot text={`company`}/>
      <Text p={`Service`}/>
      <Text p={`Blogs`}/>
      <Text p={`Profile`}/>
      <Text p={`Team`}/>
      <Text p={`Conatct`}/>
      <Text p={`FAQ,s`}/>
      </div>
  </div>)
}
// lthree
export function LThree(){
  return(<div className={styles.LTwo}>
      <ComFot text={`contact us`}/>
      <Text p={`+92 303 1234567`}/>
      <Text p={`BlocTAK@BT.com`}/>
  </div>)
}
// Upper
export function LFour(){
  return(<div className={styles.LTwo}>
      <ComFot text={`legal`}/>  
      <Text p={`Term’s & Conditions`}/>
      <Text p={`Privacy Policy`}/>

    
  </div>)
}
 
// Copy
export function CopyRight(){
  return(<div className={styles.CLast}>
    <p>COPYRIGHT
      <span>  © 2022 BlocTAK</span>
    </p>
    
  </div>
    )
}



// commpen fotter componet
export function ComFot({text}){
  return(<div className={styles.CopyI}>
   
   <div className={styles.Left}><Image  src={"/loo.png"} width={20} height={20} layout={"fixed"}/></div>
    <p>{text}</p>
  </div>)
}

// Text 
export function Text({p}){
  return(<div className={styles.Tex}>
    {p}
  </div>)
}