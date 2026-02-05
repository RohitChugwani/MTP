import React, { useState } from "react";
import Embedding from "./Embedding";
import DialogueWalkthrough from "../Common/DialogueWalkthrough";
import EmbeddingSpace2D from "./EmbeddingSpace2D";
import "./CardScreenWithDialogue.css"

const CardScreenWithDialogue = () => {
  const [step, setStep] = useState(1); // 1 = cards, 2 = similarity map
  const [dialogueStep, setDialogueStep] = useState(0);

  // Dialogue arrays per screen
  const cardScreenDialogues = [
    {
      text: "Hello kid! My name is Dr.AI. I will explain how I understand your prompt. Are you ready?",
      options: [{ label: "Yes", onClick: null }],
    },
    {
      text: "I am trained on a vast amount of data, just like you study and learn. Similarly, I have also been trained for a long time.",
    },
    {
      text: "Great! Now click on these cards to read what I know about these objects!",
    },
  ];

  const similarityMapDialogues = [
    {
      text: "Welcome to the similarity map! Here you can see how AI thinks objects are related.",
    },
    {
      text: "For example, cats and dogs share similar features, so they appear closer together.",
    },
    {
      text: "Click on objects to see their relationships and how AI “embeds” them in space.",
    },
  ];

  // Choose dialogue based on screen
  const currentDialogues = step === 1 ? cardScreenDialogues : similarityMapDialogues;

  return (
    <div className="module-wrapper">
      {/* Fixed Dialogue Panel */}
      <div className="dialogue-panel">
        <DialogueWalkthrough
          dialogues={currentDialogues}
          onComplete={() => setDialogueStep(currentDialogues.length)}
        />
      </div>

      {/* Main Content */}
      <div className="main-content">
        {step === 1 && <Embedding />}
        {step === 2 && <EmbeddingSpace2D />}

        {/* Navigation buttons */}
        <div className="next-screen-btn">
          {step === 1 && (
            <button onClick={() => setStep(2)}>Next → See Similarity Map</button>
          )}
          {step === 2 && (
            <button onClick={() => setStep(1)}>← Back to Cards</button>
          )}
        </div>
      </div>
    </div>
  );
};
export default CardScreenWithDialogue