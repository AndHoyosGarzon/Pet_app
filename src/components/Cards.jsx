import style from "../styles/style.module.css";

function Cards({ img, name, genre, details }) {
  return (
    <div className={`card ${style.cardPet} my-3 mx-2`}>
      <img
        src={img}
        className="card-img-top"
        style={{ width: "100%", height: "250px", objectFit: "cover" }}
        alt={name}
      />
      <div className="card-body text-center">
        <h5 className="card-title fw-bold">{name}</h5>
        <p className="card-text">{genre}</p>
        <a href={details} className="btn fw-bold btn-sm btn-primary">
          Get To Know Me
        </a>
      </div>
    </div>
  );
}

export default Cards;
