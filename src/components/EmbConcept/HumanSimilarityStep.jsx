import React, { useState } from "react";
import "./HumanSimilarityStep.css";

const objectPair = {
  left: {
    name: "Dog",
    image: "/assets/dog.png",
  },
  right: {
    name: "Cat",
    image: "/assets/cat.png",
  },
};

const HumanSimilarityStep = ({ onAnswer }) => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (answer) => {
    setSelected(answer);
    setTimeout(() => {
      onAnswer(answer);
    }, 600);
  };

  return (
    <div className="step-container">
      <h1 className="main-question">
        Are these two objects similar?
      </h1>

      <div className="object-pair">
        <div className="object-card">
          <img src={objectPair.left.image} alt={objectPair.left.name} />
          <p>{objectPair.left.name}</p>
        </div>

        <div className="object-card">
          <img src={objectPair.right.image} alt={objectPair.right.name} />
          <p>{objectPair.right.name}</p>
        </div>
      </div>

      <div className="answer-buttons">
        {["Very Similar", "Somewhat Similar", "Not Similar"].map((option) => (
          <button
            key={option}
            className={`answer-btn ${
              selected === option ? "selected" : ""
            }`}
            onClick={() => handleSelect(option)}
            disabled={selected !== null}
          >
            {option}
          </button>
        ))}
      </div>

      {selected && (
        <p className="confirmation-text">
          You chose: <strong>{selected}</strong>
        </p>
      )}
    </div>
  );
};

export default HumanSimilarityStep;
