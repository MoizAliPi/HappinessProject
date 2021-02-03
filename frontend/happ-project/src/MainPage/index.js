import React, { useState, useEffect } from "react";
import Stencil from "../Stencil";

//import styles
import styles from "./styles.module.scss";

const MainPage = (props) => {
    return (
        <div className={styles.main}>
            <div className={styles.heading}><h3>Finding happiness...</h3></div>
            <h4 className={styles.infoHeader}>How to find it?</h4>
            <div className={styles.infoButtons}>
                <div className={styles.kids}>
                    <button>For Kids</button>
                </div>
                <div className={styles.notKids}>
                    <button>For not so Kids</button>
                </div>
            </div>
            <div className={styles.kidsInfo}>
                Here will be the information for kids....
            </div>
            <div className={styles.notKidsInfo}>
                Here will be the information for adults
            </div>
            <Stencil />
            <div className={styles.aboutMe}>
                Here I will put random stuff about me...
            </div>
        </div>
    )
}

export default MainPage;