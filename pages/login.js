import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import style from "./../styles/login.module.css";
import eye from "../assets/eye.svg";
import Image from "next/image";
import Button from "../components/button";
import axios from "axios";
import { useRouter } from "next/router";
import dasbord from "../assets/dasbord2.svg";
import NavBar from "../components/navBar/navBar";
import Link from "next/link";

const Eye = <Image src={eye} width="" height="" />;

const login = ({ email, passsword }) => {
  const router = useRouter();

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const verifyExistenceOfItemInArray = (item, data) => {
    return data.includes(item);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onSubmit" });

  const onSubmit = async (data) => {
    console.log("les information sur la connexion", data);
    try {
      const token = await (
        await axios.post(
          "https://mon-dentiste-ok.herokuapp.com/api/auth/signIn",
          data
        )
      ).data;
      console.log("les token", token.accessToken);
      console.log("les id", token.roles);

      localStorage.setItem("token", token.accessToken);
      localStorage.setItem("roles", token.roles);
      if (
        verifyExistenceOfItemInArray("dentiste", token.roles) &&
        verifyExistenceOfItemInArray("admin", token.roles)
      ) {
        router.push("/AdminPage");
      } else if (verifyExistenceOfItemInArray("admin", token.roles)) {
        router.push("/AdminPage");
      } else if (verifyExistenceOfItemInArray("dentiste", token.roles)) {
        router.push("/articles");
      } else if (verifyExistenceOfItemInArray("customer", token.roles)) {
        router.push("/AdminPage/rdv");
      }
    } catch (error) {
      console.log("erreur mauvais mot de passe :", error);
    }
  };
  return (
    <div className="d-flex col">
      {/* <NavBar /> */}
      <div
        className={`d-flex col-6 justify-content-center align-items-center ${style.login}`}
      >
        <form
          className={`col-lg-7 row g-5   ${style.respensivepadding}`}
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="h3 d-flex justify-content-center">Connexion</h1>

          <div className={`col-md-12 ${style.bordergreen}`}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={` py-2 col-12  ${style.bordernone} `}
              {...register("email", { required: true })}
            />{" "}
          </div>

          <div
            className={` d-flex justify-content-between ${style.bordergreen} `}
          >
            <input
              type={passwordShown ? "text" : "password"}
              name="password"
              placeholder="mot de passe"
              className={` py-2 ${style.bordernone}  col-10 `}
              {...register("password", { required: true })}
            />
            <i className="" onClick={togglePasswordVisiblity}>
              {Eye}
            </i>{" "}
          </div>

          <div className="mb-4 d-flex justify-content-around">
            <a href="#!">Mot de passe oublié?</a>

            <Link href="/inscription">
              <a>S'inscrire</a>
            </Link>
          </div>

          <div className="col-12 mt-5 d-flex justify-content-center">
            <Button text="Envoyer" />
          </div>
        </form>
      </div>
      <div className=" col-6 d-flex justify-content-center ">
        <Image
          src={dasbord}
          width=" 700 "
          height=""
          className="img-fluid"
          alt=""
        />
      </div>
    </div>
  );
};

export default login;
