import React from "react";
import styles from './Fastlane.module.css'

export default function FastlaneHome(){
    return(
        <>
        <div className={styles.panel}>
           <img src='/images/stylinimg.jpg'/> 
            <h2>Viclane</h2>
            
            <button>Login</button>
             <button>Sign Up</button>
            
            
        </div>
        </>
    )
}