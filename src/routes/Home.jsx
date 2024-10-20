import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pets from "./Pets";
import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
import Footer from "../components/Footer";

function Home() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/landing/:pet" element={<Pets />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Home;
