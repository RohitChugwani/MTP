export default function Phase1WhatIsDeepfake({ onNext }) {
  return (
    <div className="phase phase-1">
      <h2>What is a Deepfake?</h2>

      <p className="guidance-text">
        Look carefully at the two videos below.  
        They may look similar but they are not the same.
      </p>

      <div className="video-compare">
        {/* REAL VIDEO */}
        <div className="video-card">
          <video
            src="/videos/real1.mp4"
            controls
            muted
          />
          <p className="video-label">🟢 Video A (Real)</p>
        </div>

        {/* FAKE VIDEO */}
        <div className="video-card">
          <video
            src="/videos/fake1.mp4"
            controls
            muted
          />
          <p className="video-label">🔴 Video B (AI-altered)</p>
        </div>
      </div>

      <div className="reflection-box">
        <p>
          Both videos show a person’s face.
          <br />
          One of them was created or changed using AI.
        </p>
      </div>

      <button className="next-btn" onClick={onNext}>
        What could be different here?
      </button>
    </div>
  );
}
