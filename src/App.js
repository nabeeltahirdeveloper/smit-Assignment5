// import logo from "./logo.svg";
import "./App.css";
import Header from "./commonComponents/Header";
import Footer from "./commonComponents/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <div className="card text-center">
        <div className="card-header">Featured</div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="/" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
        <div className="card-footer text-muted">1 days ago</div>
      </div>
  
      <Footer/>
    </div>
  );
}

export default App;
