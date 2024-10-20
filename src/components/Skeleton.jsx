import style from "../styles/style.module.css";

function SkeletonCard() {
  return (
    <div className={`card ${style.skeletonCard} bg-light my-3 mx-2`}>
      <span
        className={`card-img-top ${style.skeletonCardImg}`}
        style={{ width: "100%", height: "250px" }}
      ></span>
      <div className="card-body text-center">
        <h5 className="card-title fw-bold bg-secondary"></h5>
        <p className="card-text bg-secondary"></p>
      </div>
    </div>
  );
}

export default SkeletonCard;
