
import React ,{useState,useRef} from 'react'
import styles from "./nav.module.css"
import Image from 'next/image'
import { BlueBtn } from '../global/one'

import { FiAlignJustify} from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [open ,setOpen]=useState(false)
  
  // const toggle = useRef(true)    
  // const handel=()=>{
  //   toggle.current=!toggle.current
  // }

  const Open=()=>{
      setOpen(!open)
    }
  return (
    <div className={styles.None}>
     <div className={styles.Ntwo}> 
      <div className={styles.logo }>
        <Image src={`/logo.png`} width={150} height={100} layout="fixed"/>
      {/* for mobile */}
      </div>
     <div className={styles.Buyy} onClick={Open} >
       {open ? <AiOutlineClose color='white'      size={30} /> : <FiAlignJustify    size={30} />}
     </div>
      <div onClick={Open}  className={styles.Nthree} style={{top: open ? "0px" : "-503px"}}>
      <div className={styles.Close}>
        <AiOutlineClose color='white' size={30}/>
      </div>
      <Navitem data={`one`}/>
      <Navitem data={`two`}/>
      <Navitem data={`three`}/>
      <Navitem data={`four`}/>
      <Navitem data={`five`}/>
      <Navitem data={`six`}/>

      <BlueBtn text={`Get a quote`}/>
      </div>
      </div>
    </div>
  )
}

export default Navbar


// navitem
export function Navitem({data}) {
  return(<div className={styles.nItem}>
    {/* <div> */}
      {data}
    {/* </div> */}
  </div>)
}

 