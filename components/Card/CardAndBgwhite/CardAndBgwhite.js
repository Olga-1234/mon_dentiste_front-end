import Image from "next/image";
import style from "./CardAndBgwhite.module.css";
import doctors from "../../../assets/doctors.png";
import dents from "../../../assets/dents.jpeg";
import curedent from "../../../assets/curedent.jpeg"
import deuxdents from "../../../assets/deuxdents.jpeg"
import Button from "../../button/Button";

const CardAndBgWhite = () => {
  return (
    <div className={` col-12 ${style.bgImage} `}>
      <div className= {`d-flex ${style.respensive} `}>
        <div className={`col-6 col-md-6 col-sm-5 col-xs-6   d-flex  justify-content-center ${style.respensiveCard1}`}>
          <div className={`pt-4 pr-4 ${style.openSans}`}>
            <div className={`lg-py-5  justify-content-center `}>
              <h2 className={`fw-bold py-5  text-center ${style.colorgreen} ${style.montserat}`}>
                Nous vous mettons en contact
              </h2>

              <div className=" ">
                <p className={`px-5 col-12`}>
                  nous mettons en contact avec les meilleurs dentistes du Congo
                  Nous vous mettons en contact avec les meilleurs dentistes du
                  Congo Nous vous mettons en contact avec les meilleurs
                  dentistes du Congo Nous vous mettons en contact avec les
                  meilleurs dentistes du Congo Nous vous mettons en contact avec
                  les meilleurs dentistes du Congo Nous vous mettons en contact
                  avec les meilleurs dentistes
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={`${style.respensiveCard2} col-6 col-md-6 col-sm-5 col-xs-6 d-flex align-items-start d-flex justify-content-center`}>
          <div className="py-5">
            <Image className=" d-flex " src={doctors} height="" width="" />
          </div>
        </div>
      </div>

      <div>
        <h2 className={` ${style.montserat} fw-bold d-flex justify-content-center py-5`}>Les services</h2>


        <div className={`d-flex  ${style.respensive} justify-content-center`}>
          <div className={` border  mx-4 pt-4 col-lg-2 col-md-2   ${style.boxshadow}`}>
              
              <div className="d-flex  justify-content-center ">
                  <div className={` ${style.cardheightAndWidth2}`}>
            <Image className={`d-flex  ${style.cardheightAndWidth2} `} src={dents} height="600" width="600" />
                      
            </div>
              </div>
    
                <div>         
            <p className={` ${style.colorgreen} d-flex justify-content-center`}>Pour blanchir vos dents</p>
            <p className="mx-2">bla bla bla  bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
            </p>
            </div>
          </div>
          <div className={` border mx-4  pt-4  col-lg-2 col-md-2 ${style.respensivemargin} ${style.boxshadow}`}>
              
              <div className="d-flex  justify-content-center ">
                  <div className={`  ${style.cardheightAndWidth2}`}>
            <Image className={`d-flex  ${style.cardheightAndWidth2} `} src={curedent} height="600" width="600" />
                      
            </div>
              </div>
    
                <div>         
            <p className={` ${style.colorgreen} d-flex justify-content-center`}>Pour blanchir vos dents</p>
            <p className="mx-2">bla bla bla  bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
            </p>
            </div>
          </div>
          <div className={` border mx-4  pt-4 col-lg-2 col-md-2 ${style.respensivemargin} ${style.boxshadow} `}>
              
              <div className="d-flex  justify-content-center ">
                  <div className={`${style.cardheightAndWidth2}`}>
            <Image className={`d-flex  ${style.cardheightAndWidth2} `} src={deuxdents} height="600" width="600" />
                      
            </div>
              </div>
    
                <div>         
            <p className={` ${style.colorgreen} d-flex justify-content-center`}>Pour blanchir vos dents</p>
            <p className="mx-2">bla bla bla  bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
            </p>
            </div>
          </div>


          <div>
          
          </div>
        </div>

<div className="d-flex justify-content-center py-5">
<Button text="Voir plus "/>

</div>

      </div>
    </div>
  );
};

export default CardAndBgWhite;
