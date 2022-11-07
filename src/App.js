import "./App.css";
import Cities from "./pages/Cities";
import Hotel from "./pages/Hotel";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AutoToTop from "./components/AutoToTop";
import "./index.css";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import NewCity from './pages/NewCity'

function App() {
  return (
    <BrowserRouter>
      <AutoToTop />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/hotels" element={<Hotel />}></Route>
        <Route path="/cities" element={<Cities />}></Route>
        <Route path="/e" element={<NotFound />}></Route>
        <Route path="/f" element={<SignUp />}></Route>
        <Route path="/in" element={<SignIn />}></Route>
        <Route path="/nc" element={<NewCity />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
