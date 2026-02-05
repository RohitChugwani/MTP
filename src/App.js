import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ModuleView from "./pages/ModuleView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/module/:id" element={<ModuleView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
