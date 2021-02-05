import React, { useState, useEffect } from "react";
import Shape from "../Shape";

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

    
    return (
        <div className={styles.stencilBox}>
           <div className={styles.selectBox}>
                <div className={styles.dropdown}>
                    <div className={styles.customSelect}>
                        <select>
                        {countries.map((item, index) =>{
                            return <option className={styles.customOption} name={index} value={item}>{item}</option>;
                        })}
                        </select>
                    </div>
                </div>
                <div className={styles.draggableShapes}>
                    Draggable Shapes
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