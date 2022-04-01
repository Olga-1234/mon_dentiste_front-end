/* eslint-disable no-unused-vars */
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import Head from "next/head";
import 'bootstrap-icons/font/bootstrap-icons.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossorigin="anonymous"
        />
        ;<title>Mon dentiste</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossorigin="anonymous"
        />
 
      
 <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet"/>
        
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
          rel="stylesheet"
        />
        ;
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          rel="stylesheet"
        />
        ;
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/#[[latestVersion]]#/mdb.min.css"
          rel="stylesheet"
        />
        ;
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
          crossorigin="anonymous"
        ></script>
        
        ;
        <script
          type="text/javascript"
          src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/#[[latestVersion]]#/mdb.min.js"
        ></script>
      </Head>

      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
};

export default MyApp;
