import type { NextApiHandler } from "next"
import { nodeFirebird } from "../../lib/nodeFirebird"

export const GetSlides: NextApiHandler = 
  async (request, response) =>
    response.json({data:nodeFirebird("SELECT * FROM SLIDES")})

export default GetSlides