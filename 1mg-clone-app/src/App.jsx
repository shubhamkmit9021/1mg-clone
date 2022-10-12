
import { Box } from '@chakra-ui/react';
import './App.css';
import LowerNav from './Components/Navbar/LowerNav';
import MiddleNav from './Components/Navbar/MiddleNav';
import UpperNav from './Components/Navbar/UpperNav';


function App() {
  return (
    <Box>
      <UpperNav />
      <hr />
      <MiddleNav />
      <hr />
      <LowerNav />
      <hr />
    </Box>
  );
}

export default App;
