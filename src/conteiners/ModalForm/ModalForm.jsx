import { Button } from "../../components/Button/Button";
import { InputText } from "../../components/InputText/InputText";
import styles from "./ModalForm.module.scss";

export const ModalForm = ({onSubmit, modalInfo, modalTitle, modalDescription, setModalTitle, setModalDescription, closeModal}) => {
  const {title, description} = modalInfo

  return (
    <div className={styles.modal}>
      <div className={styles.modal_context}>
        <form className={styles.form} onSubmit = {onSubmit}>
        <InputText value = {modalTitle || title} placeholder="Title" onChange = {(e) => setModalTitle(e.target.value)}/>
        <InputText value = {modalDescription || description} placeholder="Description" onChange = {(e) => setModalDescription(e.target.value)}/>
        <Button type = "submit">Save</Button>
        <Button onClick = {closeModal}>Close</Button>
        </form>
      </div>
    </div>
  )
}
