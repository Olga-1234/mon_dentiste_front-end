import SideBar from "../components/SideBar";
import Head from "next/head";
import style from "./style.module.css";

const LayoutSideBar = ({ children, titre }) => {
  return (
    <div>
      <Head>
        <title>{titre}</title>
      </Head>
      <div className={" d-flex col-12 bg-light"}>
        <div>
          <SideBar />
        </div>
        <div className={`${style.ml280px}`}>{children}</div>
      </div>
    </div>
  );
};

export default LayoutSideBar;
