import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import style from "./style.module.css";

const Dasbord = () => {
  const [state, setState] = useState({ roles: [] });
  useEffect(() => {
    setState({ roles: localStorage.getItem("roles").split(",") });
    console.log(localStorage.getItem("roles").split(","));
    //  console.log(localStorage)
  }, []);
  return (
    <div className="position-relative">
      <div
        className={`d-flex flex-column position-fixed flex-shrink-0 p-3 text-white ${style.bg} `}
        style={{ width: "280px", height: "100vh" }}
      >
        {state.roles.indexOf("admin") > -1 || (
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
          >
            <span className="fs-4">Admin</span>
          </a>
        )}
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link href="/AdminPage" passHref>
              <a href="" className="nav-link text-white" aria-current="page">
                Rendez-vous
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/AdminPage/articles" passHref>
              <a href="" className="nav-link text-white" aria-current="page">
                Articles
              </a>
            </Link>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              Dashboard
            </a>
          </li>
          {state.roles.indexOf("admin") > -1 && (
            <li>
              <Link href="/AdminPage/cabinet" passHref>
                <a className="nav-link text-white">Cabinet</a>
              </Link>
            </li>
          )}

          <li>
            <Link href="/AdminPage/rdv" passHref>
              <a className="nav-link text-white">les Rendez-vous</a>
            </Link>
          </li>
          {state.roles.indexOf("admin") > -1 && (
            <li>
              <Link href="/AdminPage/utilisateur" passHref>
                <a className="nav-link text-white">
                  {/* <svg className="bi me-2" width="16" height="16"><use xlink:href="#people-circle"/></svg> */}
                  Users
                </a>
              </Link>
            </li>
          )}
        </ul>
        <hr />
        <div className="dropdown">
          <Link href="/login" passHref>
            <a>LogOUT</a>
          </Link>
        </div>
      </div>

      <div className="b-example-divider"></div>
    </div>
  );
};

export default Dasbord;
