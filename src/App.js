import "./App.css";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Header />

      <main id="main-content">
        <Slider />
        <Cards />
        <Footer />
      </main>
    </div>
  );
};

export default App;
