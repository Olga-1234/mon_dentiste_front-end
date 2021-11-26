import Image from "next/image";
import style from "./CardAndBgGreen.module.css";
import doctor from "../../../assets/doctorAndChild.png";
import Button from "../../button/Button";
import Link from "next/link"

const CardAndBg = ({ className }) => {
  return (
    <div
      className={` ${className} d-flex col-12 py-3  ${style.bgImage} ${style.respensive}`}
    >
      <div
        className={`col-6 ${style.respensiveCard1} d-flex align-items-center justify-content-center`}
      >
        <div className={`py-4  text-center ${style.montserat}`}>
          <p className="h1 text-light  py-lg-4">
            TROUVEZ UN CABINET <br /> DENTAIRE
          </p>
          <p className="text-light h2  py-2">
            Y prendre rendez-vous sans se <br /> deplacer
          </p>
          <div className="d-flex py-3 justify-content-center">

          <Link href="/prendre_rendez_vous"><a className="text-decoration-none"><Button text="Prendre rendez-vous" /></a>
              
              </Link>
          </div>
        </div>
      </div>

      <div
        className={`col-6 col-md-6 col-sm-5 col-xs-6 d-flex align-items-center d-flex justify-content-center ${style.respensiveCard2}`}
      >
        <div className="">
          <Image className="d-flex img-fluid" src={doctor} height="" width="" />
        </div>
      </div>
    </div>
  );
};

export default CardAndBg;
