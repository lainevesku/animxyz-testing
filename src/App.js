import "./styles.css";
import Header from "./Header.jsx";
import Body from "./Body";
import Footer from "./Footer";
import "@animxyz/core";
import { XyzTransition } from "@animxyz/react";


function App() {
  return (
    <XyzTransition appear duration="auto">
      <div className="page-wrap">
        <Header />
        <Body />
        <Footer />
      </div>
    </XyzTransition>
  );
}

export default App;