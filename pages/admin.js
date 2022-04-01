import Admin from "../components/form/FormArticle"
import {useRouter} from "next/router"
import {useEffect} from "react"
import axios from "axios";




const admin = () => {

    // const token = (

    //      axios.post("http://localhost:7000/api/auth/signIn")
    //   );
    // const router = useRouter();

    // useEffect(() => {
    //     if (!localStorage.getItem(token.accessToken)) router.push("/");
    //     // if (!login_user["id"]) router.push("/");
        
    // }, []);
    


    return (
        <div>
            <Admin/>
        </div>
    )
}

export default admin
