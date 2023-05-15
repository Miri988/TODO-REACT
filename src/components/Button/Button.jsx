import styles from "./Button.module.scss";

export const Button = (props) => {
  return (
    <button
    className={styles.btn}
    type = {props.type}
    onClick = {props.onClick}
    >{props.children}
    </button>
  )
}