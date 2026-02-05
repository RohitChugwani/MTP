import React from "react";
import "./EmbeddingFeaturesTable.css"; // We'll add CSS for colors

const featureColumns = ["Living", "Machine", "Air", "Ground", "Human", "Royal"];

// props:
// objects: array of objects with features
// activeObject: currently selected object name
const EmbeddingFeaturesTable = ({ objects, activeObject }) => {
  return (
    <div className="feature-table-wrapper">
      <table className="feature-table">
        <thead>
          <tr>
            <th>Object</th>
            {featureColumns.map((col) => (
              <th key={col}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {objects.map((obj) => (
            <tr
              key={obj.name}
              className={activeObject === obj.name ? "highlight" : ""}
            >
              <td>{obj.name}</td>
              <td>{obj.living ? "✅" : ""}</td>
              <td>{obj.machine ? "✅" : ""}</td>
              <td>{obj.air ? "✅" : ""}</td>
              <td>{obj.ground ? "✅" : ""}</td>
              <td>{obj.human ? "✅" : ""}</td>
              <td>{obj.royal ? "✅" : ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmbeddingFeaturesTable;
