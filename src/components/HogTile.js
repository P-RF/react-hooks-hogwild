import React, {useState} from "react";

function HogTile({ hog }) {
  const [showHogDetails, setShowHogDetails] = useState(false);
  const [hogIsHidden, sethogIsHidden] = useState(false);

  const handleHogTileClick = () => {
    setShowHogDetails((prev) => !prev);
  }

  if (hogIsHidden) return null;

  return (
    <div className="ui eight wide column" onClick={handleHogTileClick}>
      <h3>{hog.name}</h3>
      <img src={hog.image} alt={hog.name} className="ui fluid image"/>

      {showHogDetails && (
        <div className="show-hog-details">
          <p><strong>Specialty:</strong> {hog.specialty}</p>
          <p><strong>Weight:</strong> {hog.weight} lbs</p>
          <p><strong>Greased:</strong> {hog.greased ? "Yes" : "No"}</p>
          <p><strong>Highest Medal Achieved:</strong> {hog["highest medal achieved"]}</p>
        </div>
      )}
      
      <button onClick={() => sethogIsHidden(true)}>Hide</button>
    </div>
  );
}

export default HogTile;