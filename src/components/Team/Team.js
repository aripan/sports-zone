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
      <Card
        style={{ width: "18rem", height: "18rem", textAlign: "center" }}
        className="shadow-sm p-3 mb-5 bg-body rounded"
      >
        <Card.Img
          variant="top"
          src={strTeamBadge}
          style={{
            width: "5rem",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "5px",
          }}
        />

        <Card.Body>
          <Card.Title>{strAlternate ? strAlternate : strTeam}</Card.Title>
          <Card.Text>Sports type {strSport}</Card.Text>
        </Card.Body>
        <Card.Body>
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
              <FontAwesomeIcon className="pl-1" icon={faArrowRight} />
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Team;
