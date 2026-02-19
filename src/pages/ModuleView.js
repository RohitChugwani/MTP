import { useParams } from "react-router-dom";
import ImageGeneration from "../components/ImageGeneration/ImageGeneration";
import EmbeddingsModule from "../components/EmbeddingConcept/EmbeddingsModule";
import EmbModules from "../components/EmbConcept/EmbModules";
import Game from "../components/Game";
import ImageManipulation from "../components/ImageManipulation";
import DeepfakeModule from "../components/Deepfake/DeepfakeModule";

export default function ModuleView() {
  const { id } = useParams();

  if (id === "image-generation") {
    return <ImageGeneration />;
  }
   if (id === "embedding-concept") {
    return <EmbeddingsModule/>;
  }
   if (id === "embConcept") {
    return <EmbModules/>;
  }
  if (id === "game") {
    return <Game/>;
  }
  if (id === "image-manipulation") {
    return <ImageManipulation/>;
  }
   if (id === "deepfake") {
    return <DeepfakeModule/>;
  }

  return <p>Module not found</p>;
}
