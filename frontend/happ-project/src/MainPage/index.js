import React, { useState, useEffect } from "react";
import Stencil from "../Stencil";

//import styles
import styles from "./styles.module.scss";

const MainPage = (props) => {
    const [showKidsInfo, setKidsInfoToggle] = useState(false);
    const [showNotKidsInfo, setNotKidsInfoToggle] = useState(false);

    function toggleKidsInfo(){
        setKidsInfoToggle(!showKidsInfo);
    }

    function toggleNotKidsInfo(){
        setNotKidsInfoToggle(!showNotKidsInfo);
    }

    return (
        <div className={styles.main}>
            <div className={styles.heading}><h3>Finding happiness...</h3></div>
            <h4 className={styles.infoHeader}>How to find it?</h4>
            <div className={styles.infoButtons}>
                <div className={styles.kids}>
                    <button onClick={toggleKidsInfo}>Tips For Kids</button>
                </div>
                <div className={styles.notKids}>
                    <button onClick={toggleNotKidsInfo}>Tips for not so Kids</button>
                </div>
            </div>
            <div className={`${styles.kidsInfo} ${showKidsInfo ? styles.show : styles.noShow}`}>
                <div className={styles.infoBox}>
                    <div className={styles.KidsPage}>
                        <h3 className={styles.tipsHeading}>Okay, so what to do?</h3>
                        <div className={styles.task}>
                            <div className={styles.taskDetail}>1. Select the country from the list at the top corner.</div>
                            <div><img className={styles.taskImg} src="" alt="select country image"/></div>
                        </div>
                        <div className={styles.task}>
                            <div className={styles.taskDetail}>2. Click the shapes on the right and drag them to the similar holes.</div>
                            <div><img className={styles.taskImg} src="" alt="Drag and drop image"/></div>
                        </div>
                        <div className={styles.task}>
                            <div className={styles.taskDetail}>3. Make the shapes bigger or smaller so fit perfectly! That's it, eazy peezy!!</div>
                            <div><img className={styles.taskImg} src="" alt="changing shape size image"/></div>
                        </div>
                        <div className={styles.task}>
                            <div className={styles.taskDetail}>4. Point your mouse to each shape to know more about it!</div>
                            <div><img className={styles.taskImg} src="" alt="pointing to the shape image"/></div>
                        </div>
                        <div className={styles.closeInfo}><button onClick={toggleKidsInfo}>Let's go!</button></div>
                    </div>
                </div>
            </div>
            <div className={`${styles.notKidsInfo} ${showNotKidsInfo ? styles.show : styles.noShow}`}>
                <div className={styles.infoBox}>
                    <div className={styles.notKidsPage}>
                        <h3 className={styles.tipsHeading}>So, what's this activity is about?</h3>
                        <div className={styles.info}>
                            <div className={styles.infoDetail}>
                                Kids are supposed to select a country from the list and then drag them to its
                                corresponding hole in the stencil below. What's interesting here is the hole 
                                size is the size of the happiest country in the world Finland, so it basically 
                                goes to shows that how a certain country is lacking/gaining in a category.
                            </div>
                            <div className={styles.infoImg}><img src="" alt="stencil1 image"/></div>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.infoDetail}>
                                Each shape represents a category on which the happiness score is measured, Circle:
                                Gdp Per Capita, Rectangle: Social Support, Triangle: Generosity, Square: Percept of
                                corrupt, Pentagon: Freedom of choice, Star: Healthy life expectancy.
                            </div>
                            <div className={styles.infoImg}><img src="" alt="stencil2 image"/></div>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.infoDetail}>
                                So when the children will select any shape and if it's smaller than the standard size
                                that means that country needs to work on that category where as for any size bigger than
                                standard will not require adjustment. Just to simply tell them what needs to be done in 
                                order to make their country a little bit happier. Click <span><a href="#">here</a></span>
                                to know more about it.
                            </div>
                            <div className={styles.infoImg}><img src="" alt="stencil3 image"/></div>
                        </div>
                        <div className={styles.closeInfo}><button onClick={toggleNotKidsInfo}>Activity time!</button></div>
                    </div>
                </div>
            </div>
            <Stencil />
            <div className={styles.aboutMe}>
                Here I will put random stuff about me...
            </div>
        </div>
    )
}

export default MainPage;