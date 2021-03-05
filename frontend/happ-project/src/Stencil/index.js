import React, { useState, useEffect } from "react";
import { getCountryData } from "../Services/country";
import ShapesInfo from "../ShapesInfo";

//import assets
import { mdiChevronDown, mdiChevronUp } from "@mdi/js";
import Icon from "@mdi/react";
import { Stage, Layer, Star, Rect, Circle, RegularPolygon } from "react-konva";

//import styles
import styles from "./styles.module.scss";

const Stencil = () => {
    const countries = ["Finland", "Denmark", "Switzerland",
        "Iceland","Norway","Netherlands","Sweden","New Zealand","Austria","Luxembourg","Canada","Australia","United Kingdom","Israel","Costa Rica","Ireland","Germany","United States","Czech Republic","Belgium",
        "United Arab Emirates","Malta","France","Mexico","Taiwan Province of China","Uruguay","Saudi Arabia","Spain","Guatemala","Italy","Singapore","Brazil","Slovenia","El Salvador","Kosovo","Panama","Slovakia","Uzbekistan","Chile","Bahrain","Lithuania",
        "Trinidad and Tobago","Poland","Colombia","Cyprus","Nicaragua","Romania","Kuwait","Mauritius","Kazakhstan","Estonia","Philippines","Hungary","Thailand","Argentina","Honduras","Latvia","Ecuador","Portugal","Jamaica","South Korea", "Japan","Peru","Serbia",
        "Bolivia","Pakistan","Paraguay","Dominican Republic","Bosnia and Herzegovina","Moldova","Tajikistan","Montenegro","Russia","Kyrgyzstan","Belarus","North Cyprus","Greece","Hong Kong S.A.R. of China","Croatia","Libya","Mongolia","Malaysia","Vietnam","Indonesia","Ivory Coast","Benin","Maldives","Congo (Brazzaville)",
        "Azerbaijan","Macedonia","Ghana","Nepal","Turkey","China","Turkmenistan","Bulgaria","Morocco","Cameroon","Venezuela","Algeria","Senegal","Guinea","Niger","Laos","Albania",
        "Cambodia","Bangladesh","Gabon","South Africa","Iraq","Lebanon","Burkina Faso","Gambia","Mali","Nigeria","Armenia","Georgia","Iran","Jordan","Mozambique","Kenya","Namibia","Ukraine","Liberia","Palestinian Territories","Uganda","Chad","Tunisia","Mauritania",
        "Sri Lanka","Congo (Kinshasa)","Swaziland","Myanmar","Comoros","Togo","Ethiopia","Madagascar","Egypt","Sierra Leone","Burundi",
        "Zambia","Haiti","Lesotho","India","Malawi","Yemen","Botswana","Tanzania","Central African Republic","Rwanda","Zimbabwe","South Sudan","Afghanistan"
        ]
    
    const [country, setCountry] = useState('Select a country');
    const [display, setListDisplay] = useState(false);
    const [countryData, setCountryData] = useState({"Rank":{"data":1},"CountryName":{"data":"Finland"},"Region":{"data":"Western Europe"},"Score":{"data":7.808700085},"Gdp_Per_Capita":{"data":10.63926697},"Soc_Support":{"data":0.954329729},"Health_life_expectancy":{"data":71.9008255},"Freedom_of_choice":{"data":0.949172199},"Generosity":{"data":-0.059482019},"Percept_of_corrupt":{"data":0.195444584}});
    
    //shapes state
    const [squarePos, setSqPosition] = useState({x: 45, y:40})
    const [circlePos, setCircPosition] = useState({x: 225, y:70})
    const [starPos, setStarPosition] = useState({x: 350, y:80})
    const [rectanglePos, setRectPosition] = useState({x: 450, y:70})
    const [trianglePos, setTriPosition] = useState({x: 700, y:90})
    const [pentagonPos, setPentPosition] = useState({x: 825, y:80})


    //stencil sizes and position
    var finland = {"Rank":{"data":1},"CountryName":{"data":"Finland"},"Region":{"data":"Western Europe"},"Score":{"data":7.808700085},"Gdp_Per_Capita":{"data":10.63926697},"Soc_Support":{"data":0.954329729},"Health_life_expectancy":{"data":71.9008255},"Freedom_of_choice":{"data":0.949172199},"Generosity":{"data":-0.059482019},"Percept_of_corrupt":{"data":0.195444584}}
    var sqStencil = {x:0, y:60}
    var circStencil = {x:400, y:90}
    var starStencil = {x:800, y:90}
    var rectStencil = {x:30, y:230}
    var triStencil = {x:400, y:280}
    var pentStencil = {x:800, y:260}
    
    
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
            if(shape.x <= 80 && shape.x >= 30 && shape.y <= 210 && shape.y >= 160){
                console.log("collision course!");
                setSqPosition({x:sqStencil.x + layerX, y:sqStencil.y + layerY});
            }else{
                setSqPosition({x:45, y:40});
            }
        }
        else if(shape.id == 2){
            console.log("shape: circle");
            if(shape.x <= 480 && shape.x >= 430 && shape.y <= 240 && shape.y >= 190){
                console.log("collision course!");
                setCircPosition({x:circStencil.x + layerX, y:circStencil.y + layerY});
            }else{
                setCircPosition({x:225, y:70});
            }
        }
        else if(shape.id == 3){
            console.log("shape: star");
            if(shape.x <= 880 && shape.x >= 830 && shape.y <= 240 && shape.y >= 190){
                console.log("collision course!");
                setStarPosition({x:starStencil.x + layerX, y:starStencil.y + layerY});
            }else{
                setStarPosition({x:350, y:80});
            }
        }
        else if(shape.id == 4){
            console.log("shape: Rectangle");
            if(shape.x <= 80 && shape.x >= 30 && shape.y <= 380 && shape.y >= 330){
                console.log("collision course!");
                setRectPosition({x:rectStencil.x + layerX, y:rectStencil.y + layerY});
            }else{
                setRectPosition({x:450, y:40});
            }
        }
        else if(shape.id == 5){
            console.log("shape: Triangle");
            if(shape.x <= 480 && shape.x >= 430 && shape.y <= 430 && shape.y >= 380){
                console.log("collision course!");
                setTriPosition({x:triStencil.x + layerX, y:triStencil.y + layerY});
            }else{
                setTriPosition({x:700, y:90});
            }
        }
        else if(shape.id == 6){
            console.log("shape: Pentagon");
            if(shape.x <= 880 && shape.x >= 830 && shape.y <= 450 && shape.y >= 350){
                console.log("collision course!");
                setPentPosition({x:pentStencil.x + layerX, y:pentStencil.y + layerY});
            }else{
                setPentPosition({x:825, y:80});
            }
        }
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
                    setSqPosition({x:45, y:30});
                    setStarPosition({x:350, y:80});
                    setCircPosition({x:225, y:70});
                    setRectPosition({x:450, y:40});
                    setTriPosition({x:700, y:90});
                    setPentPosition({x:825, y:80});
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
                <ShapesInfo />
            </div>
            <div className={styles.shapeStage}>
                <Stage width={1000} height={700} margin={50}>
                    <Layer className={styles.shapeLayer}>
                        <Rect x={squarePos.x} y={squarePos.y} width={(100*(countryData.Gdp_Per_Capita.data/9.295706))/2} height={(100*(countryData.Gdp_Per_Capita.data/9.295706))/2} id="1" fill="#D7DF21" draggable onDragMove={displayCord} onDragEnd={checkIntersection}/>
                        <Circle x={circlePos.x} y={circlePos.y} radius={(100*(countryData.Freedom_of_choice.data/0.78336))/2} id="2" fill="#006990" draggable onDragMove={displayCord} onDragEnd={checkIntersection}/>
                        <Star x={starPos.x} y={starPos.y} numPoints={5} innerRadius={25} outerRadius={(100*(countryData.Soc_Support.data/0.808721))/2} rotation={70} id="3" fill="#FFB61B" draggable onDragMove={displayCord} onDragEnd={checkIntersection}/>
                        <Rect x={rectanglePos.x} y={rectanglePos.y} width={(100*(countryData.Percept_of_corrupt.data/0.73312))} height={(100*(countryData.Percept_of_corrupt.data/0.73312))/2} id="4" fill="#D7DF21" draggable onDragMove={displayCord} onDragEnd={checkIntersection}/>
                        <RegularPolygon x={trianglePos.x} y={trianglePos.y} sides={3} radius={(100*(countryData.Health_life_expectancy.data/64.4453))/2} id="5" fill="#006990" draggable onDragMove={displayCord} onDragEnd={checkIntersection}/>
                        <RegularPolygon x={pentagonPos.x} y={pentagonPos.y} sides={6} radius={(10*(countryData.Generosity.data/-0.01457))/4} id="6" fill="#FFB61B" draggable onDragMove={displayCord} onDragEnd={checkIntersection}/>    
                    </Layer>
                    <Layer x={45} y={150} className={styles.stencilLayer}>
                        <Rect x={sqStencil.x} y={sqStencil.y} width={(100*(finland.Gdp_Per_Capita.data/9.295706))/2} height={(100*(finland.Gdp_Per_Capita.data/9.295706))/2} stroke="#9F388A" strokeWidth={5}/>
                        <Circle x={circStencil.x} y={circStencil.y} radius={(100*(finland.Freedom_of_choice.data/0.78336))/2} stroke="#9F388A" strokeWidth={5}/>
                        <Star x={starStencil.x} y={starStencil.y} numPoints={5} innerRadius={25} outerRadius={(100*(finland.Soc_Support.data/0.808721))/2} rotation={70} stroke="#9F388A" strokeWidth={5} />
                        <Rect  x={rectStencil.x} y={rectStencil.y} width={(100*(finland.Percept_of_corrupt.data/0.73312))} height={(100*(finland.Percept_of_corrupt.data/0.73312))/2} stroke="#9F388A" strokeWidth={5} />
                        <RegularPolygon x={triStencil.x} y={triStencil.y} sides={3} radius={(100*(finland.Health_life_expectancy.data/64.4453))/2} stroke="#9F388A" strokeWidth={5} />
                        <RegularPolygon  x={pentStencil.x} y={pentStencil.y} sides={6} radius={(10*(finland.Generosity.data/-0.01457))/4} stroke="#9F388A" strokeWidth={5} />        
                    </Layer>
                </Stage>
            </div>
        </div>
    )
}

export default Stencil;