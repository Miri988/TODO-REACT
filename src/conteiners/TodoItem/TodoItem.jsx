/* import { useState } from "react"

import { Button } from "../../components/Button/Button";
import { InputCheckbox } from "../../components/InputCheckbox/InputCheckbox";

import styles from "./TodoItem.module.scss"



export const TodoItem = (props) => {
    const [isChecked,setIsChecked] = useState (props.checked);
    
    const onChangeHandler = (e) => {
        setIsChecked(!isChecked);
    }

    const editTodo = (e) => {

    }

    const deleteTodo = (e) => {

    }
    
    return (
    <div className={styles.todoitem}>
        <InputCheckbox onChange = {onChangeHandler} />
        <span>{props.children}</span>
        <span>{props.children}</span>
        <Button onClick = {editTodo} >Edit</Button>
        <Button onClick = {deleteTodo} >Delete</Button>
    </div>
  )
}
 */