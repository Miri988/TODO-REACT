

export const InputText = ({htmlFor,children, className, value, placeholder, onChange}) => {
  return (
    <div className="wrapper">
        <label 
        htmlFor={htmlFor}
        className="label">
        {children}
        </label>
    
        <input 
        type = "text"
        className={className}
        value = {value}
        required
        placeholder={placeholder}
        onChange={onChange}/>
    </div>
  )
}

