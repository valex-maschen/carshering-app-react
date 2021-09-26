import React from "react";
import styles from "../navBar/navBar.module.scss"
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

const Navbar = () => {
    return(
        <div className={styles.container}>
            <nav>
                <ul className={styles.navItems}>
                    <li className ={styles.navItem}>

                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;