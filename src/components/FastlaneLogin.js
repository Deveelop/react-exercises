import React,{useState} from "react";
import styles from './Login.module.css'
import ErrorModal from "../UI/ErrorModal";
import Button from "../UI/Button";
import {FaEnvelope, FaEye, FaEyeSlash, FaUnlock} from 'react-icons/fa'

export default function FastlaneLogin(props){
const [isError, setError] = useState();
const [email, setEmail] = useState('')
const [pass, setPass] = useState('')
const [isVisible, setVisible] = useState(false);
let realpass= 'vic123'
let realmail= 'vicsonabuka@gmail.com'

const emailChanger = (e) => {
setEmail(e.target.value)

}
const passChanger = (e) => {
    setPass(e.target.value)
}

const submitter = (e) => {
    e.preventDefault();

   
    if(email !== realmail){
        setError({
            title: 'Email does not exist',
            message: 'Please enter correct email'
        })
        return;
    }
    if(pass !== realpass){
     setError({
        title: 'Wrong password',
        message: 'Please enter correct password'
     })
     return;
    }
    console.log(email, pass)
}
const errorChecked = () => {
setError(null);
}

let password = document.querySelector('#password');
const checkPass = () => {
 if(password.type == 'password') {
    password.type = 'text'
     setVisible(true);
 }
}
const checkPassed = () => {
    if(password.type == 'text'){
       password.type = 'password'
        setVisible(false);
    }
}
    return(
        <>
       { isError && <ErrorModal title={isError.title} message={isError.message} onError={errorChecked}/>}
        <div className={styles.container}>
            <img src="/images/stylinimg.jpg"/>
            <div className={styles.form}>
                <h2>Login</h2>
                <form onSubmit={submitter}>
                <div className={styles.form_control}>
                    <div className={styles.ic1}><FaEnvelope/></div>
                    <label>Email</label>
                    <input type="Email" placeholder="Email" onChange={emailChanger}/>
                </div>
                <div className={styles.form_control}>
                   
                    <div className={styles.eyes}>{!isVisible && <FaEye onClick={checkPass}/>}
                    {isVisible && <FaEyeSlash onClick={checkPassed}/>}
                    </div>
                    <label>Password</label>
                    <input id="password" type="password" placeholder="Enter password" onChange={passChanger}/>
                </div>
                <div className={styles.linked}><a id="forgotpass" href="#">Forgot Password?</a>
                </div>
                <Button >Login</Button>
            </form>
            <div className={styles.linkedo}><label>Don't have account ? <a href="#">Sign Up</a></label></div>
        </div>
            </div>
        </>
    )
}