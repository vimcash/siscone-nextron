import Link from "next/link"
import { useRouter } from "next/router"
import { Button } from "../../components/ui/Button"
import { useGetConfig } from "../../features/GenericApp/hooks/useGetConfig"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { selectCurrPage } from "../../states/globalState"

export const Navbar = ({title}) => {
  const currPage = useAppSelector(selectCurrPage)
  const dispatch = useAppDispatch()
  const router = useRouter();
  const toConfigPage = () => {
    dispatch(useGetConfig())
    router.push('/config')
  }
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
              <Button icon="setting" className="ppr-1" onClick={() => toConfigPage()}/>
            :
              <Link href="/home">
                <Button icon="back" className="ppr-1" />
              </Link>
          }
        </div>
      </div>
    </nav>
  )
}