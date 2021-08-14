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
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/courses" component={Courses} />
        <Route path="/staff" component={Staff} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
