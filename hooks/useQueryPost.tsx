import { MicroCMSListResponse } from "microcms-js-sdk"
import { client } from "libs/client"
import { useQuery } from "@tanstack/react-query"

//ブログ API
export type Post = {
  id: string
  createdat: string
  title: string
  body: string
}
const getPost = async () => {
  const data = await client.getList({ endpoint: "blog" })
  return data
}

export const useQueryPosts = () => {
  return useQuery<MicroCMSListResponse<Post>, Error>({
    queryKey: ["posts"],
    queryFn: getPost,
  })
}

//ポートフォリオ API
export type PoFo = {
  id: string
  url: any
  title: string
  body: string
  publishedAt: string
}
const getPoFo = async () => {
  const data = await client.getList({ endpoint: "portfolio" })
  return data
}

export const useQueryPoFo = () => {
  return useQuery<MicroCMSListResponse<PoFo>, Error>({
    queryKey: ["portfolio"],
    queryFn: getPoFo,
  })
}
