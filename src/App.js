import './App.css';
import { useState } from 'react';
import { AddTodoForm } from './conteiners/AddTodoForm/AddTodoForm';
import { ModalForm } from './conteiners/ModalForm/ModalForm';
import { TodoList } from './conteiners/TodoList/TodoList';


function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [data,setData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState(null);
  const [modalTitle, setModalTitle] = useState("");
  const [modalDescription, setModalDescription] = useState("");
    

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

  const editTodo = (id, e) => {
    setModalOpen(true);
    setModalInfo({id, title,description});
  }

  const handlerModalSubmitForm = (e) => {
    e.preventDefault();
    const newItem = data.map(item => {
      if (item.id === modalInfo.id) {
        return {
          ...item,
          title: modalTitle,
          description: modalDescription,
        };
      }
      return item;
    })

    setModalOpen(false);
    setModalInfo("");

    setData([...data, newItem]);
    
    e.target.reset();

    

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
      
      <TodoList
      data = {data} 
      setData = {setData} 
      editTodo = {editTodo} 
      deleteTodo = {deleteTodo}/>

      {modalOpen && <ModalForm
        modalTitle = {modalTitle}
        modalDescription = {modalDescription}
        setModalTitle={setModalTitle}
        setModalDescription={setModalDescription}
        onClick = {() => editTodo()}
        modalInfo = {modalInfo}
        onSubmit = {handlerModalSubmitForm}
        closeModal ={() => setModalOpen(false)}/>
      }          
    </div>

    
  );
}

export default App;
