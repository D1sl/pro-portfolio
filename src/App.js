import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Waves from './components/Waves';

// Pages
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import MyWork from "./pages/Work";
import About from "./pages/About";

import './assets/css/styles.css';
import './assets/css/waves.css';


function App() {

  return (
    <Router>
      <div className="wrapper">
        <Header />
        <main>
          <Waves />
          <Routes>
            <Route path="/pro-portfolio" element={<About />} />
            <Route path="/pro-portfolio/contact" element={<Contact />} />
            <Route path="/pro-portfolio/resume" element={<Resume />} />
            <Route path="/pro-portfolio/work" element={<MyWork />} />
            <Route path="*" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
