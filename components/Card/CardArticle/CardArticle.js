import Image from "next/image";
import Child from "../../../assets/enfantQuiBrosseDent.jpeg";
import style from "./CardArticle.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticle } from "../../../redux";
import { useEffect } from "react";

const CardArticle = () => {
  const Articles = useSelector((state) => state.Article.articles);
  const dispatch = useDispatch();

  useEffect(
    () => dispatch(fetchArticle()),

    []
  );

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3">
      {Articles.map((Article) => (
        <div
          key={Article.id}
          className={` d-flex  pt-5 justify-content-center`}
        >
          <div
            className={`col-lg-9 border d-flex justify-content-center ${style.respensive}`}
          >
            <Image
              src={Child}
              width=""
              height=""
              className={`col-lg-4  img-fluid py-xs-4`}
            />

            <div className="col-lg-8 py-2 px-3">
              <h2>{Article.title}</h2>
              <p className="pt-1">{Article.description}</p>
              <p className="pt-3 fw-bold"></p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardArticle;
