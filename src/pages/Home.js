import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: 30 }}>
      <h1>AI Literacy Platform</h1>
      <p>Select a module to continue</p>

      
      <button onClick={() => navigate("/module/embedding-concept")}>
        How do AI understand your prompt 
      </button>

      <br /><br />
      <button onClick={() => navigate("/module/embConcept")}>
        Embedding Concept
      </button>

      <br /><br />

      <button onClick={() => navigate("/module/image-generation")}>
        How AI Generates Images
      </button>

      <br /><br />
       <button onClick={() => navigate("/module/game")}>
        How AI Generates Images through game
      </button>

      <br /><br />

      <button onClick={() => navigate("/module/image-manipulation")}>
        Image Manipulation & Deepfakes
      </button>
    </div>
  );
}
