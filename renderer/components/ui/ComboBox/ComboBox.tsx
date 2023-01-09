export const ComboBox = ({className, inOptions, onChange, value}:{className:string, inOptions:string[]|any[], onChange:any, value:string}) => {
  const options = [...new Set(inOptions)]
  return (
    <div className={`${className} p-0`}>
      <select className="form-select" onChange={onChange} value={value}>
        {
          options.map(option => !option.value ? <option value={option} key={option}>{option}</option> : <option value={option.value} key={option.value}>{option.title}</option>)
        }
      </select>
    </div>
  )
}

export default ComboBox