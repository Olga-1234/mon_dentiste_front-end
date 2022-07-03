import SendUsers from "../../components/form/SendUsers"
import TableUsers from "../../components/Table/tableUsers"
import Layout from "../../layout/layoutSideBar"


const Users = () => {
    return (
        <Layout>
            <SendUsers/>
            <TableUsers/>
            
        </Layout>
    )
}

export default Users
