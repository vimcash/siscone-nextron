import { iconsByName } from "../../data"
import { IconsType } from "../../utils/IconsType"

export const IconByName = ({icon}:{icon:IconsType}) => {
  const Icon = iconsByName[icon]
  return <Icon />
}

export default IconByName