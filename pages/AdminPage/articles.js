import Form from "../../components/form/SendArticle";
import Layout from "../../layout/layoutSideBar";
import TableArticles from "../../components/Table/tableArticles";

const Articles = () => {
  return (
    <Layout titre={"Articles"}>
      <div className="d-flex row justify-content-center">
        <Form />
        <TableArticles />
      </div>
    </Layout>
  );
};

export default Articles;
