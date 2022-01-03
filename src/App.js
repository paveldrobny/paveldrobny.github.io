import "./App.scss";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Header />

      <main id="main-content">
        <Carousel />
        <Cards />
        <Footer />
      </main>
    </div>
  );
};

export default App;
