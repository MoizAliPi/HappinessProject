import React, { useState, useEffect } from "react";

//import styles
import styles from "./styles.module.scss";

const ShapeInfo = (props) => {
    if(props.id == 0){
        return (
            <div className={styles.shapeBox}>
                Hover over a shape to know more about it!
            </div>
        )
    }
    else if(props.id == 1){
        return (
            <div className={styles.shapeBox}>
                Square tells us that how much someone from that country will have to pay to 
                purchase a candy. SO... if the square is BIG then they have to pay less money
                and if square is SMALL then they have to pay more money.
            </div>
        )
    }
    else if(props.id == 2){
        return (
            <div className={styles.shapeBox}>
                Circle tells us that how much the country allows it's people to choose any flavour 
                of the candy. SO... if the circle is BIG then they allow you to choose any flavour
                and if its SMALL then they do not allow you to choose any flavour.
            </div>
        )
    }
    else if(props.id == 3){
        return (
            <div className={styles.shapeBox}>
                Star tells us that how much people of the country help others if they run out of candies.
                SO... if the star is BIG that means more people help others and if the star is SMALL
                then it means less people help each other.
            </div>
        )
    }
    else if(props.id == 4){
        return (
            <div className={styles.shapeBox}>
                Rectangle tells us that how much people are healthy in this country that means they
                don't eat a lot of candies! SO... if the Rectangle is BIG then many people are living a
                healthy life and if the Rectangle is SMALL then less people are living a healthy life.
            </div>
        )
    }
    else if(props.id == 5){
        return (
            <div className={styles.shapeBox}>
                Triangle tells us that how much people cheat or steal candies if they can not get one.
                SO... if the Triangle is BIG then it means many people steal candies and if the Triangle is SMALL then 
                it means less people steal candies.
            </div>
        )
    }
    else if(props.id == 6){
        return (
            <div className={styles.shapeBox}>
                Hexagon tells us that how much people donate candies to charity and to the people who cannot get one.
                SO... if the hexagon is BIG then many people donate candies to charities and if the hexagon is SMALL then
                they less people donate candies to charities. 
            </div>
        )
    }  
}

export default ShapeInfo;





// <div className={styles.shapeInfo}>
        //     <div className={styles.shapeBtn}>
        //         <button onClick={toggleShapeInfo}>About the Shapes</button>
        //     </div>
        //     <div className={`${styles.shapesInfo} ${showShapesInfo ? styles.show : styles.noShow}`}>
        //         <button className={styles.closeInfo} onClick={toggleShapeInfo}><Icon path={mdiClose} className={styles.closeIcon}/></button>
        //         <div className={styles.infoBox}>
        //             <div className={styles.ShapePage}>
        //                 <div className={`${styles.shape} ${shapeSlider[0] ? styles.show : styles.noShow}`}>
        //                     <h4 className={styles.shapeName}>Square</h4>
        //                     <div className={styles.shapeDetails}>
        //                         <div><img className={styles.shapeImg} src={Square} alt="Square image"/></div>
        //                         <div className={styles.shapeInfo}>
        //                             Square tells us that how much someone from that country will have to pay to 
        //                             purchase a candy. <br/><br/> So... if the square is BIG then they have to pay less money
        //                             and if square is SMALL then they have to pay more money. 
        //                         </div>
        //                     </div>
        //                     <div className={styles.shapeBtns}>
        //                         <button className={styles.nextBtn} id="0" onClick={toggleRightShape}>Circle <Icon path={mdiChevronRight} className={styles.toggleIcon}/></button>
        //                     </div>
        //                 </div>
        //                 <div className={`${styles.shape} ${shapeSlider[1] ? styles.show : styles.noShow}`}>
        //                     <h4 className={styles.shapeName}>Circle</h4>
        //                     <div className={styles.shapeDetails}>
        //                         <div><img className={styles.shapeImg} src={Circle} alt="Circle image"/></div>
        //                         <div className={styles.shapeInfo}>
        //                             Circle tells us that how much the country allows it's people to choose any flavour 
        //                             of the candy <br/><br/>So... if the circle is BIG then they allow you to choose any flavour
        //                             and if its SMALL then they do not allow you to choose any flavour.
        //                         </div>
        //                     </div>
        //                     <div className={styles.shapeBtns}>
        //                     <button className={styles.prevBtn} id="1" onClick={toggleLeftShape}><Icon path={mdiChevronLeft} className={styles.toggleLeftIcon}/>Square </button>
        //                         <button className={styles.nextBtn} id="1" onClick={toggleRightShape}>Star <Icon path={mdiChevronRight} className={styles.toggleIcon}/></button>
        //                     </div>
        //                 </div>
        //                 <div className={`${styles.shape} ${shapeSlider[2] ? styles.show : styles.noShow}`}>
        //                     <h4 className={styles.shapeName}>Star</h4>
        //                     <div className={styles.shapeDetails}>
        //                         <div><img className={styles.shapeImg} src={Star} alt="Star image"/></div>
        //                         <div className={styles.shapeInfo}>
        //                             Star tells us that how much people of the country help others if they run out of candies
        //                             <br/><br/> So... if the star is BIG that means more people help others and if the star is SMALL
        //                             then it means less people help each other.  
        //                         </div>
        //                     </div>
        //                     <div className={styles.shapeBtns}>
        //                     <button className={styles.prevBtn} id="2" onClick={toggleLeftShape}><Icon path={mdiChevronLeft} className={styles.toggleLeftIcon}/>Circle </button>
        //                         <button className={styles.nextBtn} id="2" onClick={toggleRightShape}>Rectangle <Icon path={mdiChevronRight} className={styles.toggleIcon}/></button>
        //                     </div>
        //                 </div>
        //                 <div className={`${styles.shape} ${shapeSlider[3] ? styles.show : styles.noShow}`}>
        //                     <h4 className={styles.shapeName}>Rectangle</h4>
        //                     <div className={styles.shapeDetails}>
        //                         <div><img className={styles.shapeImg} src={Rectangle} alt="Rectangle image"/></div>
        //                         <div className={styles.shapeInfo}>
        //                             Rectangle tells us that how much people are healthy in this country that means they
        //                             don't eat a lot of candies! <br/><br/> So... if the Rectangle is BIG then many people are living a
        //                             healthy life and if the Rectangle is SMALL then less people are living a healthy life.
        //                         </div>
        //                     </div>
        //                     <div className={styles.shapeBtns}>
        //                     <button className={styles.prevBtn} id="3" onClick={toggleLeftShape}><Icon path={mdiChevronLeft} className={styles.toggleLeftIcon}/>Star </button>
        //                         <button className={styles.nextBtn} id="3" onClick={toggleRightShape}>Triangle <Icon path={mdiChevronRight} className={styles.toggleIcon}/></button>
        //                     </div>
        //                 </div>
        //                 <div className={`${styles.shape} ${shapeSlider[4] ? styles.show : styles.noShow}`}>
        //                     <h4 className={styles.shapeName}>Triangle</h4>
        //                     <div className={styles.shapeDetails}>
        //                         <div><img className={styles.shapeImg} src={Triangle} alt="Triangle image"/></div>
        //                         <div className={styles.shapeInfo}>
        //                            Triangle tells us that how much people cheat or steal candies if they can not get one <br/><br/>
        //                            So... if the Triangle is BIG then it means many people steal candies and if the Triangle is SMALL then 
        //                            it means less people steal candies.
        //                         </div>
        //                     </div>
        //                     <div className={styles.shapeBtns}>
        //                     <button className={styles.prevBtn} id="4" onClick={toggleLeftShape}><Icon path={mdiChevronLeft} className={styles.toggleLeftIcon}/>Rectangle </button>
        //                         <button className={styles.nextBtn} id="4" onClick={toggleRightShape}>Hexagon <Icon path={mdiChevronRight} className={styles.toggleIcon}/></button>
        //                     </div>
        //                 </div>
        //                 <div className={`${styles.shape} ${shapeSlider[5] ? styles.show : styles.noShow}`}>
        //                     <h4 className={styles.shapeName}>Hexagon</h4>
        //                     <div className={styles.shapeDetails}>
        //                         <div><img className={styles.shapeImg} src={Hexagon} alt="Hexagon image"/></div>
        //                         <div className={styles.shapeInfo}>
        //                             Hexagon tells us that how much people donate candies to charity and to the people who cannot get one
        //                             <br/><br/> So... if the hexagon is BIG then many people donate candies to charities and if the hexagon is SMALL then
        //                             they less people donate candies to charities. 
        //                         </div>
        //                     </div>
        //                     <div className={styles.shapeBtns}>
        //                         <button className={styles.prevBtn} id="5" onClick={toggleLeftShape}><Icon path={mdiChevronLeft} className={styles.toggleLeftIcon}/>Triangle </button>
        //                         <button className={styles.goInfo} onClick={toggleShapeInfo}>Activity time!</button>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>