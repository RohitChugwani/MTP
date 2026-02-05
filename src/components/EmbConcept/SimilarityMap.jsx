import { useState } from "react";
import "./Step4.css";

const OBJECTS = [
  { id: 1, label: "Dog", x: 20, y: 40, group: "animal" },
  { id: 2, label: "Cat", x: 25, y: 45, group: "animal" },
  { id: 3, label: "Wolf", x: 18, y: 35, group: "animal" },

  { id: 4, label: "Car", x: 70, y: 30, group: "vehicle" },
  { id: 5, label: "Bus", x: 75, y: 35, group: "vehicle" },
  { id: 6, label: "Bike", x: 72, y: 25, group: "vehicle" },

  { id: 7, label: "Apple", x: 40, y: 70, group: "food" },
  { id: 8, label: "Banana", x: 45, y: 75, group: "food" },
  { id: 9, label: "Orange", x: 38, y: 78, group: "food" }
];

export default function Step4SimilarityMap() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="step4-container">
      {/* LEFT TUTOR PANEL */}
      <div className="tutor-panel">
        <h3>🤖 AI Tutor</h3>

        {!selected && (
          <>
            <p>
              These dots represent things I have learned about.
            </p>
            <p>
              Objects that are <b>similar</b> are placed closer together.
            </p>
            <p>
              👉 Click on any object to explore.
            </p>
          </>
        )}

        {selected && (
          <>
            <p>
              You selected: <b>{selected.label}</b>
            </p>
            <p>
              Notice which objects are closest to it.
            </p>
            <p>
              ❓ Why do you think the AI placed them nearby?
            </p>
          </>
        )}
      </div>

      {/* MAIN MAP */}
      <div className="map-area">
        <h2>Similarity Map</h2>

        <div className="map">
          {OBJECTS.map(obj => (
            <div
              key={obj.id}
              className={`dot ${
                selected?.group === obj.group ? "highlight" : ""
              }`}
              style={{
                left: `${obj.x}%`,
                top: `${obj.y}%`
              }}
              onClick={() => setSelected(obj)}
              title={obj.label}
            >
              •
            </div>
          ))}
        </div>

        <p className="map-hint">
          (Objects closer together mean higher similarity)
        </p>
      </div>
    </div>
  );
}
