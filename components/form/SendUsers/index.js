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
import Layout from "../../../layout/layoutSideBar"
import config from "../../../config/index"

const SendUsers = () => {
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
        .post(`${config.api}/article`, data, {
          headers: {
            "x-access-token": `${localStorage.getItem("token")}`,
          },
        })
        .data.then((res) => {
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
<h1 className="h4 d-flex border justify-content-center"> Formulaire D'enregistrements des utilisateurs</h1>

<div className="col-12 d-flex justify-content-center py-5">
      <form
        className={`col-lg-8 row g-4  ${style.respensivepadding}`}
        onSubmit={handleSubmit(onSubmit)}
      >

        <div className="col-md-12">
          <input
            type="text"
            className={`col-12 py-2 ${style.bordergreen}`}
            id="inputuserName"
            placeholder="Nom"
            name="userName"
            {...register("userName", { required: true })}
          />
        </div>
        <div className="col-md-12">
          <input
            type="text"
            className={`col-12 py-2 ${style.bordergreen}`}
            id="inputuserfirstName"
            placeholder="Prenom"
            name="userfirstName"
            // ref={register({ required: "This is required." })}
            {...register("userfirstName", { required: true })}
          />
        </div>
        <div className="col-md-12">
          <input
            type="email"
            className={`col-12 py-2 ${style.colorgrid}  ${style.bordergreen}`}
            id="email"
            placeholder="email"
            name="email"
            {...register("email", { required: true })}
          />
        </div>

        <div className="col-md-12">
          <input
            type="text"
            className={`col-12 py-2 ${style.colorgrid}  ${style.bordergreen}`}
            id="inputaddress"
            placeholder="Adresse"
            name="address"
            {...register("address", { required: false })}
          />
        </div>

        <div className="col-md-12">
          <input
            type="text"
            className={`col-12 py-2 ${style.colorgrid}  ${style.bordergreen}`}
            id="sexe"
            placeholder="sexe"
            name="sexe"
            {...register("sexe", { required: true })}
          />
        </div>
        <div className="col-md-12">
          <input
            type="date"
            className={`col-12 py-2 ${style.colorgrid}  ${style.bordergreen}`}
            id="birthdate"
            placeholder="Date de Naissance"
            name="birthdate"
            {...register("birthdate", { required: true })}
          />
        </div>
        <div className="col-md-12">
          <input
            type="number"
            className={`col-12 py-2 ${style.colorgrid}  ${style.bordergreen}`}
            id="tel"
            placeholder="Téléphone"
            name="tel"
            {...register("tel", { required: true })}
          />
        </div>
        <div className="col-md-12">
          <input
            type="text"
            className={`col-12 py-2 ${style.colorgrid}  ${style.bordergreen}`}
            id="cabinets"
            placeholder="cabinets"
            name="cabinets"
            {...register("cabinets", { required: true })}
          />
        </div>
        <div className="col-md-12">
          <input
            type="text"
            className={`col-12 py-2 ${style.colorgrid}  ${style.bordergreen}`}
            id="role"
            placeholder="role"
            name="roles"
            {...register("roles", { required: true })}
          />
        </div>
        
        <div className="col-md-12">
          <input
            type="password"
            className={`col-12 py-2 ${style.colorgrid}  ${style.bordergreen}`}
            id="password"
            placeholder="mot de passe"
            name="password"
            {...register("password", { required: true })}
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

export default SendUsers;
