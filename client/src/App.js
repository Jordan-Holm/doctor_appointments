import { Routes, Route } from "react-router-dom";
import MainNavbar from "./components/shared/MainNavbar";
import Home from './components/shared/home/Home';
import Footer from "./components/shared/Footer";

const App = () => (
  <>
    <MainNavbar />
    <Routes>
      <Route path="/" element={ <Home />} />
    </Routes>
    <Footer />
  </>
)

export default App;
