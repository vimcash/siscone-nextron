import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "../../../../components/ui";
import { useAppDispatch } from "../../../../hooks";
import { useGetSlide, useGetYears } from "../../../CoreApp/hooks";

export const MenuContainer = () => {
  const dispatch = useAppDispatch()
  const router = useRouter();
  const toAdminPage = () => {
    dispatch(useGetSlide(''))
    dispatch(useGetYears())
    router.push('/admin')
  }
  return (
    <div className='row position-absolute w-100 pps-2 pe-1 ps-1'>
      <div className=" col-md-6 p-1">
        <Link href="/user">
          <Button 
            title="Usuario" 
            icon="card" 
            className="w-100 h-100 fs-1"/>
        </Link>
      </div>
      <div className=" col-md-6 p-1">
        <Button 
          title="Administrador" 
          icon="report" 
          className="w-100 h-100 fs-1"
          onClick={() => toAdminPage()}/>
      </div>
    </div>
  )
}