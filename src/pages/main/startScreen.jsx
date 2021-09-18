import React from "react";
import styles from "../main/startScreen.module.css";
import Menu from "../../components/menu/menu"

const StartScreen = () => {
    return(
        <div className={styles.content}>
            <Menu/>
                <div className={styles.logo}>
                    <h1>  Need for drive  </h1> 
                </div>
                <div className={styles.headers}>
                    <h1 className={styles.header1}>Каршеринг</h1>
                    <h2 className={styles.header2}>Need for drive </h2>
                    <p className={styles.paragraph}> Поминутная аренда авто твоего города</p>
                </div>
        </div>
    )
}

export default StartScreen;