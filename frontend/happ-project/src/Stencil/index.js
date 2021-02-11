import React, { useState, useEffect } from "react";
import Shape from "../Shape";
import { getCountryData } from "../Services/country";
//import assets
import { mdiChevronDown, mdiChevronUp } from "@mdi/js";
import Icon from "@mdi/react";

//import styles
import styles from "./styles.module.scss";

const Stencil = (props) => {
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
    const [countryData, setCountryData] = useState();

    function toggleList(){
        setListDisplay(!display);
    }    

    function changeCountry(e){
        setCountry(e.target.innerHTML);
        setListDisplay(!display);
        console.log(e.target.innerHTML);
    }

    useEffect(() => {
         // GET request using fetch inside useEffect React hook
         console.log(country)
         console.log("Country data change in effect..")
        let mounted = true;
        getCountryData(country)
        .then(data => {
            if(mounted) {
                setCountryData(data)
            }
        })
        console.log(countryData);
        return () => mounted = false;
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, [country]);
    
    return (
        <div className={styles.stencilBox}>
           <div className={styles.selectBox}>
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
                <div className={styles.draggableShapes}>
                    {JSON.stringify(countryData)}
                </div>
           </div>
           <div className={styles.dropBox}>
                Stencils to place shapes
                <Shape />
           </div>
        </div>
    )
}

export default Stencil;