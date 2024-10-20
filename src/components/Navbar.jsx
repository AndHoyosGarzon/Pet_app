import { FaShieldDog } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const typeAnimal = ["perro", "gato", "conejo", "roedor", "ave"];
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary border">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold " href="/">
            ADOT_PETS <FaShieldDog size={25} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="container-fluid collapse navbar-collapse"
            id="navbarNav"
          >
            <ul className="container-fluid justify-content-end navbar-nav fw-bold ">
              <li className="nav-item">
                <button
                  onClick={() => navigate(`/landing/${typeAnimal[0]}`)}
                  className="nav-link text-dark"
                >
                  Dogs
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link text-dark"
                  onClick={() => navigate(`/landing/${typeAnimal[1]}`)}
                  href="#"
                >
                  Cats
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link text-dark"
                  onClick={() => navigate(`/landing/${typeAnimal[1]}`)}
                  href="#"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
