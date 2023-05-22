import { TodoItem } from "../TodoItem/TodoItem"
import styles from "./TodoList.module.scss";

export const TodoList = ({data, editTodo, deleteTodo}) => {
  return (
    <div className={styles.todolist}>
      {
        data.map(item => {
          return (
            <TodoItem key = {item.id}
              item = {item}
              editTodo = {() => editTodo(item.id)}
              deleteTodo = {() => deleteTodo(item.id)}
            />
          )
        })}
    </div>
  )
}
