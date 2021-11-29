/* eslint-disable no-unused-vars */
import "bootstrap/dist/css/bootstrap.min.css";
// import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.css";
import {Provider} from "react-redux";
import { store } from "../redux/store"



<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>;



const MyApp = ({ Component, pageProps }) => {

  return (
    <Provider store={store}>
    
  <Component {...pageProps} />

  </Provider>
  
  );

};

export default MyApp;
