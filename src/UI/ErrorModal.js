import React from "react";
import styles from './ErrorModal.module.css'
import Card from "./Card";
import Button from "./Button";
export default function ErrorModal(props){
    return(
        <>
        <div className={styles.backdrop} onClick={props.onError}></div>
        <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={styles.comment}><p>{props.message}</p></div>
            <footer className={styles.action}>
            <Button className={styles.button} onClick={props.onError}>Okay</Button>
            </footer>
        </Card>
        </>
    )
}