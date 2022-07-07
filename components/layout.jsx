// layout of app

import styles from "../styles/Home.module.css"
import Footer from "./footer";
import Navbar from "./navbar/nav";
// wrapp all pages with it will be able to use it in all pages
export default function Layout({ children }) {
    return(<div  className={styles.Layout} >
        <Navbar/>
    <main> 
    {children}
    </main>        
        <Footer/>
    </div>)
}