import { HashRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Landing/LandingPage";
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </HashRouter>
  );
}
export default App;
