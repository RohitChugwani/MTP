import { useState, useEffect } from "react";
import Explanation from "./Explanation";
import Timeline from "./Timeline";
import ImageCanva from "./ImageCanva";

export default function ImageGeneration() {
  const [progress, setProgress] = useState(0);
  const [playing, setPlaying] = useState(false);

  /* -----------------------------
     PHASE DERIVED FROM PROGRESS
     ----------------------------- */
  const phase =
    progress < 25 ? 1 :
    progress < 65 ? 2 : 3;

  /* -----------------------------
     ONLY PHASE 3 AUTO-PLAYS
     ----------------------------- */
  useEffect(() => {
    if (phase !== 3 || !playing) return;

    const interval = setInterval(() => {
      setProgress(prev => Math.min(prev + 1, 100));
    }, 120);

    return () => clearInterval(interval);
  }, [phase, playing]);

  /* -----------------------------
     UNLOCK AFTER PREDICTION TASK
     ----------------------------- */
  function unlockEmbeddings() {
    setProgress(25);
  }

  return (
    <div style={{ padding: 30 }}>
      <h1>How AI Generates Images</h1>

      {/* Explanation text */}
      <Explanation progress={progress} />

      {/* Main horizontal pipeline */}
      <ImageCanva
        progress={progress}
        onPredictionComplete={unlockEmbeddings}
      />

      {/* Controls */}
      <div
        style={{
          marginTop: 20,
          display: "flex",
          alignItems: "center",
          gap: 15
        }}
      >
        {/* Play only for Phase 3 */}
        {phase === 3 && (
          <button onClick={() => setPlaying(p => !p)}>
            {playing ? "Pause" : "Play"}
          </button>
        )}

        {/* Timeline (manual exploration allowed) */}
        <Timeline
          progress={progress}
          setProgress={(val) => {
            setPlaying(false);
            setProgress(val);
          }}
        />
      </div>
    </div>
  );
}
