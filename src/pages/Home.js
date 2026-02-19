import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const cardStyle = {
    background: "linear-gradient(135deg, #1f2937, #020617)",
    color: "#f9fafb",
    padding: "22px 26px",
    borderRadius: "14px",
    width: "100%",
    maxWidth: "540px",
    cursor: "pointer",
    boxShadow: "0 8px 18px rgba(0,0,0,0.22)",
    transition: "all 0.25s ease",
    border: "1px solid rgba(148,163,184,0.15)",
  };

  const containerStyle = {
    minHeight: "100vh",
    background: "linear-gradient(180deg, #020617, #020617)",
    padding: "48px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#e5e7eb",
  };

  const moduleWrapper = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "26px",
    marginTop: "44px",
  };

  const stepLine = {
    width: "2px",
    height: "32px",
    background: "linear-gradient(to bottom, #64748b, transparent)",
  };

  const moduleTitleStyle = {
    fontSize: "1.05rem",
    fontWeight: 600,
    marginBottom: "6px",
    letterSpacing: "0.3px",
  };

  const moduleDescStyle = {
    fontSize: "0.95rem",
    color: "#cbd5f5",
    lineHeight: 1.5,
  };

  return (
    <div style={containerStyle}>
      <h1
        style={{
          fontSize: "2.3rem",
          marginBottom: "10px",
          letterSpacing: "0.4px",
        }}
      >
        AI Literacy Journey
      </h1>

      <p
        style={{
          maxWidth: "560px",
          textAlign: "center",
          color: "#94a3b8",
          fontSize: "1rem",
          lineHeight: 1.6,
        }}
      >
        This learning module introduces how Artificial Intelligence creates
        media — from understanding text to generating and manipulating images.
      </p>

      <div style={moduleWrapper}>
        {/* Module 1 */}
        <div
          style={cardStyle}
          onClick={() => navigate("/module/embConcept")}
          onMouseEnter={(e) =>
            (e.currentTarget.style.border =
              "1px solid rgba(56,189,248,0.5)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.border =
              "1px solid rgba(148,163,184,0.15)")
          }
        >
          <div style={moduleTitleStyle}>🧠 Module 1</div>
          <div style={moduleDescStyle}>
            How do AI systems understand human prompts?
          </div>
        </div>

        <div style={stepLine}></div>

        {/* Module 2 */}
        <div
          style={cardStyle}
          onClick={() => navigate("/module/image-generation")}
          onMouseEnter={(e) =>
            (e.currentTarget.style.border =
              "1px solid rgba(56,189,248,0.5)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.border =
              "1px solid rgba(148,163,184,0.15)")
          }
        >
          <div style={moduleTitleStyle}>🎨 Module 2</div>
          <div style={moduleDescStyle}>
            How AI models generate images from text descriptions.
          </div>
        </div>

        <div style={stepLine}></div>

        {/* Module 3 */}
        <div
          style={cardStyle}
          onClick={() => navigate("/module/image-manipulation")}
          onMouseEnter={(e) =>
            (e.currentTarget.style.border =
              "1px solid rgba(56,189,248,0.5)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.border =
              "1px solid rgba(148,163,184,0.15)")
          }
        >
          <div style={moduleTitleStyle}>🛠️ Module 3</div>
          <div style={moduleDescStyle}>
            Understanding AI-based image editing and manipulation.
          </div>
        </div>

        <div style={stepLine}></div>

        {/* Module 4 */}
        <div
          style={{
            ...cardStyle,
            background: "linear-gradient(135deg, #3f1d0b, #1c0c05)",
          }}
          onClick={() => navigate("/module/deepfake")}
          onMouseEnter={(e) =>
            (e.currentTarget.style.border =
              "1px solid rgba(251,146,60,0.5)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.border =
              "1px solid rgba(148,163,184,0.15)")
          }
        >
          <div style={moduleTitleStyle}>🎭 Module 4</div>
          <div style={moduleDescStyle}>
            Exploring deepfakes and their ethical implications.
          </div>
        </div>
      </div>
    </div>
  );
}
