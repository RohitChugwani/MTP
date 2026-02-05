import { useState } from "react";

export default function ImageCanva({ progress, onPredictionComplete }) {
  const [predictedWords, setPredictedWords] = useState([]);
  const [predictionDone, setPredictionDone] = useState(false);

  return (
    <div style={pipelineStyle}>

      {/* PROMPT */}
      <PipelineBlock title="Prompt" active={true}>
        <p>“Dog wearing glasses sitting in a garden”</p>

        {!predictionDone && (
          <PredictionBlock
            selected={predictedWords}
            onSelect={setPredictedWords}
            onConfirm={() => {
              setPredictionDone(true);
              onPredictionComplete(); // 🔑 parent decides progress
            }}
          />
        )}
      </PipelineBlock>

      <Arrow active={progress >= 25} />

      {/* EMBEDDINGS */}
      <PipelineBlock title="What AI Notices" active={progress >= 25}>
        <p><strong>Dog</strong> → fur, tail, eyes</p>
        <p><strong>Glasses</strong> → frame, lenses</p>
        <p><strong>Garden</strong> → plants, green</p>
      </PipelineBlock>

      <Arrow active={progress >= 45} />

      {/* HOW AI THINKS */}
      <PipelineBlock title="How AI Refines the Image" active={progress >= 45}>
        <p>
          The AI starts with visual noise and slowly cleans it.
        </p>
        <p>
          Each step asks: <em>“Does this look closer to the prompt?”</em>
        </p>
        <NoiseRefinementVisual active={progress >= 45} />
      </PipelineBlock>

      <Arrow active={progress >= 65} />

      {/* IMAGE OUTPUT */}
      <PipelineBlock title="Final Image" active={progress >= 65}>
        <ImageGenerationView progress={progress} />
      </PipelineBlock>

    </div>
  );
}

/* ───────────────── STYLES & HELPERS ───────────────── */

const pipelineStyle = {
  display: "flex",
  alignItems: "flex-start",
  gap: "20px",
  marginTop: "30px"
};

function PipelineBlock({ title, active, children }) {
  if (!active) return null;

  return (
    <div style={{
      width: 240,
      minHeight: 180,
      padding: 15,
      borderRadius: 12,
      border: "2px solid #ddd",
      background: "#fff"
    }}>
      <h3>{title}</h3>
      {children}
    </div>
  );
}

function Arrow({ active }) {
  return (
    <div style={{
      fontSize: 26,
      opacity: active ? 1 : 0,
      transition: "opacity 0.4s"
    }}>
      →
    </div>
  );
}

function NoiseRefinementVisual({ active }) {
  return (
    <div style={{ marginTop: 10 }}>
      <div style={noiseBox(active, 0.3)}>Very Noisy</div>
      <div style={noiseBox(active, 0.6)}>Less Noisy</div>
      <div style={noiseBox(active, 1)}>Almost Clear</div>
    </div>
  );
}

function noiseBox(active, clarity) {
  return {
    marginBottom: 6,
    padding: "6px 10px",
    borderRadius: 6,
    background: "#eee",
    opacity: active ? clarity : 0,
    transition: "opacity 0.6s"
  };
}

function PredictionBlock({ selected, onSelect, onConfirm }) {
  const options = ["Dog", "Glasses", "Garden", "Sitting"];

  function toggle(option) {
    onSelect(
      selected.includes(option)
        ? selected.filter(o => o !== option)
        : [...selected, option]
    );
  }

  return (
    <div style={{ marginTop: 10 }}>
      <p><strong>Which words matter most for the image?</strong></p>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {options.map(option => (
          <button
            key={option}
            onClick={() => toggle(option)}
            style={{
              padding: "6px 10px",
              borderRadius: 20,
              border: "1px solid #ccc",
              background: selected.includes(option) ? "#dbeafe" : "#fff"
            }}
          >
            {option}
          </button>
        ))}
      </div>

      {selected.length > 0 && (
        <button style={{ marginTop: 10 }} onClick={onConfirm}>
          Continue
        </button>
      )}
    </div>
  );
}

function ImageGenerationView({ progress }) {
  const stage = Math.min(9, Math.floor((progress - 65) / 4));

  const images = Array.from({ length: 10 }, (_, i) =>
    `/assets/image${i + 1}.png`
  );

  return (
    <img
      src={images[stage]}
      alt="Generation stage"
      style={{ width: 260 }}
    />
  );
}
