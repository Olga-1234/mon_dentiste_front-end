import Image from "next/image";
import enfantQuiBrosseDent from "../../../assets/enfantQuiBrosseDent.jpeg";

const CardArticle = () => {
  return (
    <div className="col-12 d-flex  pt-5 justify-content-center">
      <div className="col-9 border d-flex justify-content-center ">
    
          <Image src={enfantQuiBrosseDent} width="" height="" className="col" />
        
        <div className="col-lg-10 py-2 px-3">
          <h2>Carie</h2>
          <p className="pt-1">
            La carie dentaire est une maladie infectieuse. L'émail de la dent
            est le premier touché. Une cavité se forme dans la dent puis la
            carie se propage en profondeur. Si la carie n'est pas soignée, le
            trou s'agrandit et la carie peut atteindre la dentine (couche sous
            l'émail). Des douleurs commencent à se faire sentir, notamment avec
            le chaud, le froid ou le sucré. La carie peut gagner la pulpe de la
            dent. On parle alors de rage de dents. Enfin, un abcès dentaire peut
            apparaître lorsque les bactéries attaquent le ligament, l'os ou la
            gencive
          </p>
          <p className="pt-3 fw-bold">Dr. Blaise</p>
        </div>
      </div>
    </div>
  );
};

export default CardArticle;
