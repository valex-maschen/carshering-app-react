import React, { useState, useCallback }from "react";
import styles from "../menu/menu.module.css";
import cn from "classnames";




const Menu = () => {
    const [open, setOpen] = useState(false);
    
    const handleClick = useCallback(()=> {
        setOpen(!open)
    }, [open]) 
    

    return (
        <div className={styles.menuContainer}>
            <div className={cn(styles.hamburger,{[styles.hamburgerOpen]: open})} onClick={handleClick} >
                <div className={styles.bar1}></div>
                <div className={styles.bar2}></div>
                <div className={styles.bar3}></div>
            </div>
        </div>
    )
}

export default Menu;