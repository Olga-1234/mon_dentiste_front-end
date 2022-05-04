import NavBar from "../components/navBar/navBar";
import Head from "next/head";
import AppointmentForm from "../components/Appointment/CardAppointment";
import Title from "../components/title";
import Footer from "../components/footer";

const prendre_rendez_vous = () => {
  return (
    <div>
      <NavBar />
      <div className="pt-5">
        <Title
          className="d-flex justify-content-center pt-5"
          text="Rendez-vous"
        />
      </div>
      <AppointmentForm />
      <Footer />
    </div>
  );
};

export default prendre_rendez_vous;
