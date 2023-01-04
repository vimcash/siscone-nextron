import Link from "next/link"
import { Button } from "../../components/ui/Button"
import { useAppSelector } from "../../hooks"
import { selectCurrPage } from "../../states/globalState"

export const Navbar = ({title}) => {
  const currPage = useAppSelector(selectCurrPage)
  return (
    <nav className="navbar">
      <div className="container-fluid">
        {
          currPage != 'home' ?
            <Link href="/home">
              <span className="navbar-brand mb-0 h1">{title}</span>
            </Link>
          :
            <span className="navbar-brand mb-0 h1">{title}</span>
        }
        <div className="d-flex">
          {
            currPage != 'config' ?
              <Link href="/config">
                <Button icon="setting" className="ppr-1"/>
              </Link>
            :
              undefined
          }
        </div>
      </div>
    </nav>
  )
}