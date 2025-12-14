import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

import Home from "./pages/home";
import AboutMain from "./pages/about";
import ScrollToTop from "./pages/scroll-top";
import FloatingMenu from "./components/floating-menu";

const App = () => {
  return (
    <>
      <ScrollToTop />

      <Navbar />
      <FloatingMenu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMain />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
