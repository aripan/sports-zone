import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const League = (props) => {
  const { name, id } = props.league;
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://upload.wikimedia.org/wikipedia/en/3/3b/TheLeagueintertitle.png"
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Link to={`/allLeagues/${id}`}>
            <Button variant="primary">Explore</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default League;
