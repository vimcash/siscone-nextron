import { useRouter } from "next/router";
import { useAppSelector } from "../../../hooks";
import { Navbar } from "../../../layouts/Navbar";
import { goBack } from "../../../utils";
import { selectAdmin } from "../states/adminState";
import { AdminLiteFrame } from "../components/AdminLiteFrame/AdminLiteFrame";

export const AdminLiteContainer = () => {
  const router = useRouter()
  const admin = useAppSelector(selectAdmin)
  return <>
    <Navbar 
      title="Administrador" 
      onClickRightButton={() => goBack(router)}/>
    <div className="container-fluid">
      <AdminLiteFrame 
        admin={admin}/>
    </div>
  </>
}