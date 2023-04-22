import { Route, Routes } from "react-router";
import Contact from "./components/Contact";
import Modal from "./components/Modal";
import Login from "./components/Login";
import DetailPage from "./components/DetailPage";
import NewsPage from "./components/NewsPage";

function App() {
  return (
    <div>
      <NewsPage />
      {/* <DetailPage /> */}
      {/* <Contact /> */}
      {/* <Routes>
        <Route path="/" element={<Contact />} />
        <Route path="/register" element={<Modal />} />
      </Routes> */}
    </div>
  );
}

export default App;
