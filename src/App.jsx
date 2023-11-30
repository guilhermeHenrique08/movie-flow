import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Details from "./pages/Details";
import Error from "./pages/Error";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="h-full">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
