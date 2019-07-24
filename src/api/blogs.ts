import { client } from './client'

export function getBlog(id: string) {
  return client.get(`blogs/${id}`)
}
