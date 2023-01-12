import { nodeFirebird } from "../../../lib/nodeFirebird"

export const postSlide = async (inCode) => {
  const slides = await nodeFirebird(`SELECT * FROM SP_ADD_SLIDE('${inCode}')`)
  if(slides[0].O_RETURN != 'OK')
    throw "Error"
  return slides[0]
}

export default postSlide
