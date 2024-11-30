import "./Card.css";
import ICard from "../../interfaces";

function Card(props: ICard) {
  return (
    <div className="card">
      <img className="card-img" src={props.image} alt={props.title} />
      <h1 className="card-title">{props.title}</h1>
      <ul className="card-list">
        <li className="card-text">Using: {props.using}</li>
        <li className="card-text">Language: {props.language}</li>
        <li className="card-text">Update: {props.update}</li>
      </ul>
      <div className="card-btn-content">
        {props.urlDemo.length > 0 ? (
          <a href={props.urlDemo} target="_blank" className="card-btn btn-demo">
            <div className="card-btn-text">DEMO</div>
            <i className="fas fa-play"></i>
          </a>
        ) : null}
        <a href={props.urlCode} target="_blank" className="card-btn btn-code">
          <div className="card-btn-text">SOURCE CODE</div>
          <i className="fab fa-github"></i>
        </a>
      </div>
    </div>
  );
}

export default Card;
