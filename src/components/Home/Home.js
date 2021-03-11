import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Team from "../Team/Team";

const Home = (props) => {
  const changeHeaderImg = props.changeHeaderImg;

  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch(
      "https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4328"
    )
      .then((res) => res.json())
      .then((data) => setTeams(data.teams));
  }, []);
  return (
    <div style={{ backgroundColor: "#000C40" }}>
      <Container className="pt-4">
        <Row>
          {teams.map((team) => (
            <Col
              sm={12}
              md={6}
              lg={4}
              style={{ padding: "5px" }}
              key={team.idTeam}
            >
              <Team team={team} changeHeaderImg={changeHeaderImg}></Team>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
