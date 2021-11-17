/* eslint-disable no-unused-vars */

import Head from 'next/head';
import CardAndBg from '../components/Card/CardAndBgGreen/CardAndBgGreen';
import CardAndBgWhite from '../components/Card/CardAndBgwhite/CardAndBgwhite';
import NavBar from '../components/navBar/navBar';



const Home=()=> {
  return (
    <div className="">
      <Head>
        <title>Mon dentiste</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>
        <link rel="preconnect" href="https://fonts.googleapis.com" />;
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>;
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet"/>

      </Head>
    
     <NavBar className="position-fixed"/>
     <CardAndBg/>
     <CardAndBgWhite/>

    </div>
  )
}
export default Home;