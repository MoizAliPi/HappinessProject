import React, {useEffect, useState} from "react";


//import assets
import { mdiChevronRight, mdiChevronLeft, mdiClose } from "@mdi/js";
import Icon from "@mdi/react";
import Avatar from "../Assets/avatar-moiz.png";

//import styles
import styles from "./styles.module.scss";


const ContactMe = () => {

    const [showContactInfo, setContactInfoToggle] = useState(false);

    function toggleContact(){
        setContactInfoToggle(!showContactInfo);
    }

    function openTypeform(){
        window.open("https://7a41iinx3kn.typeform.com/to/ZAB3OaNS", "_blank");
    }

    return (
        <div className={styles.contactPage}>
            <div className={styles.contactBtn}>
                <button className={styles.aboutBtn} onClick={toggleContact}>Who made this?</button>
            </div>

            <div className={`${styles.contactInfo} ${showContactInfo ? styles.show : styles.noShow}`}>
                <button className={styles.closeInfo} onClick={toggleContact}><Icon path={mdiClose} className={styles.closeIcon}/></button>
                <div className={styles.infoBox}>
                    <div className={styles.avatarImg}>
                        <img src={Avatar} alt="Avatar Img"/>
                    </div>
                    <div className={styles.aboutMe}>
                    <p> 
                        Well, My name is Moiz Ali and I just finish my studies at a University
                        where I learned a lot about computers. So I thought of making activities
                        like these based on what I learn at university and from internet and if 
                        you like this activity then let me know by clicking the button below Thanks!  </p>
                    </div>
                    <div className={styles.typeFormBtn}>
                        <button onClick={openTypeform}>Let's do it!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ContactMe;