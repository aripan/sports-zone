import React from "react";
import maleImage from "../../images/male.png";
import femaleImage from "../../images/female.png";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutubeSquare,
  faFacebookSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import founded from "../../icons/founded.png";
import country from "../../icons/country.png";
import sportsType from "../../icons/sportsType.png";
import gender from "../../icons/gender.png";

const TeamIntroduction = (props) => {
  const {
    strTeam,
    strAlternate,
    intFormedYear,
    strSport,
    strGender,
    strCountry,
    strDescriptionEN,
  } = props.team;
  return (
    <Container style={{ paddingTop: "2rem" }}>
      <Row
        style={{
          backgroundColor: "#56B4D3",
          borderRadius: "10px",
          paddingTop: "5px",
          paddingBottom: "5px",
        }}
        className="d-flex justify-content-between align-items-center"
      >
        <Col sm={12} md={6}>
          <h3>{strAlternate ? strAlternate : strTeam}</h3>

          <h5>
            <img
              src={founded}
              alt=""
              style={{ width: "1.5rem", marginRight: "10px" }}
            />
            Founded: {intFormedYear}
          </h5>
          <h5>
            <img
              src={country}
              alt=""
              style={{ width: "1.5rem", marginRight: "10px" }}
            />
            Country: {strCountry}
          </h5>
          <h5>
            <img
              src={sportsType}
              alt=""
              style={{ width: "1.5rem", marginRight: "10px" }}
            />
            Sports Type: {strSport}
          </h5>
          <h5>
            <img
              src={gender}
              alt=""
              style={{ width: "1.5rem", marginRight: "10px" }}
            />
            Gender: {strGender}
          </h5>
        </Col>
        <Col
          sm={12}
          md={6}
          className="d-flex justify-content-md-end justify-content-sm-center"
        >
          <img
            src={strGender === "Male" ? maleImage : femaleImage}
            alt="teamImage"
            style={{ width: "20rem" }}
          />
        </Col>
      </Row>
      <Row
        style={{
          color: "white",
          marginTop: "2rem",
          fontSize: "17px",
          paddingLeft: "5px",
          paddingRight: "5px",
        }}
      >
        {strDescriptionEN}
      </Row>
      <Row className="d-flex justify-content-center mt-3">
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noreferrer"
          className="m-2"
        >
          <FontAwesomeIcon className="fa-3x m-2" icon={faTwitterSquare} />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer"
          className="m-2"
        >
          <FontAwesomeIcon className="fa-3x m-2" icon={faFacebookSquare} />
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noreferrer"
          className="m-2"
        >
          <FontAwesomeIcon className="fa-3x m-2" icon={faYoutubeSquare} />
        </a>
      </Row>
      <br />
      <br />
    </Container>
  );
};

export default TeamIntroduction;
