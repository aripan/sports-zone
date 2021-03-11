import React from "react";
import { useRouteMatch } from "react-router";
// import "./Header.css"

const Header = ({ headerValues }) => {
  const match = useRouteMatch("/allTeams/:idTeam");

  return (
    <div
      className="header"
      style={{
        width: "100%",
        height: "12rem",
        background:
          "url('https://www.thesportsdb.com/images/media/team/stadium/uxywyw1420751718.jpg') no-repeat center center",
      }}
    >
      {match ? (
        <h3
          className="d-flex justify-content-center"
          style={{ paddingTop: "5rem" }}
        >
          <img
            src={headerValues[2]}
            alt="team-badge"
            style={{ width: "3rem" }}
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
