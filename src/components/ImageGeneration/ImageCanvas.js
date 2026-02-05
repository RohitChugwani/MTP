import { useEffect, useState } from "react";

export default function ImageCanvas({ progress }) {
  // Phase selection
  if (progress < 20) return <PromptView />;
  if (progress>20 && progress < 40) return <FeatureEmbeddingView />;
  if (progress >= 40 && progress < 55) {
  return <NeuralNetworkBridge />;
}
  return <ImageGenerationView progress={progress} />;
}
const style = document.createElement("style");
style.innerHTML = `
@keyframes pulse {
  0% { opacity: 0.4; }
  50% { opacity: 1; }
  100% { opacity: 0.4; }
  @keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0px); }
}
  @keyframes fadeIn {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
}


}
`;
document.head.appendChild(style);

const PHASE_2_START = 20;
const PHASE_2_END = 40;



/* ---------- PHASE 1 ---------- */

function PromptView() {
  return (
    <div style={{ fontSize: 18 }}>
      <p>
        A{" "}
        <span style={pulseStyle}>dog</span>{" "}
        wearing{" "}
        <span style={pulseStyle}>glasses</span>{" "}
        sitting in a{" "}
        <span style={pulseStyle}>garden</span>
      </p>
    </div>
  );
}

const pulseStyle = {
  padding: "2px 6px",
  borderRadius: 4,
  background: "#e3f2fd",
  animation: "pulse 2s infinite"
};


/* ---------- PHASE 2 ---------- */

function FeatureEmbeddingView({ progress }) {
  const [step, setStep] = useState(0);

  // Reset when Phase 2 starts
  useEffect(() => {
    if (progress >= 20 && progress < 21) {
      setStep(0);
    }
  }, [progress]);

  // Advance steps automatically
  useEffect(() => {
    if (progress < 20 || progress >= 40) return;

    const timer = setTimeout(() => {
      setStep((prev) => Math.min(prev + 1, 2));
    }, 1200); // 1.2s per object

    return () => clearTimeout(timer);
  }, [step, progress]);

  return (
    <div>
      <PromptStrip />

      <h2>PHASE 2: FEATURE EXTRACTION</h2>

      {step === 0 && <DogFeatures />}
      {step === 1 && <GlassesFeatures />}
      {step === 2 && <GardenFeatures />}
    </div>
  );
}
function DogFeatures() {
  return (
    <FeatureBlock
      title="🐕 Dog"
      features={[
        { name: "fur", strength: 80 },
        { name: "tail", strength: 60 },
        { name: "eyes", strength: 70 },
        { name: "snout", strength: 50 }
      ]}
    />
  );
}

function GlassesFeatures() {
  return (
    <FeatureBlock
      title="👓 Glasses"
      features={[
        { name: "lenses", strength: 70 },
        { name: "frame", strength: 60 },
        { name: "shape", strength: 50 }
      ]}
    />
  );
}

function GardenFeatures() {
  return (
    <FeatureBlock
      title="🌿 Garden"
      features={[
        { name: "green colors", strength: 80 },
        { name: "plants", strength: 65 },
        { name: "outdoor light", strength: 50 }
      ]}
    />
  );
}




;
function FeatureCard({ title, features }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: 15,
        borderRadius: 8,
        width: 180,
        animation: "float 3s ease-in-out infinite"
      }}
    >
      <h4>{title}</h4>
      <ul>
        {features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
    </div>
  );
}


/* ---------- PHASE 3 ---------- */

function PatternMatchingView() {
  return (
    <div>
      <h3>Matching Learned Patterns</h3>
      <p>
        These visual features are matched with patterns the model learned
        during training.
      </p>
    </div>
  );
}

/* ---------- PHASE 4 ---------- */

function ImageGenerationView({ progress }) {
  const stage = Math.min(9, Math.floor((progress - 55) / 5));

  const images = [
    "/assets/image1.png",
    "/assets/image2.png",
    "/assets/image3.png",
    "/assets/image4.png",
    "/assets/image5.png",
    "/assets/image6.png",
    "/assets/image7.png",
    "/assets/image8.png",
    "/assets/image9.png",
    "/assets/image10.png"
  ];

  return (
    <div style={{ marginTop: 20 }}>
      <img
        src={images[stage]}
        alt="Generated stage"
        style={{ width: 300 }}
      />
    </div>
  );
}
function PromptStrip() {
  return (
    <div style={{ marginBottom: 10, fontSize: 14, color: "#555" }}>
      Prompt: <i>A dog wearing glasses sitting in a garden</i>
    </div>
  );
}

function FeatureBlock({ title, features }) {
  return (
    <div style={{ animation: "fadeIn 0.8s" }}>
      <h4>{title}</h4>
      {features.map((f, i) => (
        <div key={i} style={{ marginBottom: 6 }}>
          <span>{f.name}</span>
          <div
            style={{
              height: 6,
              width: `${f.strength}%`,
              background: "#4cafef",
              borderRadius: 4
            }}
          />
        </div>
      ))}
    </div>
  );
}
function NeuralNetworkBridge() {
  return (
    <div
      style={{
        padding: 30,
        borderRadius: 12,
        background: "rgba(0,0,0,0.05)",
        textAlign: "center",
        animation: "fadeIn 0.8s"
      }}
    >
      <h3>Neural Network</h3>
      <p style={{ fontSize: 14, color: "#555" }}>
        Multiple hidden layers transform embeddings into visual information
      </p>

      <div style={{ marginTop: 10 }}>
        <div style={layerStyle} />
        <div style={layerStyle} />
        <div style={layerStyle} />
      </div>
    </div>
  );
}

const layerStyle = {
  height: 6,
  background: "linear-gradient(to right, #ccc, #999)",
  margin: "6px 0",
  borderRadius: 4,
  animation: "pulse 1.5s infinite"
};


