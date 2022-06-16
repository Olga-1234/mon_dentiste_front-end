import React from "react";
import Button from "../../button";
import style from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import * as yup from "yup";
import { useRouter } from "next/router";
import axios from "axios";
 import config from "../../../config/index"

const SendCabinet = () => {
  // const schema = yup
  //   .object()
  //   .shape({
  //     name: yup.string().required("name is required"),
  //     title: yup.string().required("Title is required"),
  //     picture: yup.string(),
  //     description: yup.string().required("description is required"),
  //   })
  //   .required();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "onSubmit" });

  const onSubmit = async (data) => {
    console.log("les informat", data);
    try {
      console.log(localStorage.getItem("token"), "hfuehv -fehvhrg ");
      const response = await axios
        .post(`${config.api}/cabinet`, {...data}, {
          headers: {
            "x-access-token": `${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          console.log("res", res.data);
        })
        .catch((err) => {
          console.log("error in request", err);
        });
    } catch (error) {
      console.log("llele", error);
    }
  };

  return (
    

<div className="col-12">
<h1 className="h4 d-flex border justify-content-center"> Formulaire D'enregistrements des Cabinets</h1>

<div className="col-12 d-flex justify-content-center py-5">
      <form
        className={`col-lg-8 row g-4  ${style.respensivepadding}`}
        onSubmit={handleSubmit(onSubmit)}
      >

        <div className="col-md-12">
          <input
            type="text"
            className={`col-12 py-2 ${style.bordergreen}`}
            id="inputname"
            placeholder="Nom"
            name="name"
            {...register("name", { required: true })}
          />
        </div>
        <div className="col-md-12">
          <input
            type="email"
            className={`col-12 py-2 ${style.bordergreen}`}
            id="inputemail"
            placeholder="Email"
            name="email"
            // ref={register({ required: "This is required." })}
            {...register("email", { required: true })}
          />
        </div>
        <div className="col-md-12">
          <input
            type="textT"
            className={`col-12 py-2 ${style.colorgrid}  ${style.bordergreen}`}
            id="openTime"
            placeholder="heure d'ouverture"
            name="openTime"
            {...register("openTime", { required: true })}
          />
        </div>

        <div className="col-md-12">
          <input
            type="text"
            className={`col-12 py-2 ${style.colorgrid}  ${style.bordergreen}`}
            id="closureTime"
            placeholder="Heure de fermeture"
            name="closureTime"
            {...register("closureTime", { required: false })}
          />
        </div>

        <div className="col-md-12">
          <input
            type="text"
            className={`col-12 py-2 ${style.colorgrid}  ${style.bordergreen}`}
            id="phone"
            placeholder="Téléphone"
            name="phone"
            {...register("phone", { required: true })}
          />
        </div>
        <div className="col-md-12">
          <input
            type="text"
            className={`col-12 py-2 ${style.colorgrid}  ${style.bordergreen}`}
            id="city"
            placeholder="Ville"
            name="city"
            {...register("city", { required: true })}
          />
        </div>
        <div className="col-md-12">
          <input
            type="text"
            className={`col-12 py-2 ${style.colorgrid}  ${style.bordergreen}`}
            id="address"
            placeholder="Adresse"
            name="address"
            {...register("address", { required: true })}
          />
        </div>
        <div className="col-md-12">
          <input
            type="text"
            className={`col-12 py-2 ${style.colorgrid}  ${style.bordergreen}`}
            id="service"
            placeholder="Services"
            name="service"
            {...register("service", { required: true })}
          />
        </div>

 


        <div className="col-md-12">
          <textarea
            type="text"
            className={`col-12 py-2 ${style.colorgrid}  ${style.bordergreen}`}
            id="Description"
            placeholder="Description"
            name="Description"
            {...register("Description", { required: true })}
          />
        </div>

        <div class="col-12 d-flex justify-content-center">
          <Button text="Envoyer" />
        </div>
      </form>
      </div>
      </div>
  );
};

export default SendCabinet;
