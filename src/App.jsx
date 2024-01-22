import { Navigate, Route, Routes } from "react-router-dom";
import { WelcomePage } from "./pages/WelcomePage.jsx";
import { NotFoundPage } from "./pages/404.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
