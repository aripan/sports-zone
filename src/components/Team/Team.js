import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Team = (props) => {
  const {
    strTeam,
    strAlternate,
    idTeam,
    strSport,
    strTeamBadge,
    strStadiumThumb,
  } = props.team;
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={strTeamBadge} />
        <Card.Body>
          <Card.Title>{strAlternate ? strAlternate : strTeam}</Card.Title>
          <Card.Text>Sports type {strSport}</Card.Text>
          <Link to={`/allTeams/${idTeam}`}>
            <Button
              variant="primary"
              onClick={() =>
                props.changeHeaderImg(
                  strTeam,
                  strAlternate,
                  strTeamBadge,
                  strStadiumThumb
                )
              }
            >
              Explore
              <FontAwesomeIcon icon={faArrowRight} />
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Team;
