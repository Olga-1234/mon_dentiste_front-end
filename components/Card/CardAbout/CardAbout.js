import cuate from "../../../assets/cuate.png";
import Image from "next/image";
import Title from "../../title/title";
import About from "../../../assets/About.svg";

const CardAbout = () => {
  return (
    <div>
      <div className="pt-3  pb-5">
        <div className="d-flex px-5 justify-content-end">
          <div className={`col-2 pt-5`}>
            <Image src={cuate} height="" width="" />
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <Title text="A propos de nous" />
      </div>
      <div className="d-flex justify-content-center border">
        <div>
          <Image src={About} height="200" width="200" />
        </div>
        <div>
          <p>
            Nous vous mettons en contact avec les meilleurs cabinets dentaire,
            et cela vous permet de prendre rendez-vous sans vous deplacer
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardAbout;
