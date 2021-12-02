import NavBar from "../components/navBar/navBar"
import Head from 'next/head';
import CardAppointment from "../components/Card/CardAppointment/CardAppointment";
import CardAndBgGreentext from "../components/Card/CardAndBgGreentext/CardAndBgGreentext";
import Footer from "../components/footer/footer";


const prendre_rendez_vous=()=> {
    return (
        <div>
       

      <NavBar/>
      <CardAppointment/>
      <CardAndBgGreentext/>
      <Footer/>
        </div>
    )
}

export default prendre_rendez_vous
