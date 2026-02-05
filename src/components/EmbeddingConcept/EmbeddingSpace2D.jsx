import React, { useState } from "react";
import "./EmbeddingSpace2D.css";
import EmbeddingFeaturesTable from "./EmbeddingFeaturesTable";

// ----- Objects with features -----
const embeddingObjects = [
  { name: "Cat", living: 1, machine: 0, air: 0, ground: 1, human: 0, royal: 0 },
  { name: "Dog", living: 1, machine: 0, air: 0, ground: 1, human: 0, royal: 0 },
  { name: "Bird", living: 1, machine: 0, air: 1, ground: 0, human: 0, royal: 0 },
  { name: "Tree", living: 1, machine: 0, air: 0, ground: 1, human: 0, royal: 0 },
  { name: "Man", living: 1, machine: 0, air: 0, ground: 1, human: 1, royal: 0 },
  { name: "Woman", living: 1, machine: 0, air: 0, ground: 1, human: 1, royal: 0 },
  { name: "King", living: 1, machine: 0, air: 0, ground: 1, human: 1, royal: 1 },
  { name: "Queen", living: 1, machine: 0, air: 0, ground: 1, human: 1, royal: 1 },
  { name: "Car", living: 0, machine: 1, air: 0, ground: 1, human: 0, royal: 0 },
  { name: "Aeroplane", living: 0, machine: 1, air: 1, ground: 0, human: 0, royal: 0 },
];

// ----- Tiny identity offset for visualization -----
const getIdentityOffset = (name) => {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const x = ((hash % 10) - 5) * 0.08;
  const y = (((hash >> 3) % 10) - 5) * 0.08;
  return { x, y };
};

// ----- 2D positions from features -----
const getPosition = (obj) => {
  const xSemantic =
    obj.machine * 2 +
    obj.human * 0.5 -
    (obj.living && !obj.human ? 1 : 0);

  const ySemantic =
    obj.air * 2 +
    obj.royal * 1 -
    obj.ground * 1;

  const offset = getIdentityOffset(obj.name);

  return {
    x: xSemantic + offset.x,
    y: ySemantic + offset.y,
  };
};

// ----- Main Component -----
const EmbeddingSpace2D = () => {
  const [activeObjects, setActiveObjects] = useState([]);
  const [selectedObject, setSelectedObject] = useState(null);

  // Precompute positions
  const [positions] = useState(() => {
    const map = {};
    embeddingObjects.forEach((obj) => {
      map[obj.name] = getPosition(obj);
    });
    return map;
  });

  const toggleObject = (name) => {
    setActiveObjects((prev) =>
      prev.includes(name)
        ? prev.filter((o) => o !== name)
        : [...prev, name]
    );
    setSelectedObject(name);
  };

  return (
    <div className="embedding-space-wrapper">
      <h2>Embedding Space (Similarity Map)</h2>
      <p className="hint">Click objects to see how AI places them</p>

      {/* Object Buttons */}
      <div className="object-buttons">
        {embeddingObjects.map((obj) => (
          <button
            key={obj.name}
            onClick={() => toggleObject(obj.name)}
            className={activeObjects.includes(obj.name) ? "active" : ""}
          >
            {obj.name}
          </button>
        ))}
      </div>

      {/* Side-by-side layout */}
      <div className="embedding-side-by-side">
        {/* 2D Map */}
        <div className="embedding-space">
          {embeddingObjects
            .filter((obj) => activeObjects.includes(obj.name))
            .map((obj) => {
              const pos = positions[obj.name];
              return (
                <div
                  key={obj.name}
                  className="embedding-dot"
                  style={{
                    left: `${50 + pos.x * 15}%`,
                    top: `${50 - pos.y * 15}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {obj.name}
                </div>
              );
            })}
        </div>

        {/* Feature Table */}
        <div className="embedding-feature-table-wrapper">
          <EmbeddingFeaturesTable
            objects={embeddingObjects}
            activeObject={selectedObject}
          />
        </div>
      </div>
    </div>
  );
};

export default EmbeddingSpace2D;
