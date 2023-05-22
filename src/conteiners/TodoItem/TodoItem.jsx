import { Button } from "../../components/Button/Button";
import styles from "./TodoItem.module.scss"

export const TodoItem = ({item, editTodo, setModalOpen, deleteTodo}) => {    
  
    return (
    <div className={styles.todoitem}>
        <span>Title: {item.title}</span>
        <span>Description: {item.description}</span>
        <Button onClick = {editTodo} >Edit</Button>
        <Button onClick = {deleteTodo} >Delete</Button>
    </div>
  )
}
