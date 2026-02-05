
import React, { useState } from "react";
import "./InteractiveEmbeddings.css";

// Example objects with features and confidence
const objects = [
  {
    name: "Cat",
    image: "/assets/cat.png",
    features: [
      { feature: "Tail", confidence: 0.95 },
      { feature: "Fur", confidence: 0.92 },
      { feature: "Whiskers", confidence: 0.9 },
      { feature: "2 Eyes", confidence: 0.99 },
      { feature: "Mews", confidence: 0.85 },
    ],
  },
  {
    name: "Dog",
    image: "/assets/dog.png",
    features: [
      { feature: "Tail", confidence: 0.96 },
      { feature: "Fur", confidence: 0.93 },
      { feature: "Snout", confidence: 0.91 },
      { feature: "2 Eyes", confidence: 0.98 },
      { feature: "Barks", confidence: 0.88 },
    ],
  },
  {
    name: "Bird",
    image: "/assets/bird.png",
    features: [
      { feature: "Wings", confidence: 0.95 },
      { feature: "Beak", confidence: 0.92 },
      { feature: "2 Eyes", confidence: 0.98 },
      { feature: "Sings", confidence: 0.89 },
    ],
  },
  {
    name: "Car",
    image: "/assets/car.png",
    features: [
      { feature: "Wheels", confidence: 0.98 },
      { feature: "Windows", confidence: 0.95 },
      { feature: "Doors", confidence: 0.96 },
      { feature: "Engine", confidence: 0.9 },
    ],
  },
  {
    name: "Tree",
    image: "/assets/tree.png",
    features: [
      { feature: "Leaves", confidence: 0.97 },
      { feature: "Branches", confidence: 0.95 },
      { feature: "Trunk", confidence: 0.98 },
    ],
  },
  {
    name: "King",
    image: "/assets/king.png",
    features: [
      { feature: "Man", confidence: 0.99 },
      { feature: "Royal", confidence: 0.95 },
      { feature: "Crown", confidence: 0.97 },
    ],
  },
  {
    name: "Woman",
    image: "/assets/woman.png",
    features: [
      { feature: "Female", confidence: 0.99 },
      { feature: "Clothes", confidence: 0.95 },
    ],
  },
  {
    name: "Queen",
    image: "/assets/queen.png",
    features: [
      { feature: "Female", confidence: 0.99 },
      { feature: "Royal", confidence: 0.96 },
      { feature: "Crown", confidence: 0.97 },
    ],
  },
];

const Embedding = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="interactive-container">
      <h2>Click on a picture to see its features</h2>
      <div className="cards-container">
        {objects.map((obj, idx) => (
          <div
            key={idx}
            className={`object-card ${selected === idx ? "selected" : ""}`}
            onClick={() => setSelected(idx === selected ? null : idx)}
          >
            <img src={obj.image} alt={obj.name} />
            <h3>{obj.name}</h3>
          </div>
        ))}
      </div>

      {selected !== null && (
        <div className="features-panel">
          <h3>Features of {objects[selected].name}</h3>
          <ul>
            {objects[selected].features.map((f, i) => (
              <li key={i}>
                {f.feature} — <span className="confidence">{(f.confidence * 100).toFixed(0)}%</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Embedding;
