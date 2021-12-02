import Head from "next/head";
import CardArticle from "../components/Card/CardArticle/CardArticle";
import Footer from "../components/footer/footer";
import NavBar from "../components/navBar/navBar";
import Title from "../components/title/title";
<<<<<<< HEAD
const articles = ({ratings = 1}) => {

    const ratingsArray = []
    for( let i=0; i < ratings; i++ ){

        ratingsArray.push(i)
    }


=======
const articles = () => {
>>>>>>> feature/endpointofAppointment
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
