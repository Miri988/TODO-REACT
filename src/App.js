import './App.css';
import { useState } from 'react';
import { AddTodoForm } from './conteiners/AddTodoForm/AddTodoForm';
import { Button } from './components/Button/Button';
//import { TodoList } from './conteiners/TodoList/TodoList';


function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [data,setData] = useState([]);
  

  const handlerSubmitForm = (e) => {
    e.preventDefault();

    const newTodo = {
        id: Date.now(),
        title: title,
        description: description,
    };
    
    setData([...data, newTodo]);
  }

  const deleteTodo = (id) => {
    setData(data.filter(item => item.id !== id));
    console.log(data)
  }

  return (
    <div className="App">
      <header>
        <h1> TO DO LIST </h1>
      </header>
     <AddTodoForm 
     setTitle = {setTitle} 
     setDescription = {setDescription} 
     onSubmit = {handlerSubmitForm}/>
     <div>
      {
        data.map (item => {
          return (
            <div key = {item.id}>
              <span>{item.title}</span>
              <span>{item.description}</span>
              <Button>Edit</Button>
              <Button onClick = {() => deleteTodo(item.id)}>Delete</Button>
            </div>
          )
        })
      }
     </div>

    </div>
  );
}

export default App;
