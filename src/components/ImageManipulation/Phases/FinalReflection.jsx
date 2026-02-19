import { useState } from "react";

export default function FinalReflection({ onNext }) {
  const [opened, setOpened] = useState({
    image: false,
    voice: false,
    video: false
  });

  const allOpened = Object.values(opened).every(Boolean);

  const toggleCard = (key) => {
    setOpened((prev) => ({
      ...prev,
      [key]: true
    }));
  };

  return (
    <div className="phase phase-5">
      <h2>Before We Move On…</h2>

      <p className="guidance-text">
        You saw how AI can rebuild <b>one region</b> of an image
        while everything else stays untouched.
      </p>

      <p className="guidance-text">
        The same idea applies beyond images.
        Click each card to see how.
      </p>

      <div className="reflection-cards">
        {/* IMAGE */}
        <div
          className={`reflection-card ${opened.image ? "opened" : ""}`}
          onClick={() => toggleCard("image")}
        >
          <h4>🖼 Images</h4>
          {opened.image ? (
            <p>
              AI can change faces, expressions, or objects
              while keeping the rest of the photo real.
            </p>
          ) : (
            <p className="hint-text">Click to reveal</p>
          )}
        </div>

        {/* VOICE */}
        <div
          className={`reflection-card ${opened.voice ? "opened" : ""}`}
          onClick={() => toggleCard("voice")}
        >
          <h4>🎙 Voice</h4>
          {opened.voice ? (
            <p>
              AI can recreate how a person sounds
              and generate speech they never spoke.
            </p>
          ) : (
            <p className="hint-text">Click to reveal</p>
          )}
        </div>

        {/* VIDEO */}
        <div
          className={`reflection-card ${opened.video ? "opened" : ""}`}
          onClick={() => toggleCard("video")}
        >
          <h4>🎥 Video</h4>
          {opened.video ? (
            <p>
              AI can rebuild facial movements and actions,
              making fake videos look real.
            </p>
          ) : (
            <p className="hint-text">Click to reveal</p>
          )}
        </div>
      </div>

      {allOpened && (
        <div className="reflection-feedback">
          <p>
            When AI can rebuild <b>parts of reality</b> this convincingly,
            it becomes possible to fake people themselves.
          </p>
          <p>
            This is where <b>deepfakes</b> begin.
          </p>
        </div>
      )}

      <button
        className="next-btn"
        disabled={!allOpened}
        onClick={onNext}
      >
        Enter the Deepfake Module
      </button>
    </div>
  );
}
