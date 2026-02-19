export default function Phase4WhatStayedSame({ aiAction, onNext }) {
  if (!aiAction) {
    return <div className="loading">Preparing explanation...</div>;
  }

  /* ---------- FINAL IMAGE ---------- */
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

  return (
    <div className="phase phase-4">
      <h2>What Stayed the Same</h2>

      <p className="guidance-text">
        AI didn’t redraw the whole image , it only changed what you asked for.
      </p>

      <div className="editor-container">
        {/* LEFT: FINAL IMAGE */}
        <div className="image-column">
          <div className="image-wrapper">
            <img
              src={FINAL_IMAGE_MAP[aiAction]}
              alt="Final result"
              className="editable-image"
            />

            {/* UNCHANGED AREA OVERLAY */}
            <div className={`unchanged-overlay ${activeRegion}`} />

            {/* CHANGED REGION LABEL */}
            <div className={`changed-label ${activeRegion}`}>
              Changed
            </div>
          </div>
        </div>

        {/* RIGHT: EXPLANATION */}
        <div className="controls">
          <h4>AI was selective</h4>

          <ul className="explanation-points">
            <li>The rest of the image stayed exactly the same</li>
            <li>Lighting, colors, and background were preserved</li>
            <li>Only the selected region was regenerated</li>
          </ul>

          <button className="next-btn" onClick={onNext}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
