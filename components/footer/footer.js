import Image from "next/image";
import twitter from "../../assets/tweeter.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png"
import style from "./footer.module.css"

const Footer = () => {
  return (
    <footer className={`${style.height}  `} >
      <div className={`${style.cardWidth} pt-5 d-flex justify-content-around`}>
        <div className="lg-mx-5">
          <p className={`h4 ${style.montserat}`}>Contacts</p>
          <div className="pt-5">
            <p>+243 82 20 28 987</p>
            <p>Monaolgita@gmail.com</p>
          </div>
        </div>
        <div className="">
            <p className={`h4 ${style.montserat}`}>Reseau Sociaux</p>
            <div className="d-flex pt-5">
                <Image height="40" width="40" src={instagram} className=""/>
                
                <Image height="40" width="40" src={linkedin} className=""/>

                
            </div>
        </div>
      </div>

      <div className={` ${style.bgGreen} text-light h5 d-flex justify-content-center align-items-center`}>
      Copyright©2021 Mon Dent<span className={style.colorgreen}>+</span>ste  
      </div>
    </footer>
  );
};

export default Footer;
