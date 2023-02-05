import { useAppDispatch, useAppSelector } from "../../../hooks"
import { Navbar } from "../../../layouts/Navbar"
import { AdminFrame } from "../components"
import { selectAdmin, setExternalLoad } from "../states/adminState"
import { useRouter } from "next/router"
import { setDelay } from "../../../utils"

const AdminContainer = () => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const admin = useAppSelector(selectAdmin)
  return (
    <>
      <Navbar 
        title="Administrador" 
        onClickRightButton={async () =>{ 
          await dispatch(setExternalLoad())
          await setDelay(.5)
          router.push('/admin')}
        }/>
      <div className="container-fluid">
        <AdminFrame 
          admin={admin} />
      </div>
    </>
  )
}

export default AdminContainer