// import logo from "./logo.svg";
import "./App.css";
import Header from "./commonComponents/Header";
import Footer from "./commonComponents/Footer";
import Navbar from "./components/Navbar";
import SocialLink from "./components/SocialLink";
import Cards from "./components/Cards";
import Support from "./components/Support";
import {Qbanner} from "./components/Qbanner";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Qbanner/>
      <Support/>
      <div className="container">
        <center>
        <hr className="cardHr"></hr>
        </center>
      <Cards/>
      </div>
      <SocialLink/>
      <Footer/>
    </div>
  );
}

export default App;
