import Link from "next/link"

export const Footer = () => (
  <div className="footer text-center">
    <label style={{color: "var(--bsp-font-color-footer)"}}>Prueba template 
      <a href="api/getConfig" target="_blank">
        GitHub/RaianGil
      </a>
      <Link href="api/getConfig" className="d-none">
        GitHub/RaianGil
      </Link></label></div>
)

export default Footer