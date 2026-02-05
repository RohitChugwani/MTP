import React, { useState } from "react";
import EmbeddingSpace2D from "./EmbeddingSpace2D";
import Embedding from "./Embedding";
import CardScreenWithDialogue from "./CardScreenWithDialogue";

const EmbeddingsModule = () => {
  const [step, setStep] = useState(1);

  return (
    <div style={moduleWrapper}>
      <div style={contentWrapper}>
        {step === 1 && <CardScreenWithDialogue />
}
        {step === 2 && <EmbeddingSpace2D />}
      </div>

      <div style={buttonWrapper}>
        {step === 1 && (
          <button onClick={() => setStep(2)} style={buttonStyle}>
            Next → See Similarity Map
          </button>
        )}

        {step === 2 && (
          <button onClick={() => setStep(1)} style={buttonStyle}>
            ← Back to Features
          </button>
        )}
      </div>
    </div>
  );
};

const moduleWrapper = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
};

const contentWrapper = {
  flex: 1,
};

const buttonWrapper = {
  padding: "20px",
  textAlign: "center",
  borderTop: "1px solid #ddd",
  background: "#fff",
};

const buttonStyle = {
  padding: "12px 28px",
  fontSize: "1.1rem",
  borderRadius: "25px",
  border: "none",
  cursor: "pointer",
  background: "#4caf50",
  color: "white",
};

export default EmbeddingsModule;
