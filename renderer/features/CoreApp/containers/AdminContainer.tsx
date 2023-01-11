import { useAppSelector } from "../../../hooks"
import { Navbar } from "../../../layouts/Navbar"
import { AdminFrame } from "../components"
import { selectCurrPage } from "../../../states/globalState"
import { 
  selectDataSource, 
  selectFindByMonth, 
  selectFindByYear, 
  selectListButtons, 
  selectMonths, 
  selectTitles, 
  selectYears 
} from "../states/adminState"
import { goBack } from "../../../utils"
import { useRouter } from "next/router"

const AdminContainer = () => {
  const router = useRouter()
  const titles = useAppSelector(selectTitles)
  const buttons = useAppSelector(selectListButtons)
  const months = useAppSelector(selectMonths)
  const dataSource = useAppSelector(selectDataSource)
  const years = useAppSelector(selectYears)
  const findByYear = useAppSelector(selectFindByYear)
  const findByMonth = useAppSelector(selectFindByMonth)
  return (
    <>
      <Navbar 
        title="Administrador" 
        onClickRightButton={() => goBack(router)}/>
      <hr />
      <div className="container-fluid">
        <AdminFrame 
          titles={titles}
          buttons={buttons}
          months={months}
          dataSource={dataSource}
          years={years}
          findByMonth={findByMonth}
          findByYear={findByYear}/>
      </div>
    </>
  )
}

export default AdminContainer