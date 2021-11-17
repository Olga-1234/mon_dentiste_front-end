
import style from "./Button.module.css"

const Button=({text})=> {
    return (
       
          <button className={`nav-link  fw-bold px-5 ${style.borderConnexion}`}>{text}</button>
       
    )
}

export default Button
