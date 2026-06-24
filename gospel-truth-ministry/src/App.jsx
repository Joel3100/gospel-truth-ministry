import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ServiceSchedule from "./Pages/serviceSchedule";
import Sermons from "./Pages/Sermons";
import Events from "./Pages/Events";
import EventDetail from "./Pages/EventDetail";
import Blog from "./Pages/Blog";
import BlogDetail from "./Pages/BlogDetail";
import About from "./Pages/About";
import Beliefs from "./Pages/Beliefs";
import Contact from "./Pages/Contact";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schedule" element={<ServiceSchedule />} />
            <Route path="/sermons" element={<Sermons />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<EventDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/beliefs" element={<Beliefs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
