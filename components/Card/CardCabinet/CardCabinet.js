import Image from "next/image";
import cabinet from "../../../assets/cabinet.png";
import Button from "../../button/Button";
import map from "../../../assets/map.svg";
import service from "../../../assets/tooth.svg";
import phone from "../../../assets/phone.svg";
import clock from "../../../assets/clock.svg"
import mail from "../../../assets/email.svg"
import style from "./CardCabinet.module.css"
import Link from "next/link";

const CardCabinet = () => {
  return (
    <div className="d-flex justify-content-center py-4 ">
      <div className={`d-flex col-lg-8 ${style.boxshadow} ${style.respensiveReverse}`}>
        <div className="col-lg-8 border-lg">
          <div className={`d-flex col-lg-12  py-3 px-3 justify-content-between ${style.respensive}`}>
            <div className="col-lg-6">
              <h2>
                Cabinet <br /> Kazadi Blaise
              </h2>
            </div>

            <div className="col-lg-6">
                <Link href="/prendre_rendez_vous"><a className={`text-decoration-none`}><Button text="prendre rendez-vous" className={`${style.fontSize}`}/></a>
              </Link>
            </div>
          </div>

          <div className="d-flex px-3">
            <Image src={map} height="20" width="25" />
            <p className="px-3">
              12, avenue de la presse, Salongo, lemba, kinshasa{" "}
            </p>
          </div>

          <div className="d-flex px-3">
            <Image src={service} height="20" width="25" className="  " />
            <p className=" px-3">
              service: détartrage, plombage, extractions, prothèses
            </p>
          </div>
          <div className="d-flex px-3">
            <Image src={clock} height="20" width="25" className="  " />
            <p className=" px-3">ouvert de 8h00 à 16h00 du lundi à vendredi</p>
          </div>

          <div className="d-flex px-3">
            <Image src={phone} height="20" width="25" className="" />
            <p className="px-3">+243 82 20 28 987</p>
            
          </div>

          <div className="d-flex px-3 ">
            <Image src={mail} height="20" width="25" className="" />
            <p className="px-3">monaolgita@gmail.com</p>
          </div>

        </div>

        <div className={`col-lg-4 bg-light   ${style.respensivemarginLefRight}`}>
          <Image src={cabinet} height="" width="" className="" />
        </div>
      </div>
    </div>
  );
};

export default CardCabinet;
