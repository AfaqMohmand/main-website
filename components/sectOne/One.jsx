import React from 'react'
import styles from "./one.module.css"
import { BiPlay } from "react-icons/bi";
import Image from 'next/image'
import {  BlueBtn } from '../global/one';

import { AiOutlineUp } from "react-icons/ai";
import {  AiOutlineDown} from "react-icons/ai";


function One() {
//  Move  Up 
  const Scrolltop = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}
const Scrolldown= () => {
   window.scrollTo({
        top: 5000,
        left: 0,
        behavior: 'smooth'
    });
}
  return (
    <div className={styles.sOne}>

        <div className={styles.Move}> 
        <p onClick={Scrolltop}><AiOutlineUp color='white' /></p>
        <p onClick={Scrolldown}><AiOutlineDown color='white'/></p>
        </div>
        {/* for text  */}
        <div className={styles.sTwo}>
            <h1>BlocTAK</h1>
            <h2>shaping the future of blockchain</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, odio. Velit temporibus vitae totam ab excepturi corporis adipisci consequuntur, vel porro enim consectetur doloribus voluptatibus eligendi possimus quam modi! Nulla!</p>
            <div className={styles.buttn}>

                <BlueBtn text={`Get a Quote`}/>
                 <button className={styles.watch}>
                                <BiPlay/>
                         <span>Watch Now</span>
                 </button>
            </div>
        </div>
        {/* for image */}
        <div>

        <Image src ={`/ione.png`}width={`550`} height={`550`}/>
        </div>
    </div>
  )
}

export default One