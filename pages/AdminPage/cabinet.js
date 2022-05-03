import SendCabinet from "../../components/form/SendCabinet"
import TableCabinets from "../../components/Table/tableCabinets"
import Layout from "../../layout/layoutSideBar"


const Users = () => {
    return (
        <Layout titre={'Cabinet'}>
      <div className="d-flex row justify-content-center">

            <SendCabinet/>
            <TableCabinets/>
            </div>
        </Layout>
    )
}

export default Users
