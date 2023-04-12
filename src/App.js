import { Box } from "@chakra-ui/react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Location from "./components/Location";
import './App.css';

function App() {
  return (
    <Box bg='#2D2A2A' width='100%'>
      <Navbar />
      <Home />
      <About />
      <Location />
    </Box >
  );
}

export default App;
