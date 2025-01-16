import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Categories } from "./pages/Categories";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/categorias" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
