import { useState } from "react";

export default function Phase5SpotTheFake({ onNext }) {
  const samples = [
    {
      src: "/videos/real1.mp4",
      answer: "real",
      explanation:
        "This video is real. Facial motion, eye blinking, and lighting remain consistent throughout.",
      validClues: []
    },
    {
      src: "/videos/D.mp4",
      answer: "fake",
      explanation:
        "This is AI-generated. The lip movement does not perfectly align with the speech.",
      validClues: ["lip-sync"]
    },
    {
      src: "/videos/fake_facialExp.mp4",
      answer: "fake",
      explanation:
        "This deepfake alters facial expressions unnaturally, especially around the mouth.",
      validClues: ["expression"]
    }
  ];

  const clueOptions = [
    { id: "lip-sync", label: "Lip movement doesn’t match speech" },
    { id: "eye", label: "Unnatural eye blinking or gaze" },
    { id: "expression", label: "Facial expressions feel unnatural" },
    { id: "lighting", label: "Lighting changes oddly on the face" }
  ];

  const [index, setIndex] = useState(0);
  const [choice, setChoice] = useState(null);
  const [selectedClues, setSelectedClues] = useState([]);
  const [showFeedback, setShowFeedback] = useState(false);

  const current = samples[index];

  const submitAnswer = (value) => {
    setChoice(value);
    if (value === "real") {
      setShowFeedback(true);
    }
  };

  const toggleClue = (id) => {
    setSelectedClues((prev) =>
      prev.includes(id)
        ? prev.filter((c) => c !== id)
        : [...prev, id]
    );
  };

  const submitReasoning = () => {
    setShowFeedback(true);
  };

  const nextSample = () => {
    setIndex(index + 1);
    setChoice(null);
    setSelectedClues([]);
    setShowFeedback(false);
  };

  const isCorrect = choice === current.answer;

  const validSelections = selectedClues.filter((c) =>
    current.validClues.includes(c)
  );

  return (
    <div className="phase phase-5">
      <h2>Spot the Deepfake</h2>

      <p className="guidance-text">
        Watch the video and explain how you decided.
      </p>

      <div className="spot-layout">
        {/* LEFT: VIDEO */}
        <div className="video-panel">
          <video
            src={current.src}
            controls
            muted
            className="analysis-video"
          />
        </div>

        {/* RIGHT: ANALYSIS */}
        <div className="analysis-panel">
          {!choice && (
            <div className="choice-buttons">
              <button onClick={() => submitAnswer("real")}>
                Looks Real
              </button>
              <button onClick={() => submitAnswer("fake")}>
                Looks AI-generated
              </button>
            </div>
          )}

          {choice === "fake" && !showFeedback && (
            <div className="clue-selection">
              <h4>What made you think it was AI-generated?</h4>

              {clueOptions.map((clue) => (
                <label key={clue.id} className="clue-option">
                  <input
                    type="checkbox"
                    checked={selectedClues.includes(clue.id)}
                    onChange={() => toggleClue(clue.id)}
                  />
                  {clue.label}
                </label>
              ))}

              <button
                className="next-btn"
                disabled={selectedClues.length === 0}
                onClick={submitReasoning}
              >
                Check my reasoning
              </button>
            </div>
          )}

          {showFeedback && (
            <div className="feedback-box">
              <p className={isCorrect ? "success" : "warning"}>
                {isCorrect
                  ? "Correct classification"
                  : "That classification is not correct"}
              </p>

              {choice === "fake" && current.answer === "fake" && (
                <p className="feedback-subtext">
                  {validSelections.length > 0
                    ? "Good catch , some of your clues are valid."
                    : "Your classification was right, but the clues you chose are not strong indicators."}
                </p>
              )}

              <p className="feedback-explanation">
                {current.explanation}
              </p>

              {index < samples.length - 1 ? (
                <button className="next-btn" onClick={nextSample}>
                  Try another video
                </button>
              ) : (
                <button className="next-btn" onClick={onNext}>
                  Final Reflection
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
