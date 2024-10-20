import { FaHeart, FaRegMoneyBillAlt } from "react-icons/fa";
import style from "../styles/style.module.css";
import { MdOutlineFamilyRestroom, MdPets } from "react-icons/md";
import { FaHouseChimney } from "react-icons/fa6";
import { GiMeal } from "react-icons/gi";

function Landing() {
  return (
    <div className="container-fluid">
      <div className={`position-relative ${style.imageContent}`}>
        <img
          className={`z-n1 position-absolute  ${style.imageLanding}`}
          src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="pets"
        />
        <a
          href="https://huachitos.cl/"
          target="_blank"
          className={`btn text-white px-5 py-3 fw-bold rounded-pill z-3 position-absolute bottom-0 start-0 mb-5 ms-5 ${style.colorBtn}`}
        >
          ADOT A PET
        </a>
      </div>

      <div className="container text-center my-5 ">
        <h1 className="fw-bold mt-5">
          What Can We <span className="text-secondary">Do ?</span>
        </h1>
        <p className="fw-bold">
          We are looking for a family that loves us and accepts us completely
          with our personality...
        </p>
        <span className="me-3">
          <MdOutlineFamilyRestroom color="green" size={30} />
        </span>
        <span className="me-3">
          <FaHeart color="red" size={30} />
        </span>
        <span className="me-3">
          <FaHouseChimney color="blue" size={30} />
        </span>
      </div>

      <div className="container d-flex justify-content-around flex-wrap my-5 ">
        <button className="btn btn-success fw-bold mt-5">
          <div>
            <FaRegMoneyBillAlt size={40} />
          </div>
          Donations
        </button>
        <button className="btn btn-primary fw-bold mt-5">
          <div>
            <GiMeal size={40} />
          </div>
          Feed a pet
        </button>
        <button className="btn btn-warning fw-bold mt-5">
          <div>
            <MdPets size={40} />
          </div>
          Adopt a pet
        </button>
      </div>
    </div>
  );
}

export default Landing;
