import React from "react";
import styles from "../main/main.module.css";
import Menu from "../../components/menu/menu"

const Main = () => {
    return(
        <div className={styles.Content}>
            <Menu/>
        </div>
    )
}

export default Main;