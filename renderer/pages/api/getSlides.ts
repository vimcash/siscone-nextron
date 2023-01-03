import type { NextApiHandler } from "next"
import { nodeFirebird } from "../../lib/nodeFirebird"

const getSlides: NextApiHandler = async (request, response) => {
  const slides = nodeFirebird("SELECT * FROM SLIDES")
  response.json({data:slides})
}

export default getSlides