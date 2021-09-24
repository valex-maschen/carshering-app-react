import React, { useState, useCallback } from "react";
import styles from "../main/startScreen.module.css";
import Menu from "../../components/menu/menu"
import Layout from "../../components/Layout/Layout";
import cn from "classnames";
import LeftArrow from "../../assets/leftArrow.svg";

const StartScreen = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = useCallback(()=> {
        setIsOpen(!isOpen)
    }, [isOpen]) 

    return(
        <div className={styles.content}>
            <Menu onClick={handleClick} isOpen={isOpen}/>
            <Layout leftColoumn={ isOpen ? <div> Открыто </div> :
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <h3 className={styles.headerLogo}>  Need for drive  </h3> 
                    </div>
                    <div className={styles.headers}>
                         <h1 className={cn(styles.header1, styles.headerMarginBtm)}>Каршеринг</h1>
                         <h2 className={cn(styles.header2, styles.headerMargin)}>Need for drive </h2>
                         <p className={styles.paragraph}> Поминутная аренда авто твоего города</p>
                         <button className={styles.reserv}> Забронировать </button>
                    </div>
                    <div className={styles.footer}> 
                    <p className={styles.footerDate}> © 2016-2019 «Need for drive» </p> 
                    <p className={styles.footerTel}> 8 (495) 234-22-44 </p>
                    </div>
                </div>
                }
                    rightColoumn={
                    <div className={styles.sliderContainer}> 
                        <button className={styles.leftButton}> <LeftArrow/> </button>    
                        <button className={styles.rightButton}> + </button>
                    </div>}
                />
               
        </div>
    )
}

export default StartScreen;