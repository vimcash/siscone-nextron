import { Button } from "../../../../components/ui/Button";

export const MenuContainer = () => (
  <div className='row position-absolute w-100 pps-2 pe-1 ps-1'>
    <div className=" col-md-6 p-1">
      <Button 
        title="Usuario" 
        icon="card" 
        className="w-100 h-100 fs-1"/>
    </div>
    <div className=" col-md-6 p-1">
      <Button 
        title="Administrador" 
        icon="report" 
        className="w-100 h-100 fs-1"/>
    </div>
  </div>
)