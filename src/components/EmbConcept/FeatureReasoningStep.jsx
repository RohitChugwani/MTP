import React, { useEffect, useState } from "react";
import "./FeatureReasoningStep.css";

const dogFeatures = [
  { name: "Living Being", shared: true },
  { name: "Has Fur", shared: true },
  { name: "Four Legs", shared: true },
  { name: "Has Tail", shared: true },
  { name: "Has 2 Eyes", shared: true },
  { name: "Makes Sound", shared: true },
  { name: "Barks", shared: false },
  { name: "Needs Walks", shared: false },
  { name: "Can Be Trained", shared: false },
  { name: "Guarding Nature", shared: false },
];

const catFeatures = [
  { name: "Living Being", shared: true },
  { name: "Has Fur", shared: true },
  { name: "Four Legs", shared: true },
  { name: "Has Tail", shared: true },
  { name: "Has 2 Eyes", shared: true },
  { name: "Makes Sound", shared: true },
  { name: "Mews", shared: false },
  { name: "Climbs Trees", shared: false },
  { name: "Independent", shared: false },
  { name: "Whiskers", shared: false },
];

const FeatureReasoningStep = ({ humanAnswer, onNext }) => {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount < dogFeatures.length) {
      const timer = setTimeout(() => {
        setVisibleCount((v) => v + 1);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [visibleCount]);

  return (
    <div className="feature-step-container">
      {/* LEFT AI PANEL */}
      <div className="ai-panel">
        <h2>How I (AI) Think</h2>

        <p>
          You said these objects are <strong>{humanAnswer}</strong>.
        </p>

        <p>
          I don’t understand objects like humans.
        </p>

        <p>
          I learned by seeing many examples over time —
          just like students learn by practice.
        </p>

        <p>
          When I see an object, I break it into features
          and compare them.
        </p>

        <p className="hint">
          Watch how features appear one by one →
        </p>
      </div>

      {/* RIGHT FEATURE COMPARISON */}
      <div className="feature-compare">
        <div className="object-column">
          <h3>Dog</h3>
          <ul>
            {dogFeatures.slice(0, visibleCount).map((f, i) => (
              <li
                key={i}
                className={f.shared ? "shared" : "unique"}
              >
                {f.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="object-column">
          <h3>Cat</h3>
          <ul>
            {catFeatures.slice(0, visibleCount).map((f, i) => (
              <li
                key={i}
                className={f.shared ? "shared" : "unique"}
              >
                {f.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* NEXT */}
      {visibleCount >= dogFeatures.length && (
        <div className="next-area">
          <button onClick={onNext}>
            Next: Can you think like AI?
          </button>
        </div>
      )}
    </div>
  );
};

export default FeatureReasoningStep;
