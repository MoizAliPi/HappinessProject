import React, { useState, useEffect } from "react";
import { getCountryData } from "../Services/country";
import ShapesInfo from "../ShapesInfo";

//import assets
import { mdiChevronDown, mdiChevronUp } from "@mdi/js";
import Icon from "@mdi/react";
import {
  Stage,
  Layer,
  Star,
  Rect,
  Circle,
  RegularPolygon,
  Text,
  Ellipse,
} from "react-konva";

//import styles
import styles from "./styles.module.scss";

const Stencil = () => {
  const countries = [
    "Finland",
    "Denmark",
    "Switzerland",
    "Iceland",
    "Norway",
    "Netherlands",
    "Sweden",
    "New Zealand",
    "Austria",
    "Luxembourg",
    "Canada",
    "Australia",
    "United Kingdom",
    "Israel",
    "Costa Rica",
    "Ireland",
    "Germany",
    "United States",
    "Czech Republic",
    "Belgium",
    "United Arab Emirates",
    "Malta",
    "France",
    "Mexico",
    "Taiwan Province of China",
    "Uruguay",
    "Saudi Arabia",
    "Spain",
    "Guatemala",
    "Italy",
    "Singapore",
    "Brazil",
    "Slovenia",
    "El Salvador",
    "Kosovo",
    "Panama",
    "Slovakia",
    "Uzbekistan",
    "Chile",
    "Bahrain",
    "Lithuania",
    "Trinidad and Tobago",
    "Poland",
    "Colombia",
    "Cyprus",
    "Nicaragua",
    "Romania",
    "Kuwait",
    "Mauritius",
    "Kazakhstan",
    "Estonia",
    "Philippines",
    "Hungary",
    "Thailand",
    "Argentina",
    "Honduras",
    "Latvia",
    "Ecuador",
    "Portugal",
    "Jamaica",
    "South Korea",
    "Japan",
    "Peru",
    "Serbia",
    "Bolivia",
    "Pakistan",
    "Paraguay",
    "Dominican Republic",
    "Bosnia and Herzegovina",
    "Moldova",
    "Tajikistan",
    "Montenegro",
    "Russia",
    "Kyrgyzstan",
    "Belarus",
    "North Cyprus",
    "Greece",
    "Hong Kong S.A.R. of China",
    "Croatia",
    "Libya",
    "Mongolia",
    "Malaysia",
    "Vietnam",
    "Indonesia",
    "Ivory Coast",
    "Benin",
    "Maldives",
    "Congo (Brazzaville)",
    "Azerbaijan",
    "Macedonia",
    "Ghana",
    "Nepal",
    "Turkey",
    "China",
    "Turkmenistan",
    "Bulgaria",
    "Morocco",
    "Cameroon",
    "Venezuela",
    "Algeria",
    "Senegal",
    "Guinea",
    "Niger",
    "Laos",
    "Albania",
    "Cambodia",
    "Bangladesh",
    "Gabon",
    "South Africa",
    "Iraq",
    "Lebanon",
    "Burkina Faso",
    "Gambia",
    "Mali",
    "Nigeria",
    "Armenia",
    "Georgia",
    "Iran",
    "Jordan",
    "Mozambique",
    "Kenya",
    "Namibia",
    "Ukraine",
    "Liberia",
    "Palestinian Territories",
    "Uganda",
    "Chad",
    "Tunisia",
    "Mauritania",
    "Sri Lanka",
    "Congo (Kinshasa)",
    "Swaziland",
    "Myanmar",
    "Comoros",
    "Togo",
    "Ethiopia",
    "Madagascar",
    "Egypt",
    "Sierra Leone",
    "Burundi",
    "Zambia",
    "Haiti",
    "Lesotho",
    "India",
    "Malawi",
    "Yemen",
    "Botswana",
    "Tanzania",
    "Central African Republic",
    "Rwanda",
    "Zimbabwe",
    "South Sudan",
    "Afghanistan",
  ];

  const [country, setCountry] = useState("Select a country");
  const [display, setListDisplay] = useState(false);
  const [countryData, setCountryData] = useState({
    "Rank": { "data": 1 },
    "CountryName": { "data": "Finland" },
    "Region": { "data": "Western Europe" },
    "Score": { "data": 7.808700085 },
    "LoggedGDPPerCapita": { "data": 10.63926697 },
    "SocialSupport": { "data": 0.954329729 },
    "HealthyLifeExpectancy": { "data": 71.9008255 },
    "FreedomToMakeLifeChoices": { "data": 0.949172199 },
    "Generosity": { "data": -0.059482019 },
    "PerceptionsOfCorruption": { "data": 0.195444584 },
    "Dystopia": { "data": 2.363 },
  });

  //shapes state
  const [squarePos, setSqPosition] = useState({ x: 45, y: 90 });
  const [circlePos, setCircPosition] = useState({ x: 225, y: 110 });
  const [starPos, setStarPosition] = useState({ x: 375, y: 120 });
  const [rectanglePos, setRectPosition] = useState({ x: 475, y: 90 });
  const [trianglePos, setTriPosition] = useState({ x: 690, y: 130 });
  const [pentagonPos, setPentPosition] = useState({ x: 825, y: 130 });
  const [ellipsePos, setEllipsePosition] = useState({ x: 950, y: 130 });

  //stencil sizes and position
  var finland = {
    "Rank": { "data": 1 },
    "CountryName": { "data": "Finland" },
    "Region": { "data": "Western Europe" },
    "Score": { "data": 7.808700085 },
    "LoggedGDPPerCapita": { "data": 10.63926697 },
    "SocialSupport": { "data": 0.954329729 },
    "HealthyLifeExpectancy": { "data": 71.9008255 },
    "FreedomToMakeLifeChoices": { "data": 0.949172199 },
    "Generosity": { "data": -0.059482019 },
    "PerceptionsOfCorruption": { "data": 0.195444584 },
    "Dystopia": { "data": 2.363 },
  };
  var sqStencil = { x: 30, y: 150 };
  var circStencil = { x: 100, y: 325 };
  var starStencil = { x: 250, y: 180 };
  var rectStencil = { x: 375, y: 280 };
  var triStencil = { x: 550, y: 180 };
  var pentStencil = { x: 700, y: 325 };
  var ellipseStencil = { x: 800, y: 180 };

  function toggleList() {
    setListDisplay(!display);
  }

  function changeCountry(e) {
    setCountry(e.target.innerHTML);
    setListDisplay(!display);
    console.log(e.target.innerHTML);
  }

  function checkIntersection(e) {
    console.log("checking intersection");
    var shape = e.target.attrs;
    var layerX = 45;
    var layerY = 150;
    if (shape.id == 1) {
      console.log("shape: square");
      if (shape.x <= 150 && shape.x >= 40 && shape.y <= 350 && shape.y >= 200) {
        console.log("collision course!");
        setSqPosition({ x: sqStencil.x + layerX, y: sqStencil.y + layerY });
      } else {
        setSqPosition({ x: 45, y: 90 });
      }
    } else if (shape.id == 2) {
      console.log("shape: circle");
      if (
        shape.x <= 200 &&
        shape.x >= 100 &&
        shape.y <= 500 &&
        shape.y >= 375
      ) {
        console.log("collision course!");
        setCircPosition({
          x: circStencil.x + layerX,
          y: circStencil.y + layerY,
        });
      } else {
        setCircPosition({ x: 225, y: 110 });
      }
    } else if (shape.id == 3) {
      console.log("shape: star");
      if (
        shape.x <= 350 &&
        shape.x >= 200 &&
        shape.y <= 380 &&
        shape.y >= 250
      ) {
        console.log("collision course!");
        setStarPosition({
          x: starStencil.x + layerX,
          y: starStencil.y + layerY,
        });
      } else {
        setStarPosition({ x: 375, y: 120 });
      }
    } else if (shape.id == 4) {
      console.log("shape: Rectangle");
      if (
        shape.x <= 500 &&
        shape.x >= 400 &&
        shape.y <= 500 &&
        shape.y >= 400
      ) {
        console.log("collision course!");
        setRectPosition({
          x: rectStencil.x + layerX,
          y: rectStencil.y + layerY,
        });
      } else {
        setRectPosition({ x: 475, y: 90 });
      }
    } else if (shape.id == 5) {
      console.log("shape: Triangle");
      if (
        shape.x <= 650 &&
        shape.x >= 500 &&
        shape.y <= 380 &&
        shape.y >= 250
      ) {
        console.log("collision course!");
        setTriPosition({ x: triStencil.x + layerX, y: triStencil.y + layerY });
      } else {
        setTriPosition({ x: 690, y: 130 });
      }
    } else if (shape.id == 6) {
      console.log("shape: Pentagon");
      if (
        shape.x <= 775 &&
        shape.x >= 650 &&
        shape.y <= 550 &&
        shape.y >= 350
      ) {
        console.log("collision course!");
        setPentPosition({
          x: pentStencil.x + layerX,
          y: pentStencil.y + layerY,
        });
      } else {
        setPentPosition({ x: 825, y: 130 });
      }
    } else if (shape.id == 7) {
      console.log("shape: Ellipse");
      if (
        shape.x <= 925 &&
        shape.x >= 750 &&
        shape.y <= 400 &&
        shape.y >= 250
      ) {
        console.log("collision course!");
        setEllipsePosition({
          x: ellipseStencil.x + layerX,
          y: ellipseStencil.y + layerY,
        });
      } else {
        setEllipsePosition({ x: 925, y: 130 });
      }
    }
  }

  function displayCord(e) {
    var shape = e.target.attrs;
    if (shape.id == 1) {
      setSqPosition({ x: 0, y: 0 });
    } else if (shape.id == 2) {
      setCircPosition({ x: 0, y: 0 });
    } else if (shape.id == 3) {
      setStarPosition({ x: 0, y: 0 });
    } else if (shape.id == 4) {
      setRectPosition({ x: 0, y: 0 });
    } else if (shape.id == 5) {
      setTriPosition({ x: 0, y: 0 });
    } else if (shape.id == 6) {
      setPentPosition({ x: 0, y: 0 });
    } else if (shape.id == 7) {
      setEllipsePosition({ x: 0, y: 0 });
    }
    console.log(
      `X: ${Math.round(e.target.attrs.x)} Y: ${Math.round(e.target.attrs.y)}`
    );
  }

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    console.log(country);
    console.log("Country data change in effect..");

    if (country != "Select a country") {
      let mounted = true;
      getCountryData(country).then((data) => {
        if (mounted) {
          setCountryData(data);
          console.log(data);
          setSqPosition({ x: 45, y: 90 });
          setCircPosition({ x: 225, y: 110 });
          setStarPosition({ x: 375, y: 120 });
          setRectPosition({ x: 475, y: 90 });
          setTriPosition({ x: 690, y: 130 });
          setPentPosition({ x: 825, y: 130 });
          setEllipsePosition({ x: 925, y: 130 });
        }
      });
      if (countryData != null) {
        console.log(countryData);
      }
      return () => (mounted = false);
    }

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, [country]);

  return (
    <div className={styles.mainArea}>
      <div className={styles.infoDivs}>
        <div className={styles.dropDown}>
          <button className={styles.dropDownBtn} onClick={toggleList}>
            {country}{" "}
            {display ? (
              <Icon
                path={mdiChevronUp}
                size="35px"
                className={styles.selectIcon}
              />
            ) : (
              <Icon
                path={mdiChevronDown}
                size="35px"
                className={styles.selectIcon}
              />
            )}
          </button>
          <div
            className={styles.dropDownContent}
            style={{ display: display ? "flex" : "none" }}
          >
            <ul>
              {countries.map((item) => (
                <li className={styles.countryLabel} onClick={changeCountry}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <ShapesInfo />
      </div>
      <div className={styles.shapeStage}>
        <Stage width={1000} height={650} margin={50}>
          <Layer className={styles.shapeLayer}>
            <Text
              x={45}
              y={20}
              fontSize={26}
              fill="#2B3A67"
              fontFamily="Sniglet, cursive"
              text={`${countryData.CountryName.data}'s Shapes`}
            />
            <Rect
              x={squarePos.x}
              y={squarePos.y}
              width={
                (100 * (countryData.LoggedGDPPerCapita.data / 9.44979562)) / 2
              }
              height={
                (100 * (countryData.LoggedGDPPerCapita.data / 9.44979562)) / 2
              }
              id="1"
              fill="#32936F"
              draggable
              onDragMove={displayCord}
              onDragEnd={checkIntersection}
            />
            <Circle
              x={circlePos.x}
              y={circlePos.y}
              radius={
                (100 *
                  (countryData.FreedomToMakeLifeChoices.data / 0.787394161)) /
                2
              }
              id="2"
              fill="#2B3A67"
              draggable
              onDragMove={displayCord}
              onDragEnd={checkIntersection}
            />
            <Star
              x={starPos.x}
              y={starPos.y}
              numPoints={5}
              innerRadius={Math.min(
                20,
                10 + (100 * (countryData.SocialSupport.data / 0.799072993)) / 2
              )}
              outerRadius={
                10 + (100 * (countryData.SocialSupport.data / 0.799072993)) / 2
              }
              rotation={70}
              id="3"
              fill="#FACC41"
              draggable
              onDragMove={displayCord}
              onDragEnd={checkIntersection}
            />
            <Rect
              x={rectanglePos.x}
              y={rectanglePos.y}
              width={
                25 +
                100 * (countryData.HealthyLifeExpectancy.data / 64.967632353)
              }
              height={
                25 +
                (100 *
                  (countryData.HealthyLifeExpectancy.data / 64.967632353)) /
                  2
              }
              id="4"
              fill="#32936F"
              draggable
              onDragMove={displayCord}
              onDragEnd={checkIntersection}
            />
            <RegularPolygon
              x={trianglePos.x}
              y={trianglePos.y}
              sides={3}
              radius={
                (100 *
                  (countryData.PerceptionsOfCorruption.data / 0.72540146)) /
                2
              }
              id="5"
              fill="#2B3A67"
              draggable
              onDragMove={displayCord}
              onDragEnd={checkIntersection}
            />
            <RegularPolygon
              x={pentagonPos.x}
              y={pentagonPos.y}
              sides={6}
              radius={
                40 - (100 * (countryData.Generosity.data / 0.022430657)) / 64
              }
              id="6"
              fill="#FACC41"
              draggable
              onDragMove={displayCord}
              onDragEnd={checkIntersection}
            />
            <Ellipse
              x={ellipsePos.x}
              y={ellipsePos.y}
              radiusX={20}
              radiusY={(100 * (countryData.Dystopia.data / 1.76484835)) / 2}
              id="7"
              fill="#32936F"
              draggable
              onDragMove={displayCord}
              onDragEnd={checkIntersection}
            />
          </Layer>
          <Layer x={45} y={150} className={styles.stencilLayer}>
            <Text
              x={0}
              y={60}
              fontSize={26}
              fill="#2B3A67"
              fontFamily="Sniglet, cursive"
              text="Happiest country's shapes"
            />
            <Rect
              x={sqStencil.x}
              y={sqStencil.y}
              width={(100 * (finland.LoggedGDPPerCapita.data / 9.44979562)) / 2}
              height={
                (100 * (finland.LoggedGDPPerCapita.data / 9.44979562)) / 2
              }
              stroke="#E56399"
              strokeWidth={2}
            />
            <Circle
              x={circStencil.x}
              y={circStencil.y}
              radius={
                (100 * (finland.FreedomToMakeLifeChoices.data / 0.787394161)) /
                2
              }
              stroke="#E56399"
              strokeWidth={2}
            />
            <Star
              x={starStencil.x}
              y={starStencil.y}
              numPoints={5}
              innerRadius={Math.min(
                20,
                10 + (100 * (finland.SocialSupport.data / 0.799072993)) / 2
              )}
              outerRadius={
                10 + (100 * (finland.SocialSupport.data / 0.799072993)) / 2
              }
              rotation={70}
              stroke="#E56399"
              strokeWidth={2}
            />
            <Rect
              x={rectStencil.x}
              y={rectStencil.y}
              width={
                25 + 100 * (finland.HealthyLifeExpectancy.data / 64.967632353)
              }
              height={
                25 +
                (100 * (finland.HealthyLifeExpectancy.data / 64.967632353)) / 2
              }
              stroke="#E56399"
              strokeWidth={2}
            />
            <RegularPolygon
              x={triStencil.x}
              y={triStencil.y}
              sides={3}
              radius={
                (100 * (finland.PerceptionsOfCorruption.data / 0.72540146)) / 2
              }
              stroke="#E56399"
              strokeWidth={2}
            />
            <RegularPolygon
              x={pentStencil.x}
              y={pentStencil.y}
              sides={6}
              radius={40 - (100 * (finland.Generosity.data / 0.022430657)) / 64}
              stroke="#E56399"
              strokeWidth={2}
            />
            <Ellipse
              x={ellipseStencil.x}
              y={ellipseStencil.y}
              radiusX={20}
              radiusY={(100 * (finland.Dystopia.data / 1.76484835)) / 2}
              stroke="#E56399"
              strokeWidth={2}
            />
          </Layer>
        </Stage>
      </div>
    </div>
  );
};

export default Stencil;
