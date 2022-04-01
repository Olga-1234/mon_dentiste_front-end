import CardService from "../../Card/Service"
import style from "./style.module.css";
const Services = () => {
  return (
<div>
  <h2 className=" container  fw-bold">Services</h2>
<div className="container flex-wrap pt-5  pb-4 justify-content-between d-flex">
<div className="col-12 col-sm-3 px-2">
<CardService texte={"soins dentaire"} bg={style.bg1} outils={" bi bi-tools"} />
  </div>  
  <div className="col-12 col-sm-3 px-2">
  <CardService texte={"lavage "} bg={style.bg4} outils={ "bi bi-hammer"}/>
  </div>
  <div className="col-12 col-sm-3 px-2">
  <CardService texte={"lavage "} bg={style.bg3} outils={ "bi bi-eyedropper"}/>
  </div>
  <div className="col-12 col-sm-3 px-2">
  <CardService texte={"lavage "} bg={style.bg5} outils={ "bi bi-tsunami"}/>
  </div>
    </div>
</div>
  );
};

export default Services;
