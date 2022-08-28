import { MicroCMSListResponse } from "microcms-js-sdk"
import { client } from "libs/client"
import { useQuery } from "@tanstack/react-query"

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
