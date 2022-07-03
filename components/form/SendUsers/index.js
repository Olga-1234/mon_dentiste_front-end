/* eslint-disable react/no-unescaped-entities */
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
  const validationSchema = yup.object().shape({
    title: yup.string()
        .required('Title is required'),
        userName: yup.string()
        .required('First Name is required'),
    lastName: yup.string()
        .required('Last name is required'),
    dob: yup.string()
        .required('Date of Birth is required')
        .matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/, 'Date of Birth must be a valid date in the format YYYY-MM-DD'),
    email: yup.string()
        .required('Email is required')
        .email('Email is invalid'),
    password: yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    acceptTerms: yup.bool()
        .oneOf([true], 'Accept Ts & Cs is required')
});
const formOptions = { resolver: yupResolver(validationSchema) };


  // const {
  //   register,
  //   formState: { errors },
  //   handleSubmit,
  // } = useForm({ mode: "onSubmit" });

  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

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
    

<div className=" col-12 ">
<h1 className="h4 d-flex  justify-content-center"> Formulaire D'enregistrements des utilisateurs</h1>
<div className=" d-flex justify-content-center py-5">
      <form
        className={`col-lg-8 row g-4  ${style.respensivepadding}`}
        onSubmit={handleSubmit(onSubmit)}
      >
  
        <div className=" form-group col-md-12">
          <input
            type="text"
            className={`col-12 py-2 bg-light form-control ${errors.userName ? 'is-invalid' : ''} ${style.bordergreen}`}
            id="inputuserName"
            placeholder="Nom"
            name="userName"
            {...register("userName", { required: true })}
          />
          <div className="invalid-feedback">{errors.userName?.message}</div>
        </div>
        <div className="col-md-12">
          <input
            type="text"
            className={`col-12 py-2 bg-light ${style.bordergreen}`}
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
            className={`col-12 py-2 bg-light ${style.bordergreen}`}
            id="email"
            placeholder="email"
            name="email"
            {...register("email", { required: true })}
          />

        </div>

        <div className="col-md-12">
          <input
            type="text"
            className={`col-12 py-2 bg-light ${style.bordergreen}`}
            id="inputaddress"
            placeholder="Adresse"
            name="address"
            {...register("address", { required: false })}
          />
        </div>

        <div className="col-md-12">
          <input
            type="text"
            className={`col-12 py-2 bg-light ${style.bordergreen}`}
            id="sexe"
            placeholder="sexe"
            name="sexe"
            {...register("sexe", { required: true })}
          />
        </div>
        <div className="col-md-12">
          <input
            type="date"
            className={`col-12 py-2 bg-light ${style.bordergreen}`}
            id="birthdate"
            placeholder="Date de Naissance"
            name="birthdate"
            {...register("birthdate", { required: true })}
          />
        </div>
        <div className="col-md-12">
          <input
            type="number"
            className={`col-12 py-2 bg-light ${style.bordergreen}`}
            id="tel"
            placeholder="Téléphone"
            name="tel"
            {...register("tel", { required: true })}
          />
        </div>
        <div className="col-md-12">
          <input
            type="text"
            className={`col-12 py-2 bg-light ${style.bordergreen}`}
            id="cabinets"
            placeholder="cabinets"
            name="cabinets"
            {...register("cabinets", { required: true })}
          />
        </div>
        <div className="col-md-12">
          <input
            type="text"
            className={`col-12 py-2 bg-light ${style.bordergreen}`}
            id="role"
            placeholder="role"
            name="roles"
            {...register("roles", { required: true })}
          />
        </div>
        
        <div className="col-md-12">
          <input
            type="password"
            className={`col-12 py-2 bg-light ${style.bordergreen}`}
            id="password"
            placeholder="mot de passe"
            name="password"
            {...register("password", { required: true })}
          />
        </div>
        

        <div className="col-12 d-flex justify-content-center">
          <Button text="Envoyer" />
        </div>
      </form>
      </div>
      </div>
  );
};

export default SendUsers;
