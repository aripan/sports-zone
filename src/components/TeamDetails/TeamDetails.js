import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import TeamIntroduction from "../TeamIntroduction/TeamIntroduction";

const TeamDetails = (props) => {
  const { idTeam } = useParams();
  const [team, setTeam] = useState({});
  useEffect(() => {
    const URL = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setTeam(data.teams[0]));
  }, [idTeam]);

  // console.log(team);
  return (
    <div style={{ backgroundColor: "#000C40" }}>
      <TeamIntroduction team={team}></TeamIntroduction>
    </div>
  );
};

export default TeamDetails;
