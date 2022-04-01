import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Button from "../components/button/Button";
import style from "../styles/inscription.module.css";
import eye from "../assets/eye.svg";
import Image from "next/image";
import { useForm } from "react-hook-form";
import axios from "axios";


const Eye = <Image src={eye} width="" height="" />;

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
        await axios.post("http://localhost:7000/api/auth/signUp", data)
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
      <form className={`col-lg-8 row g-4    ${style.respensivepadding}`}  onSubmit={handleSubmit(onSubmit)} >
        <h1 className="h2 d-flex justify-content-center">
          Formulaire d'inscription
        </h1>

        <div className="col-md-12">
          <div className={`d-flex justify-content-between  `}>
            <div className={`col-5 ${style.bordergreen} `}>
            <input
              type="text"
              className={` col-12 px-3 py-2  ${style.bordernone} `}
              id="inputname"
              placeholder="Nom"
              name="userName"
          ref={register({ required: "This is required." })}/>{" "}
</div>
<div className={`col-5 ${style.bordergreen} `}>

            <input
              type="text"
              className={` col-12 px-3 py-2 ${style.bordernone}`}
              id="inputname"
              placeholder="Prenom"
              name="userfirstName"
          ref={register({ required: "This is required." })}/>{" "}
</div>
            
          </div>
        </div>
      <div className="d-flex col-md-12 justify-content-between">

      <div className={`col-5 ${style.bordergreen} `}>
          <input
            type="email"
            className={` col-12 px-3 py-2 ${style.bordernone}`}
            id="inputEmail4"
            placeholder="Email"
            name="email"
            ref={register({ required: "This is required." })}/>{" "}
          
        </div>
        <div className={`col-md-5 d-flex ${style.bordergreen}`}>
          <input
   type={passwordShown ? "text" : "password"}
            
            className={` px-3 col-11 py-2 ${style.bordernone}`}
            id="inputEmail4"
            placeholder="Mot de passe"
            name="password"
            ref={register({ required: "This is required." })}/>{" "}
             <i className="d-flex align-items-center" onClick={togglePasswordVisiblity}>
            {Eye}
          </i>{" "}
          
        </div>
      </div>

       <div className="d-flex col-md-12 justify-content-between">

       <div className={`col-md-5 d-flex ${style.bordergreen}`}>
          <input
            type="address"
            className={` col-12 px-3 py-2 ${style.bordernone}`}
            id="inputEmail4"
            placeholder="Adresse"
            name="address"
            ref={register({ required: "This is required." })}/>{" "}
          
        </div>
        <div className={`col-md-5 ${style.bordergreen}`}>
          <input
            type="tel"
            className={`col-12 px-3 py-2 ${style.bordernone}`}
            id="inputEmail4"
            placeholder="Téléphone"
            name="tel"
            ref={register({ required: "This is required." })}/>{" "}
          
        </div>
       </div>
<div className={` d-flex justify-content-between `}>
          <div className={`col-md-5  ${style.bordergreen} `}>
          <input
            type="date"
            className={` px-3 col-md-12 py-2 ${style.colorgrid}  ${style.bordernone}`}
            id="date"
            placeholder="Date"
            name="birthdate"
            ref={register({ required: "This is required." })}/>{" "}
          
          </div>
          <div className={`col-md-5  ${style.bordergreen} `}>
    
              <select
                id="inputStat"
                name="sexe"
                ref={register({ required: "This is required." })}
                className={`col-12 px-3 py-2 ${style.colorgrid} ${style.bglight}  ${style.bordernone}`}
              >
                <option selected>Genre</option>
                <option value="homme">Homme</option>
                <option value="femme">Femme</option>

              </select>{" "}     
              </div> 
</div>
        <div class="col-12 mt-5  d-flex justify-content-center">
          <Button  text="Valider" />
        </div>
      </form>
    </div>
    </div>
  );
};

export default inscription;
