/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Button from "../components/button";
import style from "../styles/inscription.module.css";
import eye from "../assets/eye.svg";
import Image from "next/image";
import { useForm } from "react-hook-form";
import axios from "axios";
import config from "../config/index"


const Eye = <Image src={eye} alt="l'oeil" width="" height="" />;

const inscription = () => {
    const router = useRouter()
  

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const { register, handleSubmit, formState: {errors} } = useForm({ mode: "onSubmit" });
  const onSubmit = async (data) => {
    console.log("les information sur la connexion", data);
    try {
      const msg = await (
        await axios.post(`${config.api}/auth/signUp`, data)
      ).data;
      console.log("le message", msg.message);
      
      console.log("les information du login", data);

        if (msg) {
          router.push('/')
        }
    

    } catch (error) {
      console.log("erreur mauvais mot de passe :", error);
    }
}
  return (
      <div className={`py-5   d-flex align-items-center `}>
    <div className="d-flex py-5 justify-content-center ">
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
            type="password"
            className={`col-12 py-2 ${style.colorgrid}  ${style.bordergreen}`}
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

export default inscription;
