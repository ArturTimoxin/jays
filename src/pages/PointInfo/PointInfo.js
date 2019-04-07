import React from "react";

export default function PointInfo({ match }) {
  return (
    <div>
      <h2>Point: {match.params.locationId}</h2>
    </div>
  );
}
