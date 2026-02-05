import React, { useState } from "react";
import "./Game.css";

const imageStages = [
  "/assets/image1.png",
  "/assets/image3.png",
  "/assets/image5.png",
  "/assets/image7.png",
  "/assets/image9.png",
];

export default function Game() {
  const [stage, setStage] = useState(0);
  const [message, setMessage] = useState(
    "I’m trying to understand your prompt… help me."
  );

  const moreLikeThis = () => {
    if (stage < imageStages.length - 1) {
      setStage(stage + 1);
      setMessage("That helped. I see it more clearly now.");
    } else {
      setMessage("I think I understand what you meant.");
    }
  };

  const lessLikeThis = () => {
    if (stage > 0) {
      setStage(stage - 1);
      setMessage("That confused me a bit. I’ll try again.");
    } else {
      setMessage("I’m already very unsure. Try guiding me.");
    }
  };

  return (
    <div className="ai-game-wrapper">
      {/* Prompt */}
      <div className="prompt-box">
        <h3>Prompt</h3>
        <p>“A dog sitting near a tree”</p>
      </div>

      {/* Image */}
      <div className="image-box">
        <img src={imageStages[stage]} alt="AI attempt" />
      </div>

      {/* Controls */}
      <div className="controls">
        <button className="less" onClick={lessLikeThis}>
          👎 Less like this
        </button>
        <button className="more" onClick={moreLikeThis}>
          👍 More like this
        </button>
      </div>

      {/* AI feedback */}
      <div className="ai-message">
        <p>{message}</p>
      </div>

      {/* Completion */}
      {stage === imageStages.length - 1 && (
        <div className="explanation">
          <h4>What just happened?</h4>
          <p>
            You didn’t draw this image.
            <br />
            Each time you said <b>more</b> or <b>less</b>,
            you pushed me toward patterns I had learned before.
          </p>
        </div>
      )}
    </div>
  );
}
