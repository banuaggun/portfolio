import { BrowserRouter, Routes, Route } from "react-router-dom"

import MainLayout from "./layout/MainLayout"
import Home from './pages/home/Home'
import About from './pages/about/About'
import Design from './pages/design/Design'
import Coding from './pages/coding/Code'
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
