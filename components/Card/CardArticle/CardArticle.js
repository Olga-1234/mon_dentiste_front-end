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
    <div>
      {Articles.map((Article) => (
        <div
          key={Article.id}
          className={`col-12 d-flex  pt-5 justify-content-center`}
        >
          <div
            className={`col-lg-9 border d-flex justify-content-center ${style.respensive}`}
          >
            <Image
              src={Child}
              width="100"
              height="100"
              className={`col-lg-2  border border-danger img-fluid py-xs-4`}
            />

            <div className="col-lg-10 py-2 px-3">
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
