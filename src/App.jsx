import { Route, Routes } from "react-router-dom";
import { WelcomePage } from "./pages/WelcomePage.jsx";
import { NotFoundPage } from "./pages/404.jsx";
import { ArticlesPage } from "./pages/ArticlesPage.jsx";
import { ArticleDetailPage } from "./pages/ArticleDetailPage.jsx";
import { Layout } from "./layout/Layout.jsx";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/articles/:slug" element={<ArticleDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
