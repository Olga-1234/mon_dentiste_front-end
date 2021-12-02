import Head from "next/head";
import CardArticle from "../components/Card/CardArticle/CardArticle";
import Footer from "../components/footer/footer";
import NavBar from "../components/navBar/navBar";
import Title from "../components/title/title";
const articles = () => {
  return (
    <div>
      <NavBar />
      <div className="pt-5">
        <Title
          className="d-flex justify-content-center pt-5"
          text="Les Articles"
        />
      </div>

      <CardArticle />
      <Footer />
    </div>
  );
};
export default articles;
