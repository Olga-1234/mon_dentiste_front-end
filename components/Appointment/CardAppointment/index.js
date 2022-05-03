import Image from "next/image";
import rdvdoctor from "../../../assets/rafiki.png";
import Button from "../../button";
import style from "./style.module.css";

const CardAppointment = () => {
  return (
    <div className="py-2 d-flex col-12 container pb-5">
      <div className="d-flex justify-content-center col-5  ">
        <div className={`  pt-5`}>
          <Image src={rdvdoctor} height="" width="" />
        </div>
      </div>

      <div className="pt-2 d-flex col-7 justify-content-center">
        <div
          className={` py-4 ${style.boxshadow} d-flex justify-content-center`}
        >
          <form className={`col-lg-10 row g-4 ${style.respensivepadding}`}>
            <h1 className="h4 d-flex justify-content-center"> Formulaire</h1>

            <div className="col-md-12">
              <input
                type="text"
                className={`col-12 py-2 bg-light ${style.bordergreen}`}
                id="inputname"
                placeholder="Nom"
              />
            </div>
            <div className="col-md-12">
              <input
                type="email"
                className={`col-12 py-2 bg-light ${style.bordergreen}`}
                id="inputEmail4"
                placeholder="Email"
              />
            </div>

            <div className="col-12">
              <select
                id="inputState"
                className={`col-12 py-2 bg-light ${style.colorgrid} ${style.bordergreen}`}
              >
                <option selected>Nom du cabinet</option>
                <option>...</option>
              </select>
            </div>

            <div className="col-12">
              <select
                id="inputStat"
                className={`col-12 py-2 bg-light ${style.colorgrid}  ${style.bordergreen}`}
              >
                <option selected>Service</option>
                <option>...</option>
              </select>
            </div>
            <div className="col-md-12">
              <input
                type="date"
                className={`col-12 py-2 bg-light ${style.colorgrid}  ${style.bordergreen}`}
                id="date"
                placeholder="date"
              />
            </div>
            <div class="col-12 d-flex justify-content-center">
              <Button text="Envoyer" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CardAppointment;
