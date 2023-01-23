import { useAppSelector } from "../../../hooks"
import { Navbar } from "../../../layouts/Navbar"
import { AdminFrame } from "../components"
import { 
  selectDataSource, 
  selectFindByMonth, 
  selectFindByYear, 
  selectListButtons, 
  selectMonths, 
  selectTitles, 
  selectYears,
  selectCategories, 
  selectCategory, 
  selectQueryWhere
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
  const categories = useAppSelector(selectCategories)
  const category = useAppSelector(selectCategory)
  return (
    <>
      <Navbar 
        title="Administrador" 
        onClickRightButton={() => goBack(router)}/>
      <div className="container-fluid">
        <AdminFrame 
          titles={titles}
          buttons={buttons}
          months={months}
          dataSource={dataSource}
          years={years}
          findByMonth={findByMonth}
          findByYear={findByYear}
          categories={categories}
          category={category}/>
      </div>
    </>
  )
}

export default AdminContainer