import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

export default async (
  { query: { blog_id } }: NextApiRequest,
  res: NextApiResponse
) => {
  res.setHeader('Content-Type', 'application/json')
  const blogId = typeof blog_id === 'string' ? blog_id : blog_id[0]
  try {
    const { data } = await getBlog(blogId)
    res.end(
      JSON.stringify({
        data
      })
    )
  } catch (e) {
    console.log(e)
    res.end({})
  }
}

export const config = {
  api: {
    bodyParser: false
  }
}

const getBlog = (id: string) =>
  axios.get(
    `https://api.github.com/repos/ryohlan/ryohlan.github.io/issues/${id}`
  )
