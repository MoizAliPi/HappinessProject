import React, {useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//import components
import InfoPage from "../InfoPage";
import Stencil from "../Stencil";
import ContactMe from "../ContactMe";

//import assets
import { mdiChevronRight, mdiChevronLeft, mdiClose } from "@mdi/js";
import Icon from "@mdi/react";

//import styles
import styles from "./styles.module.scss";


const HomePage = () => {


    return (
        <Container fluid className={styles.mainContainer}>
            <Row className={styles.mainRow}>
                <Col lg={3} className={styles.menuCol}>
                    <div className={styles.heading}><h3>Finding happiness</h3></div>
                    <h4 className={styles.infoHeader}>How to find it?</h4>
                    <InfoPage />
                    <ContactMe />
                </Col>
                <Col lg={9} className={styles.stencilCol}>
                    <div>
                        <Stencil />
                    </div>
                </Col>
            </Row>
        </Container>
    )

}

export default HomePage;