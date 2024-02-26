import "./App.css";
import * as Pages from "./Pages";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components";
import { SearchProvider } from "./Context";

function App() {
  return (
    <>
      <SearchProvider>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Pages.HomePage />} />
            <Route path="/Search" element={<Pages.SearchPage />} />
            <Route path="/Shows">
              <Route index element={<Pages.ShowsPage />} />
              <Route path=":id" element={<Pages.ShowPage />} />
            </Route>
            <Route path="*" element={<Pages.NotFound />} />
          </Route>
        </Routes>
      </SearchProvider>
    </>
  );
}

export default App;
