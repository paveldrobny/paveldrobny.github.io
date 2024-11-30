import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import cards from "./cards";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />

      <h3 className="title-main">
        <i className="fa-regular fa-newspaper"></i> Latest update
      </h3>

      <Carousel />

      <h3 className="title-main">
        <i className="fa-solid fa-list"></i> Projects list
      </h3>
      <div className="cards-wrapper">
        {cards.map((c) => {
          return (
            <Card
              key={c.id}
              id={c.id}
              image={c.image}
              title={c.title}
              using={c.using}
              language={c.language}
              update={c.update}
              urlDemo={c.urlDemo}
              urlCode={c.urlCode}
              publishData={c.publishData}
            />
          );
        })}
      </div>

      <Footer />
    </div>
  );
}

export default App;
