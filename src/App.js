import { BrowserRouter, Routes, Route } from "react-router-dom"

import MainLayout from "./layout/MainLayout"
import Home from './pages/Home'
import About from './pages/About'
import Design from './pages/Design'
import Coding from './pages/Coding'
import ScrollToTop from "./components/ScrollToTop"

function App() {
  return (
    
      <BrowserRouter>
        <ScrollToTop />
       <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/design" element={<Design />} />
          <Route path="/coding" element={<Coding />} />
        </Route>
      </Routes>
      </BrowserRouter>

  );
}

export default App;
