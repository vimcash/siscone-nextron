import { useAppSelector } from "../../hooks"
import { selectVersion } from "../../states/globalState"

export const Footer = () =>{ 
  const version = useAppSelector(selectVersion)
  return <div className="footer text-center">
    <label style={{color: "var(--bsp-font-color-footer)"}}>
      {version} <a href="https://github.com/RaianGil" target="_blank">GitHub/RaianGil</a>
    </label>
  </div>
}
export default Footer