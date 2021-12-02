/* eslint-disable no-unused-vars */

import Head from 'next/head';
import CardAndBg from '../components/Card/CardAndBgGreen/CardAndBgGreen';
import CardAndBgGreentext from '../components/Card/CardAndBgGreentext/CardAndBgGreentext';
import CardAndBgWhite from '../components/Card/CardAndBgwhite/CardAndBgwhite';
import Footer from '../components/footer/footer';
import NavBar from '../components/navBar/navBar'




const Home=()=> {
  return (
    <div className="" >
   
    
     <NavBar/>

<div className="pt-5 col-12">
<CardAndBg className="col-12"/>
</div>

     <CardAndBgWhite/>
     <CardAndBgGreentext />
     <Footer/>

    </div>
  )
}
export default Home;