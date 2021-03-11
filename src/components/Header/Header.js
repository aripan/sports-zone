import React from "react";
import { useRouteMatch } from "react-router";
import "./Header.css";

const Header = ({ headerValues }) => {
  const match = useRouteMatch("/allTeams/:idTeam");

  return (
    <div className="header">
      {match ? (
        <h3
          className="d-flex justify-content-center align-content-center"
          style={{ paddingTop: "5rem" }}
        >
          <img
            src={headerValues[2]}
            alt="team-badge"
            style={{ width: "4rem", marginRight: "10px" }}
          />
          {headerValues[1] ? headerValues[1] : headerValues[0]}
        </h3>
      ) : (
        <h3
          className="d-flex justify-content-center"
          style={{ paddingTop: "5rem" }}
        >
          Sports Zone
        </h3>
      )}
    </div>
  );
};

export default Header;
