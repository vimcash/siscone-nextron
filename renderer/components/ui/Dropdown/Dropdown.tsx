export const Dropdown = () => {
  const showHideDropdown = () => {
    const comboBoxList = document.getElementById('dropdown-menu-p')
    console.log(comboBoxList.classList, comboBoxList.classList.length == 0)
    comboBoxList.classList.length != 0 ? comboBoxList.classList.remove('d-block') : comboBoxList.classList.add('d-block')
  }
  return (
    <div className="dropdown">
    <button 
      className="btn btn-secondary dropdown-toggle" 
      type="button" 
      data-bs-toggle="dropdown" 
      aria-expanded="false"
      onClick={() => showHideDropdown()}>
        Dropdown button
    </button>
    <ul id="dropdown-menu-p">
      <li><a className="dropdown-item" href="#">Action</a></li>
      <li><a className="dropdown-item" href="#">Another action</a></li>
      <li><a className="dropdown-item" href="#">Something else here</a></li>
    </ul>
  </div>
  )
}

export default Dropdown