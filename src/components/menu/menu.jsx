import React, { useState }from "react";
import styles from "../menu/menu.module.css";
import cn from "classnames";




const Menu = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className={styles.MenuContainer}>
            <div className={cn(styles.Hamburger, open && styles.HamburgerOpen)} onClick={()=>setOpen((prev)=> !prev)} >
                <div className={styles.Bar1}></div>
                <div className={styles.Bar2}></div>
                <div className={styles.Bar3}></div>
            </div>
        </div>
    )
}

export default Menu;