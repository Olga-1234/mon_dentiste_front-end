
import style from "./CardAndBgGreentext.module.css"


const CardAndBgGreentext=()=> {
    return (
        <div className={`col-12 py-4 ${style.bgImage} `}>   
            <div className={`d-flex    ${style.montserat}  justify-content-center`}> 
                <h2 className="fw-bold">Conseils</h2>
            </div>
            
        <div className={` d-flex ${style.respensive}`}>

            <div className=" col-lg-6 col-md-6 col-sm-12 col-xs-12  d-flex align-items-center justify-content-center">
            <div className={` ${style.openSans}`}>
               <div className="px-lg-5">
                   <h3 className="h5 fw-bold py-2  px-5">Comment bien prendre soin de ses dents? </h3>

<p className={`px-lg-5 ${style.respensivepading}`}>Brossage des dents 2 à 3 fois par jour après les repas. Le brossage des dents est indispensable pour éviter la carie, le tartre et conserver des dents en bonne santé.
Vous pouvez utiliser une brosse à dents souple et un dentifrice au fluor.
Pour être efficace, le brossage doit s'effectuer avec méthode, idéalement après chaque repas, et durer deux à trois minutes. Il faut brosser toutes les surfaces de dents: à l'intérieur, à l'extérieur, au-dessus et au-dessous.

méthode de brossage</p>

</div>
                </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex align-items-center d-flex justify-content-center">
                <div className={` text ${style.openSans}`}>
                <div className="px-lg-5">
                   <h3 className="h5 fw-bold py-2 px-5">Comment bien prendre soin de ses dents? </h3>

<p className={`px-lg-5 ${style.respensivepading}`}>Brossage des dents 2 à 3 fois par jour après les repas. Le brossage des dents est indispensable pour éviter la carie, le tartre et conserver des dents en bonne santé.
Vous pouvez utiliser une brosse à dents souple et un dentifrice au fluor.
Pour être efficace, le brossage doit s'effectuer avec méthode, idéalement après chaque repas, et durer deux à trois minutes. Il faut brosser toutes les surfaces de dents: à l'intérieur, à l'extérieur, au-dessus et au-dessous.

méthode de brossage</p>

</div>
                </div>
            </div>
            
        </div>
        </div>

    )
}

export default CardAndBgGreentext
