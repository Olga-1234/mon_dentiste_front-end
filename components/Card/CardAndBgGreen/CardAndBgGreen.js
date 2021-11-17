import Image from "next/image"
import style from "./CardAndBgGreen.module.css"
import doctor from "../../../assets/doctorAndChild.png"
import Button from "../../button/Button"


const CardAndBg=()=> {
    return (
        <div className={` d-flex col-12 ${style.bgImage}`}>

            <div className="col-6 col-md-6 col-sm-5 col-xs-6  d-flex align-items-center justify-content-center">
            <div className={`py-5  text-center ${style.openSans}`}>
                <p className="h1 text-light fw-bold py-4">TROUVEZ UN CABINET <br/> DENTAIRE</p>
                <p className="text-light h2 fw-bold py-2">Y prendre rendez-vous sans se <br/> deplacer</p>
                <div className="d-flex justify-content-center">
                <Button text="Prendre rendez-vous"/>
                </div>

                        </div>


            </div>

            <div className="col-6 col-md-6 col-sm-5 col-xs-6 d-flex align-items-center d-flex justify-content-center">
                <div className="">
                <Image className=" d-flex" src={doctor} height="" width=""/>
                </div>
            </div>
            
        </div>
    )
}

export default CardAndBg
