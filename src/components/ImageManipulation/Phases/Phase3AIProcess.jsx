import { useState, useEffect } from "react";

export default function Phase3AIProcess({ aiAction, onNext }) {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showFinalImage, setShowFinalImage] = useState(false);

  /* ---------- IMAGE MAP ---------- */
  const BASE_IMAGE = "/assets/image10.png";

  const FINAL_IMAGE_MAP = {
    "remove-glasses": "/assets/dog_without_glass.png",
    "change-expression": "/assets/dog_exp.png"
  };

  /* ---------- REGION MAP ---------- */
  const REGION_MAP = {
    "remove-glasses": "eyes",
    "change-expression": "mouth"
  };

  const activeRegion = REGION_MAP[aiAction];

  /* ---------- STEPS ---------- */
  const steps = [
    {
      title: "You gave an instruction",
      text: "You told the AI what you want to change in the image."
    },
    {
      title: "AI finds the part to change",
      text: "The AI understands which part of the image needs editing."
    },
    {
      title: "Old information is removed",
      text: "The AI clears visual information only from that region."
    },
   {
  title: "AI rebuilds the image",
  text: "This area is first turned into visual noise. Then, step by step, the AI refines it using learned patterns ,only inside the selected region."
}

  ];

  /* ---------- PROGRESS SIMULATION ---------- */
 useEffect(() => {
  if (step !== 3) return;

  const interval = setInterval(() => {
    setProgress((prev) => {
      if (prev >= 100) {
        clearInterval(interval);
        setShowFinalImage(true);
        return 100;
      }

      if (prev < 40) return prev + 2;     // very slow start
      if (prev < 75) return prev + 1.5;   // steady refinement
      return prev + 1;                  // careful final touches
    });
  }, 180); // slower heartbeat

  return () => clearInterval(interval);
}, [step]);

  /* ---------- REGION CLASS ---------- */
  const getOverlayClass = () => {
    if (step === 0) return "";
    if (activeRegion === "eyes") return "overlay-eyes";
    if (activeRegion === "mouth") return "overlay-mouth";
    return "";
  };

  /* ---------- RENDER ---------- */
  if (!aiAction) {
    return <div className="loading">Preparing AI explanation...</div>;
  }

  return (
    <div className="phase phase-3">
      <h2>How AI Makes This Change</h2>

      <p className="guidance-text">
        Let’s see what happens <b>inside</b> the image.
      </p>

      <div className="editor-container">
        {/* LEFT: IMAGE */}
        <div className="image-column">
          <div className="image-wrapper">
            <img
              src={
                showFinalImage
                  ? FINAL_IMAGE_MAP[aiAction]
                  : BASE_IMAGE
              }
              alt="AI Process"
              className="editable-image"
            />

            {/* REGION ANIMATION */}
            {step > 0 && !showFinalImage && (
              <div
                className={`ai-region ${getOverlayClass()} step-${step}`}
              />
            )}
          </div>

          <div className="intent-reminder">
            You chose: <b>{aiAction.replace("-", " ")}</b>
          </div>
        </div>

        {/* RIGHT: EXPLANATION */}
        <div className="controls">
          <h4>{steps[step].title}</h4>
          <p className="step-text">{steps[step].text}</p>

          {/* SMALL PROGRESS INDICATOR */}
          {step === 3 && (
            <div className="progress-indicator">
              <div className="progress-text">
               {progress < 30 && "Adding noise…"}
{progress >= 30 && progress < 70 && "Refining details…"}
{progress >= 70 && progress < 100 && "Finalizing texture…"}
{progress === 100 && "Done"}
&nbsp; {progress}%

              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}

          <button
            className="next-btn"
            disabled={step === 3 && progress < 100}
            onClick={() =>
              step < steps.length - 1
                ? setStep(step + 1)
                : onNext()
            }
          >
            {step < steps.length - 1 ? "Next step" : "Continue"}
          </button>
        </div>
      </div>
    </div>
  );
}
