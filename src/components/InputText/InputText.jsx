

export const InputText = (props) => {
  return (
    <div className="wrapper">
        <label 
        htmlFor={props.htmlFor}
        className="label">
        {props.children}
        </label>
    
        <input 
        type = "text"
        className={props.className}
        value = {props.value}
        required
        placeholder={props.placeholder}
        onChange={props.onChange}/>
    </div>
  )
}

