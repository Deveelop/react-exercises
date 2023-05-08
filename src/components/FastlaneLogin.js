import React from "react";
import styles from './Login.module.css'
export default function FastlaneLogin(){
    return(
        <>
        <div className={styles.container}>
            <img src="/images/stylinimg.jpg"/>
            <div className={styles.form}>
                <h2>Login</h2>
                <form>
                <div className={styles.form_control}>
                    <label>Email</label>
                    <input type="Email" placeholder="Email"/>
                </div>
                <div className={styles.form_control}>
                    <label>Password</label>
                    <input type="password" placeholder="Enter password"/>
                </div>
                <div className={styles.linked}><a id="forgotpass" href="#">Forgot Password?</a>
                </div>
                <button>Login</button>
            </form>
            <div className={styles.linkedo}><label>Don't have account ? <a href="#">Sign Up</a></label></div>
        </div>
            </div>
        </>
    )
}