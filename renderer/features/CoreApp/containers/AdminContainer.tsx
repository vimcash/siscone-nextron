import { useAppSelector } from "../../../hooks"
import { Navbar } from "../../../layouts/Navbar"
import { AdminFrame } from "../components"
import { 
  selectAdmin
} from "../states/adminState"
import { goBack } from "../../../utils"
import { useRouter } from "next/router"

const AdminContainer = () => {
  const router = useRouter()
  const admin = useAppSelector(selectAdmin)
  return (
    <>
      <Navbar 
        title="Administrador" 
        onClickRightButton={() => goBack(router)}/>
      <div className="container-fluid">
        <AdminFrame 
          admin={admin} />
      </div>
    </>
  )
}

export default AdminContainer