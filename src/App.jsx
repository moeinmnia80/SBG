import { Route, Routes } from "react-router-dom";
import { WelcomePage } from "./pages/WelcomePage.jsx";
import { NotFoundPage } from "./pages/404.jsx";
import { Articles } from "./components/Articles.jsx";
import { ArticleDatail } from "./components/ArticleDatail.jsx";
import { Layout } from "./layout/Layout.jsx";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:id" element={<ArticleDatail />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
