import style from "./style.module.css";
const Services = ({texte, bg, outils}) => {
  return (
    <div>

      <div className={`  py-5  ${bg} `}>
        <h2 className=" text-center ">{texte}</h2>
        <p className="py-3 text-center">
          <i className={outils} style={{ fontSize: 50 }}></i>
        </p>
      </div>
    </div>
  );
};

export default Services;
