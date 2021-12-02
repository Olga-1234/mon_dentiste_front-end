/* eslint-disable no-unused-vars */
import Head from "next/head";
import CardCabinet from "../components/Card/CardCabinet/CardCabinet";
import CardDentiste from "../components/Card/CardDentiste/CardDentiste";
import Footer from "../components/footer/footer";
import NavBar from "../components/navBar/navBar";
import Title from "../components/title/title";

const trouver_un_dentiste = ({ ratings = 3 }) => {
  const ratingArray = [];
  for (let i = 0; i < ratings; i++) {
    ratingArray.push(i);
  }

  return (
    <div>
      
      <NavBar />
      <CardDentiste />
      <Title className="d-flex justify-content-center" text="Les cabinets" />
      {ratingArray.map((value) => (
        <CardCabinet key={value} />
      ))}

      <Footer />
    </div>
  );
};

export default trouver_un_dentiste;
