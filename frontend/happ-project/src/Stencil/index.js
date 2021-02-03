import React, { useState, useEffect } from "react";
import Shape from "../Shape";

//import styles
import styles from "./styles.module.scss";

const Stencil = (props) => {
    return (
        <div className={styles.stencilBox}>
            This is the stencil container
            <Shape />
        </div>
    )
}

export default Stencil;