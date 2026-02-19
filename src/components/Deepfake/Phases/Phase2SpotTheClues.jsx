import { useState } from "react";

export default function Phase2SpotTheClues({ onNext }) {
  const CLUES = [
    {
      id: 0,
      title: "Lip sync doesn’t match",
      description:
        "Notice how the lips don’t move exactly with the words being spoken.",
      realVideo: "/videos/real_lipSync.mp4",
      fakeVideo: "/videos/fake_lipsync.mp4"
    },
    {
      id: 1,
      title: "Eye movement looks unnatural",
      description:
        "Real people blink naturally. AI sometimes gets eye movement wrong.",
      realVideo: "/videos/real_eyes.mp4",
      fakeVideo: "/videos/fake_eyes.mp4"
    },
    {
      id: 2,
      title: "Lighting or face blending feels off",
      description:
        "The face may look pasted on or lighting changes strangely.",
      realVideo: "/videos/real_light.mp4",
      fakeVideo: "/videos/fake_light.mp4"
    },
    {
      id: 3,
      title: "Expression doesn’t match emotion or voice",
      description:
        "The face emotion may not match what is being said.",
      realVideo: "/videos/real_expression.mp4",
      fakeVideo: "/videos/fake_expression.mp4"
    }
  ];

  const [activeClue, setActiveClue] = useState(0);

  const current = CLUES[activeClue];

  return (
    <div className="phase phase-2">
      <h2>Let's Check some examples with clues</h2>

      <p className="guidance-text">
        Deepfakes often leave small clues behind.  
        Click each clue and observe carefully.
      </p>

      {/* CLUE SELECTOR */}
      <div className="clue-selector">
        {CLUES.map((clue, index) => (
          <button
            key={clue.id}
            className={`clue-btn ${
              index === activeClue ? "active" : ""
            }`}
            onClick={() => setActiveClue(index)}
          >
            {clue.title}
          </button>
        ))}
      </div>

      {/* VIDEO COMPARISON */}
      <div className="video-compare">
        <div className="video-card">
          <video
            src={current.realVideo}
            controls
            muted
          />
          <p className="video-label">Real Video</p>
        </div>

        <div className="video-card">
          <video
            src={current.fakeVideo}
            controls
            muted
          />
          <p className="video-label">AI-Altered Video</p>
        </div>
      </div>

      {/* EXPLANATION */}
      <div className="reflection-box">
        <p>{current.description}</p>
      </div>

      <button className="next-btn" onClick={onNext}>
        Let's Understand how AI is doing it.
      </button>
    </div>
  );
}
