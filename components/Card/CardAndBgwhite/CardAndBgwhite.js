import Image from "next/image"
import style from "./CardAndBgwhite.module.css"
import doctors from "../../../assets/doctors.png"
import Button from "../../button/Button"


const CardAndBgWhite=()=> {
    return (
        <div className={` d-flex col-12 ${style.bgImage}`}>

            <div className="col-6 col-md-6 col-sm-5 col-xs-6  d-flex align-items-center justify-content-center">
            <div className={`py-5  text-center ${style.openSans}`}>
                <div className="d-flex justify-content-center">
                </div>

                        </div>


            </div>

            <div className="col-6 col-md-6 col-sm-5 col-xs-6 border d-flex align-items-start d-flex justify-content-center">
                <div className="py-5">
                <Image className=" d-flex" src={doctors} height="" width=""/>
                </div>
            </div>
            
        </div>
    )
}

export default CardAndBgWhite;
