import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import League from "../League/League";

const Home = () => {
  const [leagues, setLeagues] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setLeagues(data));
  }, []);
  return (
    <div>
      <Container>
        <Row>
          {leagues.map((league) => (
            <Col sm={12} md={6} lg={4} style={{ padding: "10px" }}>
              <League league={league}></League>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
