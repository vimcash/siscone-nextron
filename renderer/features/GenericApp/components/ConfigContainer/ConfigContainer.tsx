import { InputLabel } from "../../../../components/form";

export const ConfigContainer = () => (
  <div className="mt-2">
    <div className="col-md-5">
      <InputLabel title="Compañia" value="" onChangeValue={e => console.log(e.target.value)} />
      <InputLabel title="Desayuno" type="time" value="" onChangeValue={e => console.log(e.target.value)} />
      <InputLabel title="Almuerzo" type="time" value="" onChangeValue={e => console.log(e.target.value)} />
      <InputLabel title="Cena" type="time" value="" onChangeValue={e => console.log(e.target.value)} />
    </div>
  </div>
)