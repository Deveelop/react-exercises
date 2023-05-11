import React from "react";
import styles from './ErrorModal.module.css'
import Card from "./Card";
import Button from "./Button";
export default function ErrorModal(props){
    return(
        <>
        <div className={styles.backdrop}></div>
        <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={styles.comment}><p>{props.message}</p></div>
            <footer className={styles.action}>
            <Button>Okay</Button>
            </footer>
        </Card>
        </>
    )
}