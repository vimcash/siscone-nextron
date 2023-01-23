import { nodeFirebird } from "../../../lib/nodeFirebird"

export const postSlide = async (inCode) => {
  const slides = await nodeFirebird(`SELECT * FROM SP_ADD_SLIDE('${inCode}')`)
  return slides[0].O_RETURN
}

export default postSlide
