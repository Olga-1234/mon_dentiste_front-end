import { useDispatch, useSelector } from "react-redux";
import { fetchArticle } from "../../redux";
import { useEffect } from "react";

const TableArticles = () => {
  const Articles = useSelector((state) => state.Article.articles);
  const dispatch = useDispatch();
  console.log('les articles', Articles.title)


  useEffect(
    () => dispatch(fetchArticle()),

    []
  );
  return (
    <div className="col-10">
      <table className="table table-success  table-striped">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Titre</th>
            <th scope="col">Description</th>
            <th scope="col">Auteur</th>
          </tr>
        </thead>

        <tbody>
          {Articles.map((Article, index) => (
            <tr key={Article.id}>
              <th scope="row">{index + 1}</th>
              <td>{Article.title}</td>
              <td>{Article.description}</td>
              <td>{Article.Name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableArticles;
