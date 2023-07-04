import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import BlockchainState from "./Context/BlockchainState";
import AddBlock from "./Pages/AddBlock";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Search from "./Pages/Search";
import Detail from "./Components/Detail/Detail";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <BlockchainState>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/mineBLock" element={<AddBlock />} />
          <Route path="/detailBlock/:id" element={<Detail />} />
          <Route path="/searchBlock" element={<Search />} />
        </Routes>
        <Footer />
      </div>
    </BlockchainState>
  );
}

export default App;
