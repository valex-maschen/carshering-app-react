import React, { useState, useCallback } from 'react';
import cn from 'classnames';
import styles from './startScreen.module.scss';
import Menu from '../../components/menu/menu';
import Layout from '../../components/Layout/Layout';
import LeftArrow from '../../assets/leftArrow.svg';
import RightArrow from '../../assets/rightArrow.svg';
import BgSlider from '../../assets/backgroundSlider.svg';

const StartScreen = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = useCallback(() => {
        setIsOpen(!isOpen);
    }, [isOpen]);

    return (
        <div className={styles.content}>
            <Menu onClick={handleClick} isOpen={isOpen} />
            <Layout
                leftColoumn={
                    isOpen ? (
                        <div> Открыто </div>
                    ) : (
                        <div className={styles.container}>
                            <div className={styles.logo}>
                                <h3 className={styles.headerLogo}> Need for drive </h3>
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
                    )
                }
                rightColoumn={
                    <div className={styles.sliderContainer}>
                        <BgSlider className={styles.bgSlider} />
                        <button className={styles.leftButton}>
                            <LeftArrow width="100%" style={{ zIndex: 2 }} />
                        </button>
                        <button className={styles.rightButton}>
                            <RightArrow width="100%" style={{ zIndex: 2 }} />
                        </button>
                    </div>
                }
            />
        </div>
    );
};

export default StartScreen;
