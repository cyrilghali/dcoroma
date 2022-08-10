
import type { NextApiRequest, NextApiResponse } from 'next'
import genova from '../../data/churches/genova.js'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(genova)
}
