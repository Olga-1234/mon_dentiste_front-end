import Form from "../../components/form/SendArticle";
import Layout from "../../layout/layoutSideBar";
import AppointmentForm from "../../components/Appointment/CardAppointment";

import TableArticles from "../../components/Table/tableArticles";
import TableAppointment from "../../components/Table/tableAppointment";

const index = () => {
  return (
    <Layout titre={"Rendez-vous"}>
      <div className="col-12 d-flex justify-content-center pt-4">
        <div className="col-10">
          <AppointmentForm />
          <TableAppointment/>
        </div>{" "}
      </div>
    </Layout>
  );
};

export default index;
