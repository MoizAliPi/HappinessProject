import React, { useState, useEffect } from "react";
import { getCountryData } from "../Services/country";
import ShapesInfo from "../ShapesInfo";

//import assets
import { mdiChevronDown, mdiChevronUp } from "@mdi/js";
import Icon from "@mdi/react";
import { Stage, Layer, Star, Rect, Circle, RegularPolygon, Text } from "react-konva";

//import styles
import styles from "./styles.module.scss";

const Stencil = () => {
    const countries = ["Afghanistan","Albania","Algeria","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahrain","Bangladesh","Belarus",
    "Belgium","Benin","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Central African Republic",
    "Chad","Chile","China","Colombia","Comoros","Congo (Brazzaville)","Congo (Kinshasa)","Costa Rica","Croatia","Cyprus","Czech Republic","Denmark","Dominican Republic",
    "Ecuador","Egypt","El Salvador","Estonia","Ethiopia","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Guatemala","Guinea","Haiti","Honduras",
    "Hong Kong S.A.R. of China","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Ivory Coast","Jamaica","Japan","Jordan","Kazakhstan","Kenya",
    "Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Lithuania","Luxembourg","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali",
    "Malta","Mauritania","Mauritius","Mexico","Moldova","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia","Nepal","Netherlands","New Zealand","Nicaragua","Niger",
    "Nigeria","North Cyprus","Norway","Pakistan","Palestinian Territories","Panama","Paraguay","Peru","Philippines","Poland","Portugal","Romania","Russia","Rwanda","Saudi Arabia",
    "Senegal","Serbia","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","Swaziland","Sweden","Switzerland",
    "Taiwan Province of China","Tajikistan","Tanzania","Thailand","Togo","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Uganda","Ukraine","United Arab Emirates",
    "United Kingdom","United States","Uruguay","Uzbekistan","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"]
    
    const [country, setCountry] = useState('Select a country');
    const [shapeId, setShapeID] = useState(0)
    const [display, setListDisplay] = useState(false);
    const [countryData, setCountryData] = useState({"Rank":{"data":1},"CountryName":{"data":"Finland"},"Region":{"data":"Western Europe"},"Score":{"data":7.808700085},"Gdp_Per_Capita":{"data":10.63926697},"Soc_Support":{"data":0.954329729},"Health_life_expectancy":{"data":71.9008255},"Freedom_of_choice":{"data":0.949172199},"Generosity":{"data":-0.059482019},"Percept_of_corrupt":{"data":0.195444584}});
    
    //shapes state
    const [squarePos, setSqPosition] = useState({x: 45, y:90})
    const [circlePos, setCircPosition] = useState({x: 225, y:110})
    const [starPos, setStarPosition] = useState({x: 375, y:120})
    const [rectanglePos, setRectPosition] = useState({x: 475, y:90})
    const [trianglePos, setTriPosition] = useState({x: 690, y:130})
    const [pentagonPos, setPentPosition] = useState({x: 825, y:130})


    //stencil sizes and position
    var finland = {"Rank":{"data":1},"CountryName":{"data":"Finland"},"Region":{"data":"Western Europe"},"Score":{"data":7.808700085},"Gdp_Per_Capita":{"data":10.63926697},"Soc_Support":{"data":0.954329729},"Health_life_expectancy":{"data":71.9008255},"Freedom_of_choice":{"data":0.949172199},"Generosity":{"data":-0.059482019},"Percept_of_corrupt":{"data":0.195444584}}
    var sqStencil = {x:30, y:120}
    var circStencil = {x:400, y:150}
    var starStencil = {x:800, y:150}
    var rectStencil = {x:30, y:330}
    var triStencil = {x:400, y:380}
    var pentStencil = {x:800, y:360}
    
    
    function toggleList(){
        setListDisplay(!display);
    }    

    function changeCountry(e){
        setCountry(e.target.innerHTML);
        setListDisplay(!display);
        console.log(e.target.innerHTML);
    }

    function checkIntersection(e){
        console.log("checking intersection");
        var shape = e.target.attrs;
        var layerX = 45
        var layerY = 150
        if(shape.id == 1){
            console.log("shape: square");
            if(shape.x <= 280 && shape.x >= 10 && shape.y <= 350 && shape.y >= 200){
                console.log("collision course!");
                setSqPosition({x:sqStencil.x + layerX, y:sqStencil.y + layerY});
            }else{
                setSqPosition({x: 45, y:90});
            }
        }
        else if(shape.id == 2){
            console.log("shape: circle");
            if(shape.x <= 545 && shape.x >= 350 && shape.y <= 380 && shape.y >= 220){
                console.log("collision course!");
                setCircPosition({x:circStencil.x + layerX, y:circStencil.y + layerY});
            }else{
                setCircPosition({x: 225, y:110});
            }
        }
        else if(shape.id == 3){
            console.log("shape: star");
            if(shape.x <= 900 && shape.x >= 780 && shape.y <= 360 && shape.y >= 190){
                console.log("collision course!");
                setStarPosition({x:starStencil.x + layerX, y:starStencil.y + layerY});
            }else{
                setStarPosition({x: 375, y:120});
            }
        }
        else if(shape.id == 4){
            console.log("shape: Rectangle");
            if(shape.x <= 150 && shape.x >= 0 && shape.y <= 540 && shape.y >= 420){
                console.log("collision course!");
                setRectPosition({x:rectStencil.x + layerX, y:rectStencil.y + layerY});
            }else{
                setRectPosition({x: 475, y:90});
            }
        }
        else if(shape.id == 5){
            console.log("shape: Triangle");
            if(shape.x <= 490 && shape.x >= 400 && shape.y <= 590 && shape.y >= 480){
                console.log("collision course!");
                setTriPosition({x:triStencil.x + layerX, y:triStencil.y + layerY});
            }else{
                setTriPosition({x: 690, y:130});
            }
        }
        else if(shape.id == 6){
            console.log("shape: Pentagon");
            if(shape.x <= 900 && shape.x >= 800 && shape.y <= 580 && shape.y >= 460){
                console.log("collision course!");
                setPentPosition({x:pentStencil.x + layerX, y:pentStencil.y + layerY});
            }else{
                setPentPosition({x: 825, y:130});
            }
        }
    }

    function showInfo(e){
        var shape = e.target.attrs;
        setShapeID(shape.id)
        console.log(shape.id)
    }

    function displayCord(e){
        var shape = e.target.attrs;
        if(shape.id == 1){
            setSqPosition({x:0, y:0});
        }else if(shape.id == 2){
            setCircPosition({x:0, y:0});
        }else if(shape.id == 3){
            setStarPosition({x:0, y:0});
        }else if(shape.id == 4){
            setRectPosition({x:0, y:0});
        }else if(shape.id == 5){
            setTriPosition({x:0, y:0});
        }else if(shape.id == 6){
            setPentPosition({x:0, y:0});
        }
        console.log(`X: ${Math.round(e.target.attrs.x)} Y: ${Math.round(e.target.attrs.y)}`);
    }

    useEffect(() => {
         // GET request using fetch inside useEffect React hook
         console.log(country)
         console.log("Country data change in effect..")

         if(country != "Select a country"){
            let mounted = true;
            getCountryData(country)
            .then(data => {
                if(mounted) {
                    setCountryData(data)
                    setSqPosition({x:45, y:90});
                    setCircPosition({x: 225, y:110});
                    setStarPosition({x: 375, y:120});
                    setRectPosition({x: 475, y:90});
                    setTriPosition({x: 690, y:130});
                    setPentPosition({x: 825, y:130});
                }
            })
            if(countryData != null){
                console.log(countryData)
            }
            return () => mounted = false;
        }

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, [country]);
    
    return (
        <div className={styles.mainArea}>
           <div className={styles.infoDivs}> 
                <div className={styles.dropDown}>
                    <button className={styles.dropDownBtn} onClick={toggleList}>{country} {display ? <Icon path={mdiChevronUp} size="35px" className={styles.selectIcon}/> : <Icon path={mdiChevronDown} size="35px" className={styles.selectIcon}/>}</button>
                    <div className={styles.dropDownContent} style={{ display: display ? "flex" : "none" }}>
                        <ul>
                            {countries.map((item)=>
                                <li className={styles.countryLabel} onClick={changeCountry}>{item}</li>
                            )}
                        </ul>
                    </div>
                </div>
                <ShapesInfo id={shapeId}/>
            </div>
            <div className={styles.shapeStage}>
                <Stage width={1000} height={700} margin={50}>
                    <Layer className={styles.shapeLayer}>
                        <Text x={45} y={20} fontSize={26} fill="#006990" fontFamily="Sniglet, cursive" text={`${countryData.CountryName.data}'s Shapes`} />
                        <Rect x={squarePos.x} y={squarePos.y} width={(100*(countryData.Gdp_Per_Capita.data/9.295706))/2} height={(100*(countryData.Gdp_Per_Capita.data/9.295706))/2} id="1" fill="#D7DF21" draggable onDragMove={displayCord} onDragEnd={checkIntersection} onMouseOver={showInfo}/>
                        <Circle x={circlePos.x} y={circlePos.y} radius={(100*(countryData.Freedom_of_choice.data/0.78336))/2} id="2" fill="#006990" draggable onDragMove={displayCord} onDragEnd={checkIntersection} onMouseOver={showInfo}/>
                        <Star x={starPos.x} y={starPos.y} numPoints={5} innerRadius={Math.min(20,10+(100*(countryData.Soc_Support.data/0.808721))/2)} outerRadius={10+(100*(countryData.Soc_Support.data/0.808721))/2} rotation={70} id="3" fill="#FFB61B" draggable onDragMove={displayCord} onDragEnd={checkIntersection} onMouseOver={showInfo}/>
                        <Rect x={rectanglePos.x} y={rectanglePos.y} width={25+(100*(countryData.Health_life_expectancy.data/64.4453))} height={25+(100*(countryData.Health_life_expectancy.data/64.4453))/2} id="4" fill="#D7DF21" draggable onDragMove={displayCord} onDragEnd={checkIntersection} onMouseOver={showInfo}/>
                        <RegularPolygon x={trianglePos.x} y={trianglePos.y} sides={3} radius={(100*(countryData.Percept_of_corrupt.data/0.73312))/2} id="5" fill="#006990" draggable onDragMove={displayCord} onDragEnd={checkIntersection} onMouseOver={showInfo}/>
                        <RegularPolygon x={pentagonPos.x} y={pentagonPos.y} sides={6} radius={40-(100*(countryData.Generosity.data/-0.01457))/64} id="6" fill="#FFB61B" draggable onDragMove={displayCord} onDragEnd={checkIntersection} onMouseOver={showInfo}/>    
                    </Layer>
                    <Layer x={45} y={150} className={styles.stencilLayer}>
                        <Text x={0} y={60} fontSize={26} fill="#006990" fontFamily="Sniglet, cursive" text="Happiest country's shapes" />
                        <Rect x={sqStencil.x} y={sqStencil.y} width={(100*(finland.Gdp_Per_Capita.data/9.295706))/2} height={(100*(finland.Gdp_Per_Capita.data/9.295706))/2} stroke="#9F388A" strokeWidth={2}/>
                        <Circle x={circStencil.x} y={circStencil.y} radius={(100*(finland.Freedom_of_choice.data/0.78336))/2} stroke="#9F388A" strokeWidth={2}/>
                        <Star x={starStencil.x} y={starStencil.y} numPoints={5} innerRadius={Math.min(20,10+(100*(finland.Soc_Support.data/0.808721))/2)} outerRadius={10+(100*(finland.Soc_Support.data/0.808721))/2} rotation={70} stroke="#9F388A" strokeWidth={2} />
                        <Rect  x={rectStencil.x} y={rectStencil.y} width={25+(100*(finland.Health_life_expectancy.data/64.4453))} height={25+(100*(finland.Health_life_expectancy.data/64.4453))/2} stroke="#9F388A" strokeWidth={2} />
                        <RegularPolygon x={triStencil.x} y={triStencil.y} sides={3} radius={(100*(finland.Percept_of_corrupt.data/0.73312))/2} stroke="#9F388A" strokeWidth={2} />
                        <RegularPolygon  x={pentStencil.x} y={pentStencil.y} sides={6} radius={40-(100*(finland.Generosity.data/-0.01457))/64} stroke="#9F388A" strokeWidth={2} />        
                    </Layer>
                </Stage>
            </div>
        </div>
    )
}

export default Stencil;