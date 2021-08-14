// import Navtop from "../../Components/Navbar/Navtop";
import Footer from "./Components/Footer/Footer";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import "./App.css";
import Home from "./Pages/Home/Home";
import { Route, Switch } from "react-router";
import Navtop from "./Components/Navbar/Navtop";

import Navbarheader from "./Components/Navbar/Navbar";
import Courses from "./Pages/Courses/Courses";
import Staff from "./Pages/Staff/Staff";
import Blog from "./Pages/Blog/Blog";

function App() {
  return (
    <>
      <Navtop />
      <Navbarheader />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/courses">
          <Courses />
        </Route>
        <Route exact path="/staff">
          <Staff />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/blog">
          <Blog />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
