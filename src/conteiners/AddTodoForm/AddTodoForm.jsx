
import { Button } from "../../components/Button/Button";
import { InputText } from "../../components/InputText/InputText";

import styles from "./AddTodoForm.module.scss";


export const AddTodoForm = (props) => {
    return (
    <form 
    className={styles.form}
    onSubmit={props.onSubmit}
    >
        <InputText 
        htmlFor="Title" 
        className="inputTitle" 
        placeholder="Enter title" 
        onChange = {(e) => {props.setTitle (e.target.value)}}> Title: </InputText>

        <InputText 
        htmlFor="Description" 
        className="inputDescription" 
        placeholder="Enter description" 
        onChange = {(e) => {props.setDescription (e.target.value)}}> Description: </InputText>

        <Button type = "submit">Submit</Button>
    </form>
  )
}