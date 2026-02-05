import React, { useState } from "react";
import "./SimilarityMappingStep.css";

const objects = [
  { name: "Dog", living: 1, machine: 0, air: 0, ground: 1 },
  { name: "Cat", living: 1, machine: 0, air: 0, ground: 1 },
  { name: "Bird", living: 1, machine: 0, air: 1, ground: 0 },
  { name: "Tree", living: 1, machine: 0, air: 0, ground: 1 },
  { name: "Car", living: 0, machine: 1, air: 0, ground: 1 },
  { name: "Aeroplane", living: 0, machine: 1, air: 1, ground: 0 },
];

const getPosition = (obj) => {
  const x =
    obj.machine * 1 +
    obj.living * -1 +
    (Math.random() - 0.5) * 0.4;

  const y =
    obj.air * 1 +
    obj.ground * -1 +
    (Math.random() - 0.5) * 0.4;

  return {
    left: `${50 + x * 25}%`,
    top: `${50 - y * 25}%`,
  };
};

const SimilarityMappingStep = ({ onNext }) => {
  const [placedObjects, setPlacedObjects] = useState([]);

  const placeObject = (obj) => {
    if (placedObjects.find((o) => o.name === obj.name)) return;

    setPlacedObjects((prev) => [
      ...prev,
      { ...obj, position: getPosition(obj) },
    ]);
  };

  return (
    <div className="mapping-container">
      {/* LEFT PANEL */}
      <div className="ai-panel">
        <h2>Now think like me (AI)</h2>
        <p>
          I place objects close together if they share many features.
        </p>
        <p>
          Click objects and see where I place them in my memory space.
        </p>
        <p className="hint">
          Notice which objects appear close — and why.
        </p>

        <div className="object-list">
          {objects.map((obj) => (
            <button
              key={obj.name}
              onClick={() => placeObject(obj)}
              disabled={placedObjects.some((o) => o.name === obj.name)}
            >
              {obj.name}
            </button>
          ))}
        </div>

        {placedObjects.length >= 4 && (
          <button className="next-btn" onClick={onNext}>
            Next: What does this mean?
          </button>
        )}
      </div>

      {/* RIGHT MAP */}
      <div className="embedding-map">
        {placedObjects.map((obj) => (
          <div
            key={obj.name}
            className="map-dot"
            style={obj.position}
          >
            {obj.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarityMappingStep;
