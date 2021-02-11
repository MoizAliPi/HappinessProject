import React, { useState, useEffect } from "react";
import Stencil from "../Stencil";

//import assets
import { mdiChevronRight, mdiChevronLeft, mdiClose } from "@mdi/js";
import Icon from "@mdi/react";

//import styles
import styles from "./styles.module.scss";

const MainPage = (props) => {
    const [showKidsInfo, setKidsInfoToggle] = useState(false);
    const [showNotKidsInfo, setNotKidsInfoToggle] = useState(false);
    const [taskSlider, setCurrentTask] = useState([true, false, false, false]);
    const [infoSlider, setCurrentInfo] = useState([true, false, false]);

    function toggleKidsInfo(){
        setKidsInfoToggle(!showKidsInfo);
        let newSlider = [...taskSlider];
        newSlider.map((item,index) =>{
            console.log("setting the initial state");
            if(index == 0){
                newSlider[index] = true;
            }else{
                newSlider[index] = false;
            }
        })
        setCurrentTask(newSlider);
    }

    function toggleNotKidsInfo(){
        setNotKidsInfoToggle(!showNotKidsInfo);
        let newSlider = [...infoSlider];
        newSlider.map((item,index) =>{
            console.log("setting the initial state");
            if(index == 0){
                newSlider[index] = true;
            }else{
                newSlider[index] = false;
            }
        })
        setCurrentInfo(newSlider);
    }

    function toggleLeftSlide(e){
        console.log(e.target.id)
        let newSlider = [...taskSlider]
        var index = parseInt(e.target.id)
        newSlider[index] = false;
        newSlider[index-1] = true; 
        setCurrentTask(newSlider);
    }

    function toggleRightSlide(e){
        console.log(e.target.id)
        let newSlider = [...taskSlider]
        var index = parseInt(e.target.id)
        newSlider[index] = false;
        newSlider[index+1] = true;
        setCurrentTask(newSlider)
    }

    function toggleInfoLeftSlide(e){
        console.log(e.target.id)
        let newSlider = [...infoSlider]
        var index = parseInt(e.target.id)
        newSlider[index] = false;
        newSlider[index-1] = true; 
        setCurrentInfo(newSlider);
    }

    function toggleInfoRightSlide(e){
        console.log(e.target.id)
        let newSlider = [...infoSlider]
        var index = parseInt(e.target.id)
        newSlider[index] = false;
        newSlider[index+1] = true;
        setCurrentInfo(newSlider)
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
                <button className={styles.closeInfo} onClick={toggleKidsInfo}><Icon path={mdiClose} className={styles.closeIcon}/></button>
                <div className={styles.infoBox}>
                    <div className={styles.KidsPage}>
                        <h3 className={styles.tipsHeading}>Okay, so what to do?</h3>
                        <div className={`${styles.task} ${taskSlider[0] ? styles.show : styles.noShow}`}>
                            <div className={styles.taskDetails}>
                                <div className={styles.taskInfo}>1. Select the country from the list at the top corner.</div>
                                <div><img className={styles.taskImg} src="" alt="select country image"/></div>
                            </div>
                            <div className={styles.slideBtns}>
                                <button className={styles.nextBtn} id="0" onClick={toggleRightSlide}>Go to next step <Icon path={mdiChevronRight} className={styles.toggleIcon}/></button>
                            </div>
                        </div>
                        <div className={`${styles.task} ${taskSlider[1] ? styles.show : styles.noShow}`}>
                            <div className={styles.taskDetails}>
                                <div className={styles.taskInfo}>2. Click the shapes on the right and drag them to the similar holes.</div>
                                <div><img className={styles.taskImg} src="" alt="Drag and drop image"/></div>
                            </div>
                            <div className={styles.slideBtns}>
                                <button className={styles.prevBtn} id="1" onClick={toggleLeftSlide}><Icon path={mdiChevronLeft} className={styles.toggleLeftIcon}/>Go to previous step </button>
                                <button className={styles.nextBtn} id="1" onClick={toggleRightSlide}>Go to next step <Icon path={mdiChevronRight} className={styles.toggleIcon}/></button>
                            </div>
                        </div>
                        <div className={`${styles.task} ${taskSlider[2] ? styles.show : styles.noShow}`}>
                            <div className={styles.taskDetails}>
                                <div className={styles.taskInfo}>3. Make the shapes bigger to fit perfectly in the stencil! That's it, eazy peezy!!</div>
                                <div><img className={styles.taskImg} src="" alt="changing shape size image"/></div>
                            </div>
                            <div className={styles.slideBtns}>
                                <button className={styles.prevBtn} id="2" onClick={toggleLeftSlide}><Icon path={mdiChevronLeft} className={styles.toggleLeftIcon}/>Go to previous step </button>
                                <button className={styles.nextBtn} id="2" onClick={toggleRightSlide}>Go to next step <Icon path={mdiChevronRight} className={styles.toggleIcon}/></button>
                            </div>
                        </div>
                        <div className={`${styles.task} ${taskSlider[3] ? styles.show : styles.noShow}`}>
                            <div className={styles.taskDetails}>
                                <div className={styles.taskInfo}>4. Point your mouse to each shape to know more about it!</div>
                                <div><img className={styles.taskImg} src="" alt="pointing to the shape image"/></div>
                            </div>
                            <div className={styles.slideBtns}>
                                <button className={styles.prevBtn} id="3" onClick={toggleLeftSlide}><Icon path={mdiChevronLeft} className={styles.toggleLeftIcon}/>Go to previous step </button>
                                <button className={styles.goInfo} onClick={toggleKidsInfo}>Let's go!</button>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
            <div className={`${styles.notKidsInfo} ${showNotKidsInfo ? styles.show : styles.noShow}`}>
            <button className={styles.closeInfo} onClick={toggleNotKidsInfo}><Icon path={mdiClose} className={styles.closeIcon}/></button>
                <div className={styles.infoBox}>
                    <div className={styles.notKidsPage}>
                        <h3 className={styles.tipsHeading}>So, what's this activity is about?</h3>
                        <div className={`${styles.info} ${infoSlider[0] ? styles.show : styles.noShow}`}>
                            <div className={styles.infoDetails}>
                                <div className={styles.infoText}>
                                    Kids are supposed to select a country from the list and then drag them to its
                                    corresponding hole in the stencil below. What's interesting here is the hole 
                                    size is the size of the happiest country in the world Finland, so it basically 
                                    goes to shows that how a certain country is lacking/gaining in a category.
                                </div>
                                <div className={styles.infoImg}><img src="" alt="stencil1 image"/></div>
                            </div>
                            <div className={styles.slideBtns}>
                                <button className={styles.nextBtn} id="0" onClick={toggleInfoRightSlide}>Go to next step <Icon path={mdiChevronRight} className={styles.toggleIcon}/></button>
                            </div>
                        </div>
                        <div className={`${styles.info} ${infoSlider[1] ? styles.show : styles.noShow}`}>
                            <div className={styles.infoDetails}>
                                <div className={styles.infoText}>
                                    Each shape represents a category on which the happiness score is measured, Circle:
                                    Gdp Per Capita, Rectangle: Social Support, Triangle: Generosity, Square: Percept of
                                    corrupt, Pentagon: Freedom of choice, Star: Healthy life expectancy.
                                </div>
                                <div className={styles.infoImg}><img src="" alt="stencil2 image"/></div>
                            </div>
                            <div className={styles.slideBtns}>
                                <button className={styles.prevBtn} id="1" onClick={toggleInfoLeftSlide}><Icon path={mdiChevronLeft} className={styles.toggleLeftIcon}/>Go to previous step </button>
                                <button className={styles.nextBtn} id="1" onClick={toggleInfoRightSlide}>Go to next step <Icon path={mdiChevronRight} className={styles.toggleIcon}/></button>
                            </div>
                        </div>
                        <div className={`${styles.info} ${infoSlider[2] ? styles.show : styles.noShow}`}>
                            <div className={styles.infoDetails}>
                                <div className={styles.infoText}>
                                    So when the children will select any shape and if it's smaller than the standard size
                                    that means that country needs to work on that category where as for any size bigger than
                                    standard will not require adjustment. Just to simply tell them what needs to be done in 
                                    order to make their country a little bit happier. Click <span><a href="#">here</a></span>
                                    to know more about it.
                                </div>
                                <div className={styles.infoImg}><img src="" alt="stencil3 image"/></div>
                            </div>
                            <div className={styles.slideBtns}>
                                <button className={styles.prevBtn} id="2" onClick={toggleInfoLeftSlide}><Icon path={mdiChevronLeft} className={styles.toggleLeftIcon}/>Go to previous step </button>
                                <button className={styles.goInfo} onClick={toggleNotKidsInfo}>Activity time!</button>
                            </div>
                        </div>
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