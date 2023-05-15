/* import { TodoItem } from "../TodoItem/TodoItem"
import styles from "./TodoList.module.scss";

export const TodoList = (props) => {
  const filterData = `${props.data}`.map (item => {
    return (
      <TodoItem 
      key = {item.id}> 
      </TodoItem>
  )});

  return (
    <div className={styles.todolist}>
       
       {filterData}
        
    </div>
  )
}
 */