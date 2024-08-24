import { Route, Routes } from "react-router-dom";
import { MainProvider } from "./context/MainContext";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Work from "./pages/Work";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";

function App() {
  return (
    <MainProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Work />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </MainProvider>
  );
}

export default App;
