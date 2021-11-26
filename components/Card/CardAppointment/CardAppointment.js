import Image from "next/image";
import rdvdoctor from "../../../assets/rdvdoctor.png"
import Button from "../../button/Button";
import style from "./CardAppointment.module.css"


const CardAppointment=()=> {
    return (
        <div className="py-2  pb-5">
            <div className="d-flex justify-content-center   ">
            <div className={`col-lg-2 pt-5`}>
                <Image src={rdvdoctor} height="" width="" />
            </div>
            </div>

<div className="pt-2 d-flex justify-content-center">
            <div className={`col-lg-8 py-4 ${style.boxshadow} d-flex justify-content-center`}>
            <form className={`col-lg-8 row g-3 ${style.respensivepadding}`}>
               <h1 className="h4 d-flex justify-content-center"> Formulaire</h1> 

  <div className="col-md-12">

    <input type="text" className={`col-12 py-2 ${style.bordergreen}`}  id="inputname" placeholder="Nom"/>

  </div>
  <div className="col-md-12">
  <input type="email" className={`col-12 py-2 ${style.bordergreen}`} id="inputEmail4"  placeholder="Email" />

  </div>

  <div className="col-12">

    <select id="inputState" className={`col-12 py-2 ${style.colorgrid} ${style.bordergreen}`}>
      <option selected>Nom du cabinet</option>
      <option>...</option>
    </select>

  </div>

  <div className="col-12">
    
  <select id="inputState" className={`col-12 py-2 ${style.colorgrid}  ${style.bordergreen}`}>
      <option selected>Service</option>
      <option>...</option>
    </select>
  </div>
  <div className="col-md-12">
  <input type="date" className={`col-12 py-2 ${style.colorgrid}  ${style.bordergreen}`} id="date"  placeholder="date" />

  </div>

  
  <div class="col-12 d-flex justify-content-center">
    <Button text="Envoyer"/>
  </div>
</form>


            </div>
            </div>
        </div>
    )
}

export default CardAppointment
