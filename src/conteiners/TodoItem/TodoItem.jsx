import { Button } from "../../components/Button/Button";

export const TodoItem = ({item, editTodo, deleteTodo}) => {    
  
    return (
    <div className="raised segment">
      <div className="centered widely relaxed flex">
       <div className="fluid header"> Title: {item.title}
        <div className="sub header">
          Description: {item.description}
        </div>
       </div>
        <Button onClick = {editTodo} >Edit</Button>
        <Button onClick = {deleteTodo} >Delete</Button>
      </div>
    </div>
  )
}
