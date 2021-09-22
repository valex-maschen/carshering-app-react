import React from "react";
import styles from "../menu/menu.module.css";
import cn from "classnames";




const Menu = ({onClick, isOpen}) => {
    
    return (
        <div className={styles.menuContainer}>
            <div className={cn(styles.hamburger,{[styles.hamburgerOpen]: isOpen})} onClick={onClick} >
                <div className={styles.bar1}></div>
                <div className={styles.bar2}></div>
                <div className={styles.bar3}></div>
            </div>
        </div>
    )
}

export default Menu;