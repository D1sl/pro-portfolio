import { HashRouter, Routes, Route } from "react-router-dom";

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

  let address = window.location.href;

  console.log(address)

  if (address === "https://d1sl.github.io/pro-portfolio/") {
    window.location.replace("http://benmolini-portfolio.herokuapp.com/");
  }

  return (
    <HashRouter basemname={`/${process.env.PUBLIC_URL}`}>
      <div className="wrapper">
        <Header />
        <main>
          <Waves />
          <Routes>
            <Route path="" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/work" element={<MyWork />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
