import Image from "next/image";
import logo from "../../assets/monDentiste.png";
import Button from "../button";
import style from "./style.module.css";
import Link from "next/link";
import {useRouter } from "next/router"

const NavBar = () => {
  const router= useRouter()
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
          <li className="" >
            
            <Link href="/" passHref>
              <a title="Accueil"  className={router.pathname == "/" ? "active text-info border  border-bottom" : "text-dark"} >Accueil</a>
            </Link>
          </li>

          <li>
            <Link href="/trouver_un_dentiste" passHref>
              <a title="Dentistes" className={router.pathname == "/trouver_un_dentiste" ? "active text-info border  border-bottom" : "text-dark"}>Dentistes</a>
            </Link>
          </li>

          <li>
            <Link href="/articles" passHref>
              <a title="Articles" className={router.pathname == "/articles" ? "active text-info border  border-bottom" : "text-dark"}>Articles</a>
            </Link>
          </li>
          <li className="">
            <Link href="/a_propos_de_nous" passHref>
              <a title="A propos" className={router.pathname == "/a_propos_de_nous" ? "active text-info border  border-bottom" : "text-dark"}>A propos</a>
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
