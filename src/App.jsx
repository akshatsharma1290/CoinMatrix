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
        <Route path="/coin/:coinid" element={<Coins />}></Route>
      </Routes>
    </>
  );
}

export default App;
