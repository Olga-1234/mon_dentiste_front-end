import { useDispatch, useSelector } from "react-redux";
import { fetchAppointment } from "../../redux";
import { useEffect } from "react";

const TableAppointment = () => {
  const Appointments = useSelector((state) => state.Appointment.appointments);
  const dispatch = useDispatch();
  console.log('les rendez-vous', Appointments)
  

  useEffect(
    () => dispatch(fetchAppointment()),

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
          {Appointments.map((Appointment, index) => (
            <tr key={Appointment.id}>
              <th scope="row">{index + 1}</th>
              <td>{Appointment.name}</td>
              <td>{Appointment.email}</td>
              <td>{Appointment.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableAppointment;
