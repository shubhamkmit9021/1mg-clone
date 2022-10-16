import { Box } from "@chakra-ui/react";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import Footer1 from "./Components/Footer/Footer1";
import Home from "./pages/Home";
import UpperNav from "./Components/Navbar/UpperNav";
import { Route, Routes, Router } from "react-router-dom";
import Multivitamins from "./pages/Multivitamins";
import Devices from "./pages/Devices";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <Box>
      <UpperNav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/multivitamins" element={<Multivitamins />}></Route>
        <Route path="/devices" element={<Devices />}></Route>
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
