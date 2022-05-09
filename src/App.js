import { useState } from "react";
import Header from './components/Header'
import Content from './components/Content'
import './assets/css/styles.css'

function App() {
  const [currentPage, setCurrentPage ] = useState("About Me");

  return (
    <>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        <Content currentPage={currentPage} />
      </main>
    </>
  );
}

export default App;
