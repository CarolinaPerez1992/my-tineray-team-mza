import './App.css'
import Home from './layouts/Home'
import Cities from './pages/Cities'
import Hotels from './pages/Hotels'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AutoToTop from './components/AutoToTop'
import './index.css'


function App() {
  return (
    <BrowserRouter>
    <AutoToTop/>
      <Routes> 
        <Route path="/" element={<Home/>}></Route>
        <Route path="/hotels" element={<Hotels/>}></Route>
        <Route path="/cities" element={<Cities/>}></Route>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
