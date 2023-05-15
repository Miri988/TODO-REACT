import styles from "./InputCheckbox.module.scss"

export const InputCheckbox = (props) => {
  return (
    <input
        type = "checkbox"
        checked = {props.checked}
        name = {props.name}
        id = {props.id}
        onChange={props.onChange}
    />
  )
}
