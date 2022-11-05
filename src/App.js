import "./App.css";
import Cities from "./pages/Cities";
import Hotels from "./pages/Hotels";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AutoToTop from "./components/AutoToTop";
import "./index.css";
import Home1 from "./components/Home1";
import Home2 from "./components/Home2";

function App() {
  return (
    <BrowserRouter>
      <AutoToTop />
      <Routes>
        <Route path="/" element={<Home1 />}></Route>
        <Route path="/home2" element={<Home2 />}></Route>
        <Route path="/hotels" element={<Hotels />}></Route>
        <Route path="/cities" element={<Cities />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
