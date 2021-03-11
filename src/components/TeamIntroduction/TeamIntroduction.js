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
    <Container>
      <Row style={{ backgroundColor: "blue" }}>
        <Col sm={12} md={6}>
          <h2>{strAlternate ? strAlternate : strTeam}</h2>
          <h5>
            <img src={founded} alt="" style={{ width: "1.5rem" }} />
            Founded: {intFormedYear}
          </h5>
          <h5>
            <img src={country} alt="" style={{ width: "1.5rem" }} />
            Country: {strCountry}
          </h5>
          <h5>
            <img src={sportsType} alt="" style={{ width: "1.5rem" }} />
            Sports Type: {strSport}
          </h5>
          <h5>
            <img src={gender} alt="" style={{ width: "1.5rem" }} />
            Gender: {strGender}
          </h5>
        </Col>
        <Col sm={12} md={6}>
          <img
            src={strGender === "Male" ? maleImage : femaleImage}
            alt="teamImage"
            style={{ width: "20rem" }}
          />
        </Col>
      </Row>
      <Row>{strDescriptionEN}</Row>
      <Row className="d-flex justify-content-center">
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon className="fa-3x m-2" icon={faTwitterSquare} />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon className="fa-3x m-2" icon={faFacebookSquare} />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon className="fa-3x m-2" icon={faYoutubeSquare} />
        </a>
      </Row>
    </Container>
  );
};

export default TeamIntroduction;
