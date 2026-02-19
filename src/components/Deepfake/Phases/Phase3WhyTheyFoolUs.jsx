import { useState } from "react";

export default function Phase3WhyTheyFoolUs({ onNext }) {
  const REASONS = [
    {
      id: 0,
      title: "Our brain trusts faces automatically",
      text:
        "Humans are wired to trust faces. From childhood, we learn emotions, honesty, and intent by looking at faces — not by verifying facts."
    },
    {
      id: 1,
      title: "We don’t expect videos to lie",
      text:
        "Text can be fake. Images can be edited. But videos feel real — so we lower our guard when watching them."
    },
    {
      id: 2,
      title: "AI copies patterns we recognize",
      text:
        "Deepfakes don’t understand truth — they only copy patterns like lip movement, expressions, and tone that look familiar to us."
    },
    {
      id: 3,
      title: "We rarely pause and analyze",
      text:
        "Videos move fast. We usually react emotionally before thinking critically — especially on social media."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="phase phase-3">
      <h2>Why Do Deepfakes Fool Us?</h2>

      <p className="guidance-text">
        Even imperfect deepfakes can feel real.
        <br />
        Let’s understand <b>why our brain falls for them</b>.
      </p>

      <div className="reason-list">
        {REASONS.map((reason, index) => (
          <div
            key={reason.id}
            className={`reason-card ${
              activeIndex === index ? "active" : ""
            }`}
            onClick={() =>
              setActiveIndex(
                activeIndex === index ? null : index
              )
            }
          >
            <h4>{reason.title}</h4>

            {activeIndex === index && (
              <p className="reason-text">{reason.text}</p>
            )}
          </div>
        ))}
      </div>

      <div className="reflection-box">
        <p>
          Deepfakes don’t work because AI is smart.
          <br />
          They work because <b>humans trust too quickly</b>.
        </p>
      </div>

      <button className="next-btn" onClick={onNext}>
        How are deepfakes actually made?
      </button>
    </div>
  );
}
