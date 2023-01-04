import { InputLabel } from "../../../../components/form";
import { Button } from "../../../../components/ui/Button";

export const ConfigContainer = () => (
  <div className="mt-2">
    <div className="col-md-5">
      <InputLabel 
        title="Compañia" 
        value="" 
        onChangeValue={e => console.log(e.target.value)} />
      <InputLabel 
        title="Desayuno" 
        type="time" 
        value="" 
        onChangeValue={e => console.log(e.target.value)} />
      <InputLabel 
        title="Almuerzo" 
        type="time" 
        value="" 
        onChangeValue={e => console.log(e.target.value)} />
      <InputLabel title="Cena" type="time" value="" onChangeValue={e => console.log(e.target.value)} />
    </div>
    <div className="position-absolute pps-rb">
      <Button icon="save" className="ppr-1 me-1" primary/>
      <Button icon="cancel" className="ppr-1"/>
    </div>
  </div>
)