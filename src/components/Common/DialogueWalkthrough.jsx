import React, { useState } from "react";
import "./DialogueWalkthrough.css";

const DialogueWalkthrough = ({ dialogues, onComplete }) => {
  const [step, setStep] = useState(0);

  const handleOptionClick = (callback) => {
    if (callback) callback(); // trigger any extra action
    setStep((prev) => prev + 1);
  };

  if (step >= dialogues.length) {
    if (onComplete) onComplete(); // signal to parent that dialogue finished
    return null;
  }

  const current = dialogues[step];

  return (
    <div className="dialogue-container">
      <div className="dialogue-box">
        <p className="dialogue-text">{current.text}</p>
        {current.options && (
          <div className="dialogue-options">
            {current.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionClick(opt.onClick)}
                className="dialogue-button"
              >
                {opt.label}
              </button>
            ))}
          </div>
        )}
        {!current.options && (
          <button
            onClick={() => handleOptionClick()}
            className="dialogue-button"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default DialogueWalkthrough;
