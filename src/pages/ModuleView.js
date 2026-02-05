import { useParams } from "react-router-dom";
import ImageGeneration from "../components/ImageGeneration/ImageGeneration";
import EmbeddingsModule from "../components/EmbeddingConcept/EmbeddingsModule";
import EmbModules from "../components/EmbConcept/EmbModules";
import Game from "../components/Game";

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

  return <p>Module not found</p>;
}
