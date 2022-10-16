import "./App.css";
import { Box } from "@chakra-ui/react";
import Cart from "./Components/Cart/Cart";
import Footer2 from "./Components/Footer/Footer2";
import Footer1 from "./Components/Footer/Footer1";
import { UpperHeading } from "./Components/Middle/UpperHeading";
import { UpperMiddle } from "./Components/Middle/UpperMiddle";
import UpperPoster from "./Components/Middle/UpperPoster";
import LowerNav from "./Components/Navbar/LowerNav";
import MiddleNav from "./Components/Navbar/MiddleNav";
import UpperNav from "./Components/Navbar/UpperNav";
import Footer3 from "./Components/Footer/Footer3";
import Carousel from "./Components/Carousel/Carousel.jsx";

function App() {
  return (
    <Box>
      <UpperNav />
      <hr />
      <MiddleNav />
      <hr />
      <LowerNav />
      <hr />
      <UpperMiddle />
      <UpperHeading />
      <hr />
      <UpperPoster />
      <hr />
      <Footer1 />
      <Footer2 />
      <Footer3 />
      <hr />
      <Carousel />
      {/* <Sec1Img/> */}
    </Box>
  );
}

export default App;
