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
import DetailCity from "./pages/DetailCity";
import DetailHotel from "./pages/DetailHotel";
import MyCities from "./pages/MyCities";
import MyHotels from "./pages/MyHotels";
import MyTinerary from "./pages/MyTinerary";

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
          <Route path="/detailcity/:id" element={<DetailCity />}></Route>
          <Route path="/detailhotel/:id" element={<DetailHotel />}></Route>
          <Route path="/mycities" element={<MyCities />}></Route>
          <Route path="/myhotels" element={<MyHotels />}></Route>
          <Route path="/mytinerary/:id" element={<MyTinerary />}></Route>
        </Routes>
      </Layout>
      {/* useState(false) reemplazar window por set !reload */}
    </BrowserRouter>
  );
}

export default App;
