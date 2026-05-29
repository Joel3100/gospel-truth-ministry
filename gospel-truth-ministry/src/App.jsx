import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Sermons from "./pages/Sermons";
import Events from "./pages/Events";
import EventLDetail from "./Pages/EventDetail";
import Blog from "./Pages/Blog";
import BlogDetail from "./Pages/BlogDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/"           element={<Home />} />
            <Route path="/sermons"    element={<Sermons />} />
            <Route path="/events"     element={<Events />} />
            <Route path="/events/:id" element={<EventLDetail />} />
            <Route path="/blog"       element={<Blog />} />
            <Route path="/blog/:id"   element={<BlogDetail />} />
            <Route path="/about"      element={<About />} />
            <Route path="/contact"    element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
