import Image from "next/image";
import style from "./style.module.css";
import carousel from "../../../assets/dasbord2.svg";
import carousel2 from "../../../assets/bro.png";
import carousel3 from "../../../assets/bro2.png";
import Button from "../../button/Button";
import Link from "next/link";

const Carousel = ({ className }) => {
  return (
    <div className={` ${className} d-flex col-12    ${style.respensive}`}>
      {/* <section
        className={`col-6 ${style.respensiveCard1} ${style.bgImageSection} d-flex align-items-center justify-content-center`}
      >
        <div className={`py-4  text-center ${style.openSans}`}>
          <header>
          <h1 className={` fw-bold  ${style.color} display-3 py-lg-5`}>
            Trouvez un Cabinet <br/> Dentaire
          </h1>

          </header>
          
          <div className="d-flex py-3 justify-content-center">

          <Link href="/prendre_rendez_vous"><a className="text-decoration-none"><Button text="Prendre rendez-vous" /></a>
              
              </Link>
          </div>
        </div>
      </section> */}

      <section className={`  col-12 ${style.respensiveCard2}`}>
        <div
          id="carouselExampleInterval"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active " data-bs-interval="10000">
              <div className=" d-flex justify-content-center">
                <Image
                  className="d-flex img-fluid "
                  src={carousel}
                  height=""
                  width=""
                />
                      <div className="position-relative  ">
                  <div className={`position-absolute top-50 ${style.width} start-50 f`}>
                    <Link href="/prendre_rendez_vous">
                      <a className="text-decoration-none ">
                        <Button text="Prendre rendez-vous" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <div className=" d-flex  justify-content-center">
                <Image
                  className="d-flex img-fluid"
                  src={carousel2}
                  height=""
                  width=""
                />
                <div className="position-relative  ">
                  <div className={`position-absolute top-50 ${style.width} start-50 f`}>
                    <Link href="/prendre_rendez_vous">
                      <a className="text-decoration-none ">
                        <Button text="Prendre rendez-vous" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div className=" d-flex justify-content-center">
                <Image
                  className="d-flex img-fluid"
                  src={carousel3}
                  height=""
                  width=""
                />
      <div className="position-relative  ">
                  <div className={`position-absolute top-50 ${style.width} start-50 f`}>
                    <Link href="/prendre_rendez_vous">
                      <a className="text-decoration-none ">
                        <Button text="Prendre rendez-vous" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Carousel;
