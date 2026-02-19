import { useState } from "react";

export default function Phase1TraditionalEdit({ onNext }) {
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [blur, setBlur] = useState(0);

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const getFeedback = () => {
    if (!selectedOption) return null;

    if (selectedOption === "adjust") {
      return "Yes. These tools affect the entire image, like brightness or blur.";
    }

    return "These tools don’t understand objects — they only change pixels.";
  };

  return (
    <div className="phase phase-1">
      <h2>Traditional Photo Editing</h2>

      <p className="guidance-text">
        Try adjusting the sliders and observe what changes in the image.
      </p>

      <p className="framing-text">
        These tools change the image, but they don’t understand what is in it.
      </p>

      <div className="editor-container">
        {/* LEFT COLUMN */}
        <div className="image-column">
          <img
            src="/assets/image10.png"
            alt="Editable"
            className="editable-image"
            style={{
              filter: `
                brightness(${brightness}%)
                contrast(${contrast}%)
                blur(${blur}px)
              `,
            }}
          />

         

        {/* RIGHT COLUMN */}
        <div className="controls">
          <label>
            Brightness
            <input
              type="range"
              min="50"
              max="150"
              value={brightness}
              onChange={(e) => setBrightness(e.target.value)}
            />
          </label>

          <label>
            Contrast
            <input
              type="range"
              min="50"
              max="150"
              value={contrast}
              onChange={(e) => setContrast(e.target.value)}
            />
          </label>

          <label>
            Blur
            <input
              type="range"
              min="0"
              max="10"
              value={blur}
              onChange={(e) => setBlur(e.target.value)}
            />
            <small className="slider-hint">
              Notice how blur affects everything equally.
            </small>
          </label>
        </div>
      </div>
       {/* Reflection box (NOT overlay) */}
          <div className="reflection-box">
            <h4>Quick check</h4>
            <p>Using only these tools, what can you actually change?</p>

            <div className="reflection-options">
              <button
                className={selectedOption === "glasses" ? "selected" : ""}
                onClick={() => handleOptionClick("glasses")}
              >
                Remove glasses
              </button>

              <button
                className={selectedOption === "animal" ? "selected" : ""}
                onClick={() => handleOptionClick("animal")}
              >
                Dog → Cat
              </button>

              <button
                className={selectedOption === "adjust" ? "selected" : ""}
                onClick={() => handleOptionClick("adjust")}
              >
                Brightness / Blur
              </button>

              <button
                className={selectedOption === "expression" ? "selected" : ""}
                onClick={() => handleOptionClick("expression")}
              >
                Facial expression
              </button>
            </div>

            {selectedOption && (
              <p className="reflection-feedback">{getFeedback()}</p>
            )}
          </div>
        </div>

      <button className="next-btn" onClick={onNext}>
        Next
      </button>
    </div>
  );
}
