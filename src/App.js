import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";

import { BiSolidRightArrow } from "react-icons/bi";
function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <AboutMe />
      <Portfolio />
      <SocialLinks />
    </div>
  );
}

export default App;
