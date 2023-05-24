import { useState } from "react";

import { Button } from "../../components/Button/Button";
import { InputText } from "../../components/InputText/InputText";

import styles from "./ModalForm.module.scss";

export const ModalForm = ({item, onSubmit, closeModal}) => {

  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);

  const onSave = (e) => {
    e.preventDefault();

    onSubmit (item.id, title, description);
  
  }

  return (
    <div className={styles.modal}>
      <div className={styles.context}>
        <div className="raised segment">
          <div className="fitted segments">
            <div className="centered flex segment">
              <div className="fluid header">Edit todo</div>
            </div>
                <div className="segment">
                  <form className={styles.form} onSubmit = {onSave}>
                  <InputText value = {title} placeholder="Title" onChange = {(e) => setTitle(e.target.value)}/>
                  <InputText value = {description} placeholder="Description" onChange = {(e) => setDescription(e.target.value)}/>
                  <div className="right">
                  <Button type = "submit">Save</Button>
                  <Button onClick = {closeModal}>Close</Button>
                  </div>
                  </form>
                </div>
          </div>
        </div>
      </div>
    </div>
      
  )
}
