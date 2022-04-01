import Image from "next/image";

import style from "./style.module.css";
const Footer = () => {
  return (
    <footer className={` container d-flex  border-top   py-5  my-5 justify-content-between`}>
      <div className="col-5">
        <h1>Mon Dentiste</h1>
        <p>
          Mon Dentiste est une plateforme qui regroupe différents cabinets
          dentaires et lui donne la possibilité de contacter le cabinet de son
          choix
        </p>
      </div>
      <div className="col-5 px-5">
        <h2>Service</h2>
        <ul>
          <li>Cabinets</li>
          <li>A propos de nous</li>
          <li>Prendre rendez-vous</li>
        </ul>
      </div>
      <div className="col-2  ">
    <div className="col-12">
    <i class="bi bi-facebook d-block h3 d-flex justify-content-center  "></i>
      <i class="bi bi-instagram d-block h3 d-flex justify-content-center"></i>
      <i class="bi bi-twitter d-block h3 d-flex justify-content-center"></i>
      <i class="bi bi-linkedin d-block h3 d-flex justify-content-center"></i>
    </div>

      </div>
    </footer>
  );
};

export default Footer;
