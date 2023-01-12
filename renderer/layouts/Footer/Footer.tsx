import { useAppSelector } from "../../hooks"
import { selectVersion } from "../../states/globalState"

export const Footer = () =>{ 
  const version = useAppSelector(selectVersion)
  return <div className="footer d-flex container-fluid">
      <label style={{color: "var(--bsp-font-color-footer)"}}>VCCorp Version:{version}</label>
      <label style={{color: "var(--bsp-font-color-footer)"}}>Cont: 849-848-1600</label>
    </div>

}
export default Footer