import "./App.css";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import CardsView from "./components/Cards/CardsView";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <CardsView />
      <Footer />
    </div>
  );
}

export default App;
