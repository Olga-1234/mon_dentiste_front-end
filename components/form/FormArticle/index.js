import React from "react";
import Button from "../../button/Button";
import style from "./style.module.css";

const Admin = () => {
  return (
    <div>
      <form className={`col-lg-8 row g-4 ${style.respensivepadding}`}>
        <h1 className="h4 d-flex justify-content-center"> Formulaire</h1>

        <div className="col-md-12">
          <input
            type="text"
            className={`col-12 py-2 ${style.bordergreen}`}
            id="inputtitle"
            placeholder="Titre"
            name="title"
          />
        </div>
        <div className="col-md-12">
          <input
            type="text"
            className={`col-12 py-2 ${style.bordergreen}`}
            id="inputdescription"
            placeholder="Description"
            name="description"

          />
        </div>

        <div className="col-md-12">
          <input
            type="file"
            className={`col-12 py-2 ${style.colorgrid}  ${style.bordergreen}`}
            id="picture"
            placeholder="Photo"
            name="picture"

          />
        </div>

        <div className="col-md-12">
          <input
            type="text"
            className={`col-12 py-2 ${style.colorgrid}  ${style.bordergreen}`}
            id="name"
            placeholder="Nom"
            name="Name"

          />
        </div>
        <div class="col-12 d-flex justify-content-center">
          <Button text="Envoyer" />
        </div>
      </form>
    </div>
  );
};

export default Admin;
