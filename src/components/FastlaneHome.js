import React from "react";
import styles from './Fastlane.module.css'
import Button from "../UI/Button";
export default function FastlaneHome(props){
    return(
        <>
        <div className={styles.panel}>
           <img src='/images/stylinimg.jpg'/> 
            <h2>Viclane</h2>
            
            <Button onClick={props.onLogin}>Login</Button>
             <Button>Sign Up</Button>
            
            
        </div>
        </>
    )
}