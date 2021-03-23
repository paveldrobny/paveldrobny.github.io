import "./App.css";
import Header from "./components/Header"
import Slider from "./components/Slider";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
