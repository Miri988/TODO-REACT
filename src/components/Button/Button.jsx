import styles from "./Button.module.scss";

export const Button = ({type,onClick,children}) => {
  return (
    <button
    className={styles.btn}
    type = {type}
    onClick = {onClick}
    >{children}
    </button>
  )
}