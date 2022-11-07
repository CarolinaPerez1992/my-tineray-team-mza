import "./App.css";
import Home from "./pages/Home";
import Cities from "./pages/Cities";
import Hotel from "./pages/Hotel";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import "./index.css";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import NewCity from "./pages/NewCity";
import NewHotel from "./pages/NewHotel";
import AutoToTop from "./components/AutoToTop";

function App() {
  return (
    <BrowserRouter>
      <AutoToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/hotels" element={<Hotel />}></Route>
          <Route path="/cities" element={<Cities />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/newcity" element={<NewCity />}></Route>
          <Route path="/newhotel" element={<NewHotel />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
