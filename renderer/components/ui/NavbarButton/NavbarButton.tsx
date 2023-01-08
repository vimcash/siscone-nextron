import Link from "next/link"
import { useRouter } from "next/router"
import { useGetConfig } from "../../../features/GenericApp/hooks"
import { useAppDispatch, useAppSelector } from "../../../hooks"
import { selectCurrPage } from "../../../states/globalState"
import { Button } from "../Button"

export const NavbarButton = () => {
  const currPage = useAppSelector(selectCurrPage)
  const dispatch = useAppDispatch()
  const router = useRouter();
  const toConfigPage = () => {
    dispatch(useGetConfig())
    router.push('/config')
  }
  return (
    <div className="d-flex">
      {
        currPage != 'config' && currPage != 'user' ?
          <Button icon="setting" className="ppr-1" onClick={() => toConfigPage()}/>
        :
          <Link href="/home">
            <Button icon="back" className="ppr-1" />
          </Link>
      }
    </div>
  )
}

export default NavbarButton