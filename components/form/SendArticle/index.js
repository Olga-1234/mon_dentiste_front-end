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

const SendArticle = () => {
;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "onSubmit" });

  const onSubmit = async (data) => {
    console.log("les informat", { ...data, picture: "fufutfut" });
    try {
      console.log(localStorage.getItem("token"), "hfuehv -fehvhrg ");
      console.log(data.picture)
      const response = await axios
        .post(
          `${config.api}/article`,
          { ...data,picture: "fufutfut" },
          {
            headers: {
              "x-access-token": `${localStorage.getItem("token")}`,
            },
          }
        )
        .then((res) => {
          console.log("res", res);
          return res;
        })
        .catch((err) => {
          console.log("error in request ", err);
        });
    } catch (error) {
      console.log("try catch error : ", error);
    }
  };

  return (
      <form
        className={`col-lg-8 row pb-5 g-4 ${style.respensivepadding}`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="h4 d-flex justify-content-center">
          {" "}
          Formulaire Article{" "}
        </h1>

        <div className="col-md-12">
          <input
            type="text"
            className={`col-12 py-2 ${style.bordergreen}`}
            id="inputtitle"
            placeholder="Titre"
            name="title"
            {...register("title", { required: true })}
          />
        </div>
        <div className="col-md-12">
          <input
            type="text"
            className={`col-12 py-2 ${style.bordergreen}`}
            id="inputdescription"
            placeholder="Description"
            name="description"
            // ref={register({ required: "This is required." })}
            {...register("description", { required: true })}
          />
        </div>

        <div className="col-md-12">
          <input
            type="file"
            className={`col-12 py-2 ${style.colorgrid}  ${style.bordergreen}`}
            id="picture"
            placeholder="Photo"
            name="picture"
            {...register("picture", { required: false })}
          />
        </div>

        <div className="col-md-12">
          <input
            type="text"
            className={`col-12 py-2 ${style.colorgrid}  ${style.bordergreen}`}
            id="name"
            placeholder="Nom"
            name="Name"
            {...register("Name", { required: true })}
          />
        </div>
        <div className="col-12 d-flex justify-content-center">
          <Button text="Envoyer" />
        </div>
      </form>
  );
};

export default SendArticle;
