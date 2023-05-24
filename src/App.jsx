import './App.scss';
import { useState } from 'react';
import { AddTodoForm } from './conteiners/AddTodoForm/AddTodoForm';
import { ModalForm } from './conteiners/ModalForm/ModalForm';
import { TodoList } from './conteiners/TodoList/TodoList';


function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [data,setData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null)
    

  const handlerSubmitForm = (e) => {
    e.preventDefault();

    const newTodo = {
        id: Date.now(),
        title: title,
        description: description,
    };
    
    setData([...data, newTodo]);

    e.target.reset();
  }

  const deleteTodo = (id) => {
    
    setData(data.filter(item => item.id !== id)); 
  }

  const editTodo = (id) => {
    setModalOpen(true);
    const editTask = data.find(item => item.id === id);
    setActiveItem(editTask);
  }

  const handlerModalSubmitForm = (id, title, description) => {
  
    const newData = data.map(i => {
        if (i.id === id) {
          return {
          ...i,
          title: title,
          description: description,
        }
        }
        return i;
      })

      setData(newData);
      setModalOpen(false);
      setActiveItem(null);
    
   
  }


  
  return (
    <>
    <div className="todo vertical flex segments">
      <div className="segment">
      <header className='header_center'>
        <h1> TO DO LIST </h1>
      </header>
      <AddTodoForm 
      setTitle = {setTitle} 
      setDescription = {setDescription} 
      onSubmit = {handlerSubmitForm}/>
      </div>
      <div className="fluid segment">
      <TodoList
      data = {data} 
      setData = {setData} 
      editTodo = {editTodo} 
      deleteTodo = {deleteTodo}/>
      </div>
      </div>

      {modalOpen && <ModalForm
        item = {activeItem}
        onSubmit = {handlerModalSubmitForm}
        closeModal ={() => setModalOpen(false)}/>
      }          
   </> 
  );
}

export default App;
