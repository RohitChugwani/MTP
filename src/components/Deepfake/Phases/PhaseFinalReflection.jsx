import { useState } from "react";

export default function PhaseFinalReflection() {
  const reflections = [
    {
      title: "Deepfakes don’t look fake anymore",
      text:
        "AI can now change faces, expressions, and even voices so well that our eyes can be fooled."
    },
    {
      title: "Your brain wants to believe what it sees",
      text:
        "When a video feels real, emotional, or familiar, we usually trust it without thinking twice."
    },
    {
      title: "That doesn’t mean you’re careless",
      text:
        "Deepfakes are designed to trick smart people — not just careless ones."
    },
    {
      title: "So what should you do?",
      text:
        "Pause. Look for clues. Think about context. And never share something just because it feels shocking."
    }
  ];

  const [step, setStep] = useState(0);

  return (
    <div className="phase final-reflection">
      <h2>Before You Believe</h2>

      <div className="reflection-card">
        <h3>{reflections[step].title}</h3>
        <p>{reflections[step].text}</p>
      </div>

      {step < reflections.length - 1 ? (
        <button
          className="next-btn"
          onClick={() => setStep(step + 1)}
        >
          Continue
        </button>
      ) : (
        <div className="closing-message">
          <p>
            The internet is full of powerful tools.
            <br />
            Knowing when to pause is a superpower.
          </p>
        </div>
      )}
    </div>
  );
}
