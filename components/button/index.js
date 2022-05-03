
import style from "./style.module.css"

const Button=({text, type, onClick})=> {
    return (
       
          <button type={type} onClick={onClick} className={`nav-link  fw-bold px-5 ${style.borderConnexion}`}>{text}</button>
       
    )
}

export default Button
