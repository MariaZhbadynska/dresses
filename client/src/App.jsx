import "./App.css";
import LikedPage from "./Pages/LikedPage/LikedPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel";
import LookDressPage from "./Pages/LookDressPage/LookDressPage";
import ContactsPage from "./Pages/ContactsPage/ContactsPage";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favs" element={<LikedPage />} />
        <Route path="/dresses/:id" element={<LookDressPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
