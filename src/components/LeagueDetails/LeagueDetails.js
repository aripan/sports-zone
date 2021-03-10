import React from "react";
import { useParams } from "react-router";

const LeagueDetails = () => {
  const { leagueId } = useParams();
  return (
    <div>
      <h4>League details here {leagueId}</h4>
    </div>
  );
};

export default LeagueDetails;
