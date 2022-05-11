import { useState } from "react";
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import './assets/css/styles.css';



function App() {
  const [currentPage, setCurrentPage] = useState("About Me");

  return (
      <div className={ currentPage === "About Me" ? 'wrapper' : 'wrapper2'}>

        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <main>
          <Content currentPage={currentPage} />
        </main>
        <Footer></Footer>
    </div>
  );
}

export default App;
