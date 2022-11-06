import "./App.css";
import Cities from "./pages/Cities";
import Hotels from "./pages/Hotels";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AutoToTop from "./components/AutoToTop";
import "./index.css";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import SignUp from './pages/SignUp'

function App() {
  return (
    <BrowserRouter>
      <AutoToTop />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/hotels" element={<Hotels />}></Route>
        <Route path="/cities" element={<Cities />}></Route>
        <Route path="/e" element={<NotFound />}></Route>
        <Route path="/f" element={<SignUp/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
