
import style from  "../styles/title.module.css"
const  Title=({children})=> {
    return (
        <div className={style.color}>
           <h1>{children}</h1> 
        </div>
    )
}
export default Title;