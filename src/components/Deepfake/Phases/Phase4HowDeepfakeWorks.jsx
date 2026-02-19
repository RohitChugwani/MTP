import { useState } from "react";

export default function Phase4HowDeepfakesWork({ onNext }) {
  const [step, setStep] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);
  const [answered, setAnswered] = useState(false);

  const steps = [
    {
      title: "AI Learns From Many Examples",
      question: "What do you think AI learns first?",
      options: [
        "Faces and voices",
        "Human emotions",
        "Personal memories"
      ],
      correctIndex: 0,
      lines: [
        "AI is shown thousands of faces and voices.",
        "It watches how lips move, how eyes blink, and how voices change."
      ],
      visual: "learn"
    },
    {
      title: "AI Learns Patterns, Not Meaning",
      question: "Does AI understand emotions like humans?",
      options: [
        "Yes, it feels emotions",
        "No, it learns patterns only"
      ],
      correctIndex: 1,
      lines: [
        "AI does not understand people or emotions.",
        "It only learns patterns — what usually looks or sounds right."
      ],
      visual: "patterns"
    },
    {
      title: "AI Rebuilds Parts to Look Real",
      question: "How can AI create something realistic?",
      options: [
        "By copying exact memories",
        "By rebuilding using learned patterns"
      ],
      correctIndex: 1,
      lines: [
        "Using these patterns, AI can rebuild parts of a face or voice.",
        "Even if that exact moment never happened."
      ],
      visual: "rebuild"
    }
  ];

  const current = steps[step];

  const handleOptionClick = () => {
    setAnswered(true);
  };

  const handleNext = () => {
    if (!answered) return;

    if (lineIndex < current.lines.length - 1) {
      setLineIndex(lineIndex + 1);
    } else if (step < steps.length - 1) {
      setStep(step + 1);
      setLineIndex(0);
      setAnswered(false);
    } else {
      onNext();
    }
  };

  return (
    <div className="phase phase-4">
      <h2>How does AI create fake media? Let’s explore together.</h2>

      <div className="phase4-layout">

        {/* LEFT SIDE - VISUAL */}
        <div className="phase4-left">
          <div className={`visual-box ${current.visual}`} />

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${((step + 1) / steps.length) * 100}%` }}
            />
          </div>

          <p className="progress-text">
            Step {step + 1} of {steps.length}
          </p>
        </div>

        {/* RIGHT SIDE - INTERACTION */}
        <div className="phase4-right">
          <div className="pipeline-card">
            <h3>{current.title}</h3>

            {!answered && (
              <>
                <p className="question-text">{current.question}</p>
                <div className="choice-buttons">
                  {current.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleOptionClick(index)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </>
            )}

            {answered && (
              <p className="step-text">
                {current.lines
                  .slice(0, lineIndex + 1)
                  .map((line, i) => (
                    <span key={i} className="fade-line">
                      {line}
                      <br />
                    </span>
                  ))}
              </p>
            )}

            <button className="next-btn" onClick={handleNext}>
              {!answered
                ? "Reveal Explanation"
                : lineIndex < current.lines.length - 1
                ? "Continue"
                : step < steps.length - 1
                ? "Next Step"
                : "Can you detect the fakes now? Let’s try"}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
