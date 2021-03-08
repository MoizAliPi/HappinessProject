import React, {useEffect, useLayoutEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//import components
import InfoPage from "../InfoPage";
import Stencil from "../Stencil";
import ContactMe from "../ContactMe";


//import styles
import styles from "./styles.module.scss";


const HomePage = () => {

    const [width, setWidth] = useState(window.innerWidth);
    
    useLayoutEffect(() => {
        function updateSize() {
          setWidth(window.innerWidth);
          console.log(width);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
      }, []);

    if(width >= 1024){
        return (
            <Container fluid className={styles.mainContainer}>
                <Row className={styles.mainRow}>
                    <Col sm={true} lg={3} className={styles.menuCol}>
                        <div className={styles.heading}><h3>Finding happiness</h3></div>
                        <h4 className={styles.infoHeader}>How to find it?</h4>
                        <InfoPage />
                        <ContactMe />
                    </Col>
                    <Col sm={true} lg={9} className={styles.stencilCol}>
                        <div>
                            <Stencil />
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }else{
        return (
            <Container fluid className={styles.smallContainer}>
                <div className={styles.smallMessage}>
                    <h2>Sorry, your screen is a little bit small for this activity,
                        please switch to a bigger screen! Thanks 
                    </h2>
                </div>
            </Container>
        )
    }

}

export default HomePage;