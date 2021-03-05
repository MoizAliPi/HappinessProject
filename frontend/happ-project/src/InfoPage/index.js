import React, { useState, useEffect } from "react";
import Stencil from "../Stencil";

//import assets
import { mdiChevronRight, mdiChevronLeft, mdiClose } from "@mdi/js";
import Icon from "@mdi/react";
import stepOne from "../Assets/Steps/countrySelect.jpg";
import stepTwo from "../Assets/Steps/dragShapes.jpg";
import stepThree from "../Assets/Steps/stepThree.png";
import stepFour from "../Assets/Steps/shapeInfo.jpg";


//import styles
import styles from "./styles.module.scss";

const InfoPage = () => {
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
                                <div><img className={styles.taskImg} src={stepOne} alt="select country image"/></div>
                            </div>
                            <div className={styles.slideBtns}>
                                <button className={styles.nextBtn} id="0" onClick={toggleRightSlide}>Go to next step <Icon path={mdiChevronRight} className={styles.toggleIcon}/></button>
                            </div>
                        </div>
                        <div className={`${styles.task} ${taskSlider[1] ? styles.show : styles.noShow}`}>
                            <div className={styles.taskDetails}>
                                <div className={styles.taskInfo}>2. Click the shapes below and drag them to their similar holes.</div>
                                <div><img className={styles.taskImg} src={stepTwo} alt="Drag and drop image"/></div>
                            </div>
                            <div className={styles.slideBtns}>
                                <button className={styles.prevBtn} id="1" onClick={toggleLeftSlide}><Icon path={mdiChevronLeft} className={styles.toggleLeftIcon}/>Go to previous step </button>
                                <button className={styles.nextBtn} id="1" onClick={toggleRightSlide}>Go to next step <Icon path={mdiChevronRight} className={styles.toggleIcon}/></button>
                            </div>
                        </div>
                        <div className={`${styles.task} ${taskSlider[2] ? styles.show : styles.noShow}`}>
                            <div className={styles.taskDetails}>
                                <div className={styles.taskInfo}>3. It's a magical stencil and it will fit any size of the shape! <br/>
                                 Wonder why each shape is of different size for every country?? (Next step tells that) </div>
                                <div>
                                    <img className={styles.taskImg} src={stepThree} alt="changing shape size image"/>
                                </div>
                            </div>
                            <div className={styles.slideBtns}>
                                <button className={styles.prevBtn} id="2" onClick={toggleLeftSlide}><Icon path={mdiChevronLeft} className={styles.toggleLeftIcon}/>Go to previous step </button>
                                <button className={styles.nextBtn} id="2" onClick={toggleRightSlide}>Go to next step <Icon path={mdiChevronRight} className={styles.toggleIcon}/></button>
                            </div>
                        </div>
                        <div className={`${styles.task} ${taskSlider[3] ? styles.show : styles.noShow}`}>
                            <div className={styles.taskDetails}>
                                <div className={styles.taskInfo}>4. Click the 'about shapes' button to know what each shape tells us!</div>
                                <div><img className={styles.taskImg} src={stepFour} alt="pointing to the shape image"/></div>
                            </div>
                            <div className={styles.slideBtns}>
                                <button className={styles.prevBtn} id="3" onClick={toggleLeftSlide}><Icon path={mdiChevronLeft} className={styles.toggleLeftIcon}/>Go to previous step </button>
                                <button className={styles.goInfo} onClick={toggleKidsInfo}>Eazy Peezy!!</button>
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
                                    size is the size of the happiest country in the world "Finland", so it basically 
                                    goes to shows that how a certain country is lacking/gaining in a category.
                                </div>
                                <div className={styles.infoImg}><img src={stepOne} alt="stencil1 image"/></div>
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
                                <div className={styles.infoImg}><img src={stepFour} alt="stencil2 image"/></div>
                            </div>
                            <div className={styles.slideBtns}>
                                <button className={styles.prevBtn} id="1" onClick={toggleInfoLeftSlide}><Icon path={mdiChevronLeft} className={styles.toggleLeftIcon}/>Go to previous step </button>
                                <button className={styles.nextBtn} id="1" onClick={toggleInfoRightSlide}>Go to next step <Icon path={mdiChevronRight} className={styles.toggleIcon}/></button>
                            </div>
                        </div>
                        <div className={`${styles.info} ${infoSlider[2] ? styles.show : styles.noShow}`}>
                            <div className={styles.infoDetails}>
                                <div className={styles.infoText}>
                                    So a shape with smaller than the standard size will mean that country needs to improve that category where as for any size bigger than
                                    standard will not require adjustment(except percept of corruption). Just to simply tell them what is required  
                                    to make their country a little bit happier. Click <span><a href="#"> here </a></span> to know more about it.
                                </div>
                                <div className={styles.infoImg}>
                                    <img src={stepThree} alt="stencil3 image"/>
                                </div>
                            </div>
                            <div className={styles.slideBtns}>
                                <button className={styles.prevBtn} id="2" onClick={toggleInfoLeftSlide}><Icon path={mdiChevronLeft} className={styles.toggleLeftIcon}/>Go to previous step </button>
                                <button className={styles.goInfo} onClick={toggleNotKidsInfo}>Activity time!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoPage;