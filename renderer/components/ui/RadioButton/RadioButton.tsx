export const RadioButton = 
  ({className, name, options, onClick}) => options.map(
    option => (
      <div className={`p-0 ${className}`} key={option.value}>
        <input 
          type="radio" 
          className="btn-check" 
          name={name} 
          id={`${name}${option.value}`} 
          autoComplete="off" />
        <label 
          className="btn w-100" 
          htmlFor={`${name}${option.value}`}
          onClick={() => onClick(option.value)}>
            {option.title}
        </label>
      </div>
    )
  )
