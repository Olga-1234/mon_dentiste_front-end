import Image from "next/image";
import logo from "../../assets/monDentiste.png";
import Button from "../button";
import style from "./navBar.module.css";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className={`w-100  ${style.positionFixed}`}>
      <header className={`${style.header}`}>
        <a href="" className={`${style.logo} ${style.linkLogo} `}>
          Mon Dentiste
        </a>
        <input className={`${style.menubtn} `} type="checkbox" id="menu-btn" />
        <label className={`${style.menuicon}`} for="menu-btn">
          <span className={`${style.navicon}`}></span>
        </label>
        <ul className={`${style.menu} `}>
          <li >
            
            <Link href="/" passHref>
              <a title="Accueil" className="text-dark">Accueil</a>
            </Link>
          </li>

          <li>
            <Link href="/trouver_un_dentiste" passHref>
              <a title="Dentistes" className="text-dark ">Dentistes</a>
            </Link>
          </li>

          <li>
            <Link href="/articles" passHref>
              <a title="Articles" className="text-dark">Articles</a>
            </Link>
          </li>
          <li className="">
            <Link href="/a_propos_de_nous" passHref>
              <a title="A propos" className="text-dark">A propos</a>
            </Link>
          </li>
          <li className="">
            <Link href="/login" passHref>
              <a title="login">
                <i className="bi bi-person-circle text-dark"></i>
              </a>
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default NavBar;
