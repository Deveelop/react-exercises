import React,{useState} from "react";
import styles from './Login.module.css'
import ErrorModal from "../UI/ErrorModal";
import Button from "../UI/Button";

export default function FastlaneLogin(props){
const [isError, setError] = useState();
const [email, setEmail] = useState('')
const [pass, setPass] = useState('')
let realpass= 'vic123'
let realmail= 'vicsonabuka@gmail.com'
const clickHandle = () => {
   
}
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
    return(
        <>
       { isError && <ErrorModal title={isError.title} message={isError.message}/>}
        <div className={styles.container}>
            <img src="/images/stylinimg.jpg"/>
            <div className={styles.form}>
                <h2>Login</h2>
                <form onSubmit={submitter}>
                <div className={styles.form_control}>
                    <label>Email</label>
                    <input type="Email" placeholder="Email" onChange={emailChanger}/>
                </div>
                <div className={styles.form_control}>
                    <label>Password</label>
                    <input type="password" placeholder="Enter password" onChange={passChanger}/>
                </div>
                <div className={styles.linked}><a id="forgotpass" href="#">Forgot Password?</a>
                </div>
                <Button onClick={clickHandle}>Login</Button>
            </form>
            <div className={styles.linkedo}><label>Don't have account ? <a href="#">Sign Up</a></label></div>
        </div>
            </div>
        </>
    )
}