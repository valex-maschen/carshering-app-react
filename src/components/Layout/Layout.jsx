import React from "react";
import styles from "./Layout.module.css"

const Layout = ({leftColoumn, rightColoumn}) => {
    return(
        <div className={styles.layout}>
            <div className={styles.left}>
                {leftColoumn}
            </div>
            <div className={styles.right}>
                {rightColoumn}
            </div>
        </div>
    )
}

export default Layout