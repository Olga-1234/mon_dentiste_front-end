import Image from "next/image";
import rdvdoctor from "../../../assets/rafiki.png";
import Button from "../../button";
import style from "./style.module.css";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchCabinet } from "../../../redux";
import { useEffect } from "react";
import config from "../../../config/index"

const CardAppointment = () => {
  const Cabinets = useSelector((state) => state.Cabinet.cabinets);
  const dispatch = useDispatch();
  useEffect(
    () => dispatch(fetchCabinet()),

    []
  );
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "onSubmit" });

  const onSubmit = async (data) => {
    console.log("les informat", { ...data });
    try {
      console.log(localStorage.getItem("token"));

      const response = await axios
        .post(
          `${config.api}/appointment`,
          // { ...data,picture: "fufutfut" },
          {
            headers: {
              "x-access-token": `${localStorage.getItem("token")}`,
            },
          }
        )
        .then((res) => {
          console.log("la reponse", res);
          return res;
        })
        .catch((err) => {
          console.log("erreur d'envoi ", err);
        });
    } catch (error) {
      console.log("try catch error : ", error);
    }
  };

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
          <form
            className={`col-lg-10 row g-4 ${style.respensivepadding}`}
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="h4 d-flex justify-content-center"> Formulaire</h1>

            <div className="col-md-12">
              <input
                type="text"
                className={`col-12 py-2 bg-light ${style.bordergreen}`}
                id="inputname"
                placeholder="Nom"
                name="name"
                {...register("name", { required: true })}
              />
            </div>
            <div className="col-md-12">
              <input
                type="email"
                className={`col-12 py-2 bg-light ${style.bordergreen}`}
                id="inputEmail4"
                placeholder="Email"
                name="email"
                {...register("email", { required: true })}
              />
            </div>

            <div className="col-12">
              <select
                id="inputState"
                className={`col-12 py-2 bg-light ${style.colorgrid} ${style.bordergreen}`}
                {...register("cabinetId", { required: true })}
                name="cabinetId"
              >
                <option selected>Nom du cabinet</option>
                {Cabinets.map((Cabinet) => (
                  <option
                    key={Cabinet.id}
                    value={Cabinet.id}
                    option={Cabinet.id}
                  >
                    {Cabinet.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-md-12">
              <input
                type="date"
                className={`col-12 py-2 bg-light ${style.colorgrid}  ${style.bordergreen}`}
                id="date"
                placeholder="date"
                name="date"
                {...register("date", { required: true })}
              />
            </div>
            <div className="col-md-12">
              <input
                type="time"
                className={`col-12 py-2 bg-light ${style.colorgrid}  ${style.bordergreen}`}
                id="time"
                placeholder="time"
                min="07:00"
                max="18:00"
                name="time"
                {...register("time", { required: true })}
              />
            </div>
            {/* <div className="col-12">
              <select
                id="inputStat"
                className={`col-12 py-2 bg-light ${style.colorgrid}  ${style.bordergreen}`}
              >
                <option selected>Heure</option>
                <option>...</option>
              </select>
            </div> */}
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
