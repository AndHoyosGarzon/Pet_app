import { FaGithub, FaLaptopCode, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="container mt-5 mb-2 bg-light border-top text-center">
      <p className="fw-bold mt-4">
        Create by
        <span className="mx-2">
          <FaLaptopCode size={20} color="darkblue" />
        </span>
        Andrés Felipe Hoyos Garzon
      </p>
      <div className="container d-flex justify-content-center mb-4 ">
        <a
          href="https://www.linkedin.com/in/andresfelipehoyosgarzon"
          className="btn"
          target="_blank"
        >
          <FaLinkedin size={25} color="blue" />
        </a>
        <a
          href="https://github.com/AndHoyosGarzon"
          className="btn"
          target="_blank"
        >
          <FaGithub size={25} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
