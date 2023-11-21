import Nav from "./Components/Nav";

import "./App.css";
import Description from "./Components/Description";
import Project from "./Components/Project";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
import NavMobile from "./Components/NavMobile";
import { useBreakpointValue } from "@chakra-ui/react";

function App() {
  const size = useBreakpointValue({
    base: "mobile",
    sm: "tablet",
    md: "desktop",
  });
  console.log(size);
  return (
    <div style={{ scrollBehavior: "smooth" }}>
      {size === "mobile" || size === "tablet" ? <NavMobile /> : <Nav />}
      {/* <NavMobile /> */}
      <Description />
      <Skills />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
