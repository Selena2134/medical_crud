import Navbar from "./Navbar";
import MainLayout from "./layouts/MainLayout";
import About from "./pages/About";
import Animals from "./pages/Animals";
import Animal from "./pages/Animal";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateAnimal from "./pages/CreateAnimal";
import Modal from "./components/Modal";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/animals" element={<Animals />} />
            <Route path="/animals/create" element={<CreateAnimal />} />
            <Route path="/animals/:id" element={<Animal />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
