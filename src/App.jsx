import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Coins from "./pages/Coins";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* if After /coin any coin name(:coinid) is passed than this route will activate. */}
        <Route path="/coin/:coinid" element={<Coins />}></Route>
      </Routes>
    </>
  );
}

export default App;
