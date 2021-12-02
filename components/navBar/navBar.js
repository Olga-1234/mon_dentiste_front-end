import Image from "next/image";
import logo from "../../assets/monDentiste.png";
import Button from "../button/Button";
import style from "./navBar.module.css";
import Link from "next/link";



const NavBar=()=> {
    return (
        <div className={`w-100  ${style.positionFixed}`}>
             <nav className={`navbar-expand-lg bg-light col-12  navbar-light`}>
   <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      

      <div className="navbar-nav me-auto  mb-lg-0">
        <Image className="" src={logo} alt="logo mon dentiste" width="" height="" />
      </div>
      <div className="d-flex px-5  ">
        
      <ul className={`navbar-nav me-auto mb-lg-0 fw-bold ${style.montserat}`}>
        <li className="nav-item">
         <Link href="/"><a className="nav-link px-4">Accueil</a></Link>
        </li>

        <li className={`nav-item`}>
			<Link   href="/trouver_un_dentiste"><a className="nav-link px-4">Trouver un dentiste</a></Link> 
        </li>
        <li className="nav-item">
         <Link href="/articles"><a className="nav-link px-4">Articles</a></Link>
        </li>
        <li className="nav-item">
         <Link href="/a_propos_de_nous"><a className="nav-link px-4">A propos</a></Link>
        </li>

        <li className="px-4 nav-item">
          <Link href="/login"><Button text= "connexion"/></Link>
        </li> 
      </ul>

      </div>
    </div>
  </div>
</nav>

        </div>
    )
}

export default NavBar
