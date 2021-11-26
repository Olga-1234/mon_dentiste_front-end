import Head from "next/head"
import CardAbout from "../components/Card/CardAbout/CardAbout"
import NavBar from "../components/navBar/navBar"

const Apropos = () => {
    return (
        <div>
             <Head>
        <title>Mon dentiste</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossorigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />;
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />;
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap"
          rel="stylesheet"
        />
        ;
        <link rel="preconnect" href="https://fonts.googleapis.com" />;
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />;
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,700;1,700&display=swap"
          rel="stylesheet"
        />
        ;
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
          crossorigin="anonymous"
        ></script>
      </Head>
<NavBar/>
<CardAbout/>

      
        </div>
    )
}

export default Apropos
