import React, { useState } from "react";
import HumanSimilarityStep from "./HumanSimilarityStep";
import FeatureReasoningStep from "./FeatureReasoningStep";
import SimilarityMappingStep from "./SimilarityMappingStep";
import Step4SimilarityMap from "./SimilarityMap";

// Later we’ll add Step 3 here

const EmbModules = () => {
  const [step, setStep] = useState(1);
  const [humanAnswer, setHumanAnswer] = useState(null);

  const handleHumanAnswer = (answer) => {
    setHumanAnswer(answer);
    setStep(2);
  };

  const goToNextStep = () => {
    setStep((prev) => prev + 1);
  };

  return (
    <div>
      {step === 1 && (
        <HumanSimilarityStep onAnswer={handleHumanAnswer} />
      )}

      {step === 2 && (
        <FeatureReasoningStep
          humanAnswer={humanAnswer}
          onNext={goToNextStep}
        />
      )}

      {/* {step === 3 && (
        <div style={{ padding: "40px", textAlign: "center" }}>
          <h2>Step 3 coming next: Can YOU think like AI?</h2>
        </div>
      )} */}
      {step === 3 && (
  <SimilarityMappingStep onNext={goToNextStep} />
)}

 {step === 4 && (
  <Step4SimilarityMap onNext={goToNextStep} />
)}

    </div>
  );
};

export default EmbModules;
